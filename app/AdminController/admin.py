from app.AdminController import *
from utils.JwtUtils import *


@app.route("/api/admin/login", methods=["POST"])
def admin_login():
    data = request.get_json()
    username = data["admin_name"]
    password = data["admin_password"]
    admin = Admin.query.filter_by(admin_name=username, admin_password=password).first()
    if admin is None:
        return error(msg="没有这个管理员")
    token = create_admin_jwt({
        "admin_id": admin.admin_id,
        "admin_name": admin.admin_name
    })

    return success(data={
        "token": token
    })


@app.route("/api/admin/test", methods=["GET"])
def admin_test():
    return success(data="已经登陆了")
