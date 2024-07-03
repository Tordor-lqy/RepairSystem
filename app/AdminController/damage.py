from app.AdminController import *


@app.route("/api/admin/add/damage", methods=["POST"])
def add_damage():
    data = request.get_json()
    new_damage = DamageType_schema.load(data, session=sess)
    db.session.add(new_damage)
    db.session.commit()
    return success(data=DamageType_schema.dump(new_damage))


@app.route("/api/admin/query/damage", methods=["GET"])
def query_damage():
    return success(data=DamageTypes_schema.dump(DamageType.query.all()))


@app.route("/api/admin/set/damage", methods=["PUT"])
def set_damage():
    data = request.get_json()
    damage = DamageType.query.get_or_404(data["damage_type_id"])
    damage = DamageType_schema.load(data, session=sess, instance=damage, partial=True)
    db.session.add(damage)
    db.session.commit()
    return success(data=DamageType_schema.dump(damage))


@app.route("/api/admin/delete/damage/<int:id>", methods=["DELETE"])
def delete_damage(id):
    damage = DamageType.query.get_or_404(id)
    db.session.delete(damage)
    db.session.commit()
    return success(data=DamageType_schema.dump(damage))
