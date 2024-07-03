from app.UserController import *
from flask_cors import cross_origin
from utils.Oauth import *
from utils.JwtUtils import *
from utils.WxPusher import *
from flask import send_from_directory




# --------------------------------------------------------------------------
# 用户登录接口
@app.route('/user/login', methods=['GET'])
@cross_origin()
def login_user():
    code = request.args.get("code")

    # 获取access_token 和 openid
    oauth_data = get_access_token_and_openid(code)

    # 获取用户信息
    user_data = get_user_info(oauth_data['access_token'], oauth_data['henau_openid'])

    # 判断数据库是否有该用户没有则添加用户
    user = User.query.filter_by(user_openid=user_data['henau_openid']).first()
    if user is None:
        user = User(
            user_openid=user_data['henau_openid'],
            user_name=user_data['user_name'],
            user_henau_number=user_data['user_number'],
            user_section=user_data['user_section'],
            user_phone=user_data['user_phone']
        )
        db.session.add(user)
        db.session.commit()

    payload = {
        'user_id': user.user_id,
        'user_name': user.user_name,
        'user_henau_number': user.user_henau_number
    }

    token = create_jwt(payload)

    payload['token'] = token
    return success(data=payload)


# --------------------------------------------------------------------------
# 获取全部损坏类型
@app.route('/user/damage/all', methods=['GET'])
@cross_origin()
def get_damage_all():
    damage_types = DamageType.query.all()
    result = DamageTypes_schema.dump(damage_types)
    return success(data=result)


# --------------------------------------------------------------------------
# 获取全部一级地点信息
@app.route('/user/one/location/all', methods=['GET'])
@cross_origin()
def get_one_location_all():
    one_locations = OneLocation.query.all()
    result = OneLocations_schema.dump(one_locations)
    return success(data=result)


# --------------------------------------------------------------------------
# 根据一级地点获取二级地点信息
@app.route('/user/two/location/by/one/location', methods=['GET'])
@cross_origin()
def get_two_location_by_one_location_all():
    one_location_id = request.args.get('one_location_id')
    two_locations = TwoLocation.query.filter_by(one_location_id=one_location_id).all()
    result = TwoLocations_schema.dump(two_locations)
    return success(data=result)


# --------------------------------------------------------------------------
# 根据二级地点获取最终地点信息
@app.route('/user/final/location/by/two/location', methods=['GET'])
@cross_origin()
def get_final_location_by_two_location_all():
    two_location_id = request.args.get('two_location_id')
    final_locations = FinalLocation.query.filter_by(two_location_id=two_location_id).all()
    result = FinalLocations_schema.dump(final_locations)
    return success(data=result)


# --------------------------------------------------------------------------
# 添加订单
@app.route('/user/add/order', methods=['POST'])
@cross_origin()
def add_order():
    # try:
    data = request.get_json()
    order = Order(final_location_id=data['final_location_id'],
                  damage_type_id=data['damage_type_id'],
                  damage_details=data['damage_details'],
                  order_is_public=data['order_is_public'])

    # 获取user_id
    payload = parse_jwt(request.headers['Authorization'])
    order.user_id = payload.get("user_id")

    # 获取位置信息
    final_location = FinalLocation.query.filter_by(final_location_id=data['final_location_id']).first()
    order.one_location_id = final_location.one_location_id
    order.two_location_id = final_location.two_location_id
    order.one_location_name = final_location.one_location_name
    order.two_location_name = final_location.two_location_name
    order.final_location_name = final_location.final_location_name

    # 获取故障类型信息
    damage_type = DamageType.query.filter_by(damage_type_id=data['damage_type_id']).first()
    order.damage_type_name = damage_type.damage_type_name

    db.session.add(order)
    db.session.commit()

    html = data_to_html(Order_schema.dump(order))
    send_message(html)

    return success(msg="提交成功")
    # except Exception as e:
    #
    #     return error(msg=str(e))


# --------------------------------------------------------------------------
# 订单条件加分页查询

