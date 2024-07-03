from app.AdminController import *


@app.route("/api/admin/user/page", methods=["GET"])
def get_page_user():
    page = request.args.get("page")
    size = request.args.get("size")
    user_name = request.args.get("user_name")
    user_henau_number = request.args.get("user_henau_number")
    user_query = User.query
    if user_name != "-1":
        user_query = user_query.filter(User.user_name.like(f"%{user_name}%"))
    if user_henau_number != "-1":
        user_query = user_query.filter(User.user_henau_number.like(f"{user_henau_number}%"))

    return success(data=auto_page(page, size, user_query, Users_schema))


@app.route("/api/admin/user/info", methods=["GET"])
def admin_user_info():
    user_id = request.args.get("user_id")
    user = User.query.filter_by(user_id=user_id).first()
    return success(data=User_schema.dump(user))
