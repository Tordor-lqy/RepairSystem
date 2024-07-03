from app.AdminController import *


@app.route("/api/admin/oneLocation", methods=["GET"])
def admin_get_one_loc():
    return success(data=OneLocations_schema.dump(OneLocation.query.all()))


@app.route("/api/admin/twoLocation", methods=["GET"])
def admin_get_two_loc():
    one_location_id = request.args.get("one_location_id")
    return success(data=TwoLocations_schema.dump(TwoLocation.query.filter_by(one_location_id=one_location_id).all()))


@app.route("/api/admin/finalLocation", methods=["GET"])
def admin_get_final_location():
    two_location_id = request.args.get("two_location_id")
    if two_location_id == '-1':
        return success(data=FinalLocations_schema.dump(FinalLocation.query.all()))
    return success(
        data=FinalLocations_schema.dump(FinalLocation.query.filter_by(two_location_id=two_location_id).all()))


@app.route("/api/admin/add/oneLocation", methods=["POST"])
def admin_add_one_location():
    one_location_name = request.args.get("one_location_name")
    db.session.add(OneLocation(one_location_name=one_location_name))
    db.session.commit()
    return success(msg="成功添加一级地点")


@app.route("/api/admin/add/twoLocation", methods=["POST"])
def admin_add_two_location():
    one_location_id = request.args.get("one_location_id")
    two_location_name = request.args.get("two_location_name")
    db.session.add(TwoLocation(one_location_id=one_location_id, two_location_name=two_location_name))
    db.session.commit()
    return success(msg="成功添加二级地点")


@app.route("/api/admin/add/finalLocation", methods=["POST"])
def admin_add_final_location():
    two_location_id = request.args.get("two_location_id")
    final_location_name = request.args.get("final_location_name")
    two_location = TwoLocation.query.filter_by(two_location_id=two_location_id).first()
    one_location = OneLocation.query.filter_by(one_location_id=two_location.one_location_id).first()

    db.session.add(FinalLocation(one_location_id=one_location.one_location_id,
                                 one_location_name=one_location.one_location_name,
                                 two_location_id=two_location_id,
                                 two_location_name=two_location.two_location_name,
                                 final_location_name=final_location_name))
    db.session.commit()
    return success(msg="成功添加最终地点")


@app.route("/api/admin/set/oneLocation", methods=["POST"])
def admin_set_one_location():
    one_location_id = request.args.get("one_location_id")
    one_location_name = request.args.get("one_location_name")
    one_location = OneLocation.query.filter_by(one_location_id=one_location_id).first()
    one_location.one_location_name = one_location_name

    final_location = FinalLocation.query.filter_by(one_location_id=one_location_id).all()
    for i in final_location:
        i.one_location_name = one_location_name
        db.session.add(i)

    db.session.add(one_location)
    db.session.commit()
    return success(msg="成功修改一级地点")


@app.route("/api/admin/set/twoLocation", methods=["POST"])
def admin_set_two_location():
    two_location_id = request.args.get("two_location_id")
    two_location_name = request.args.get("two_location_name")
    two_location = TwoLocation.query.filter_by(two_location_id=two_location_id).first()
    two_location.two_location_name = two_location_name

    final_location = FinalLocation.query.filter_by(two_location_id=two_location_id)
    for i in final_location:
        i.two_location_name = two_location_name
        db.session.add(i)

    db.session.add(two_location)
    db.session.commit()
    return success(msg="成功修改二级地点")


@app.route("/api/admin/set/finalLocation", methods=["POST"])
def admin_final_location():
    final_location_id = request.args.get("final_location_id")
    final_location_name = request.args.get("final_location_name")
    final_location = FinalLocation.query.filter_by(final_location_id=final_location_id).first()
    final_location.final_location_name = final_location_name
    db.session.add(final_location)
    db.session.commit()
    return success(msg="成功修改最终地点")


@app.route("/api/admin/del/oneLocation", methods=["DELETE"])
def admin_del_one_location():
    one_location_id = request.args.get("one_location_id")
    one_location = OneLocation.query.filter_by(one_location_id=one_location_id).first()
    db.session.delete(one_location)

    # 删除二级地点
    two_location = TwoLocation.query.filter_by(one_location_id=one_location_id).all()

    for i in two_location:
        db.session.delete(i)
        # 删除最终地点
        final_location = FinalLocation.query.filter_by(two_location_id=i.two_location_id).all()

        for j in final_location:
            db.session.delete(j)

    db.session.commit()
    return success(msg="删除成功")


@app.route("/api/admin/del/twoLocation", methods=["DELETE"])
def admin_del_two_location():
    two_location_id = request.args.get("two_location_id")
    two_location = TwoLocation.query.filter_by(two_location_id=two_location_id).first()
    db.session.delete(two_location)

    final_location = FinalLocation.query.filter_by(two_location_id=two_location_id).all()
    for i in final_location:
        db.session.delete(i)

    db.session.commit()
    return success(msg="删除成功")


@app.route("/api/admin/del/finalLocation", methods=["DELETE"])
def admin_del_final_location():
    final_location_id = request.args.get("final_location_id")
    final_location = FinalLocation.query.filter_by(final_location_id=final_location_id).first()
    db.session.delete(final_location)
    db.session.commit()
    return success(msg="删除最终地点成功")


