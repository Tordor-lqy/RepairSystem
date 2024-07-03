from app.AdminController import *


@app.route("/api/admin/orders", methods=["GET"])
def get_orders():
    one_location_id = int(request.args.get('one_location_id'))
    two_location_id = int(request.args.get('two_location_id'))
    final_location_id = int(request.args.get('final_location_id'))
    damage_type_id = int(request.args.get('damage_type_id'))
    user_id = int(request.args.get('user_id'))

    order_query = Order.query.filter_by(order_is_deleted=0)

    if user_id != -1:
        order_query = order_query.filter_by(user_id=user_id)

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
    per = int(request.args.get('per'))

    ordersQuery = (order_query

                   .order_by(Order.order_update_time.desc())
                   )

    return success(data=auto_page(num, per, ordersQuery, Orders_schema))


@app.route("/api/admin/del/order", methods=["DELETE"])
def del_order():
    order_id = request.args.get('order_id')
    order = Order.query.filter_by(order_id=order_id).first()
    order.order_is_deleted = 1
    db.session.add(order)
    db.session.commit()
    return success(msg="删除成功")


@app.route("/api/admin/add/order", methods=["POST"])
def admin_add_order():
    try:
        data = request.get_json()
        order = Order(final_location_id=data['final_location_id'],
                      damage_type_id=data['damage_type_id'],
                      damage_details=data['damage_details'],
                      order_is_public=data['order_is_public'],
                      user_id=data['user_id'])

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

        return success(msg="添加成功")

    except Exception as e:
        return error(msg=f"添加失败{e}")


@app.route("/api/admin/set/order", methods=["POST"])
def admin_set_order():
    try:
        data = request.get_json()
        order_id = data['order_id']
        order = Order.query.filter_by(order_id=order_id).first()
        if order is None:
            return error(msg="没有该订单，请检查参数是否正确")

        order.final_location_id = data['final_location_id']
        final_location = FinalLocation.query.filter_by(final_location_id=data['final_location_id']).first()
        order.one_location_id = final_location.one_location_id
        order.two_location_id = final_location.two_location_id
        order.one_location_name = final_location.one_location_name
        order.two_location_name = final_location.two_location_name
        order.final_location_name = final_location.final_location_name

        order.damage_details = data['damage_details']
        order.user_id = data['user_id']

        # order_is_repaired
        if order.order_is_repaired == 0:
            order.order_is_repaired = data['order_is_repaired']
            if order.order_is_repaired == 1:
                order.order_completed_time = datetime.now()
        order.order_is_repaired = data['order_is_repaired']

        order.order_is_public = data['order_is_public']
        # order.order_is_deleted = data['order_is_deleted']

        order.order_updated_time = datetime.now()

        db.session.add(order)
        db.session.commit()
        return success(msg="更新成功")

    except Exception as e:
        db.session.rollback()
        return error(msg=f"更新失败:{e}")


@app.route("/api/admin/damage", methods=["GET"])
def admin_get_damage():
    try:
        damages = DamageType.query.all()
        return success(data=DamageTypes_schema.dump(damages))
    except Exception as e:
        return error(msg=f"损坏类型获取失败:{e}")