@app.route('/user/order/query', methods=['GET'])
@cross_origin()
def get_all_orders():
    one_location_id = int(request.args.get('one_location_id'))
    two_location_id = int(request.args.get('two_location_id'))
    final_location_id = int(request.args.get('final_location_id'))
    damage_type_id = int(request.args.get('damage_type_id'))

    order_query = Order.query.filter_by(order_is_public=1).filter_by(order_is_deleted=0)

    if one_location_id != -1:
        if two_location_id != -1:
            if final_location_id != -1:
                order_query = order_query.filter_by(final_location_id=final_location_id)
            else:
                order_query = order_query.filter_by(two_location_id=two_location_id)
        else:
            order_query = order_query.filter_by(one_location_id=one_location_id)
    if damage_type_id != -1:
        order_query = order_query.filter_by(damage_type_id=damage_type_id)

    num = int(request.args.get('num'))
    if num < 1:
        return error(msg="已经是第一页")

    per = int(request.args.get('per'))
    orders = (order_query
              .order_by(Order.order_update_time.desc())
              .offset((num - 1) * per).limit(per).all())
    res = {}
    res["records"] = Orders_schema.dump(orders)
    res["total"] = order_query.count()

    if len(res["records"]) > 0 or num == 1:
        return success(data=res)

    if num < 1:
        return error(msg="已经是第一页")
    else:
        return error(msg="已经是最后一页")


# --------------------------------------------------------------------------
# 获取自己的订单

@app.route('/user/order/query/me', methods=['GET'])
@cross_origin()
def get_all_orders_me():
    p = request.args.get("num")
    s = request.args.get("per")
    payload = parse_jwt(request.headers['Authorization'])
    user_id = int(payload.get("user_id"))
    ordersQuery = (Order.query
                   .filter_by(user_id=user_id)
                   .filter_by(order_is_deleted=0)
                   .order_by(Order.order_update_time.desc())
                   )

    return success(data=auto_page(p, s, ordersQuery, Orders_schema))


# --------------------------------------------------------------------------
# 获取订单详情
@app.route("/user/order/info", methods=['GET'])
@cross_origin()
def get_order_info():
    order_id = request.args.get('order_id')
    order = Order.query.filter_by(order_id=order_id).first()

    # 查询身份，是否可以访问
    res, data = parse_jwt(request.headers['Authorization'])

    if not res:
        return error(msg=data)

    if order.order_is_public == 0 and order.user_id != data['user_id']:
        return error(msg="权限不足，禁止访问")

    # 补充结果
    final_location = FinalLocation.query.filter_by(final_location_id=order.final_location_id).first()
    res = {**Order_schema.dump(order), **FinalLocation_schema.dump(final_location)}

    return success(data=res)


# --------------------------------------------------------------------------
# 订单更新
@app.route("/user/order/info/update", methods=['POST'])
@cross_origin()
def update_order_info():
    order_data = request.get_json()
    order_id = order_data.get("order_id")

    # 查询报单
    order = Order.query.filter_by(order_id=order_id).first()
    if not order:
        return error(msg="该单已不存在")

    # 查询身份，是否可以访问
    res, data = parse_jwt(request.headers['Authorization'])
    if order.user_id != data['user_id']:
        return error(msg="权限不足，禁止访问")

    order.final_location_id = order_data.get("final_location_id")
    final_location = FinalLocation.query.filter_by(final_location_id=order.final_location_id).first()
    order.one_location_id = final_location.one_location_id
    order.two_location_id = final_location.two_location_id
    order.damage_details = order_data.get("damage_details")
    order.order_is_public = order_data.get("order_is_public")
    order.order_update_time = datetime.datetime.now()

    db.session.add(order)
    db.session.commit()
    return success(msg="更新成功")


# --------------------------------------------------------------------------

@app.route("/user/order/delete/<int:order_id>", methods=['DELETE'])
@cross_origin()
def delete_order(order_id):
    order = Order.query.filter_by(order_id=order_id).first()
    if not order:
        return error(msg="该单已不存在")

    # 查询身份，是否可以访问
    data = parse_jwt(request.headers['Authorization'])
    if order.user_id != data['user_id']:
        return error(msg="权限不足，禁止访问")

    order.order_is_deleted = 1;
    db.session.add(order)
    db.session.commit()
    return success("删除成功")
