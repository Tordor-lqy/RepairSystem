from app.UserController import *
from utils.JwtUtils import *


@app.before_request
def handle_before_request():
    """在每次请求之前都被执行"""
    path = request.path

    if request.method != "OPTIONS" and (not path.startswith("/api/admin/login")) and path.startswith("/api/admin"):
        parse_admin_jwt(request.headers.get('Authorization'))


