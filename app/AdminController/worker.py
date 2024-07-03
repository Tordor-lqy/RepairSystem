from app.AdminController import *


@app.route("/api/admin/add/worker", methods=["POST"])
def add_worker():
    data = request.get_json()
    worker = Worker_schema.load(data, session=sess)
    db.session.add(worker)
    db.session.commit()
    return success(data=Worker_schema.dump(worker))


@app.route("/api/admin/query/worker", methods=["GET"])
def query_worker():
    p = request.args.get("num")
    s = request.args.get("size")
    return success(data=auto_page(p, s, Worker.query, Workers_schema))


@app.route("/api/admin/set/worker", methods=["PUT"])
def set_worker():
    data = request.get_json()
    worker = Worker.query.get_or_404(data["worker_type_id"])
    worker = Worker_schema.load(data, session=sess, instance=worker, partial=True)
    db.session.add(worker)
    db.session.commit()
    return success(data=Worker_schema.dump(worker))


@app.route("/api/admin/delete/worker/<int:id>", methods=["DELETE"])
def delete_worker(id):
    worker = Worker.query.get_or_404(id)
    db.session.delete(worker)
    db.session.commit()
    return success(data=Worker_schema.dump(worker))
