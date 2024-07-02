from app.UserController import *
from utils.JwtUtils import *


def is_allow_path(path):
    return path in ['/', '/user/login', '/logout']


def is_assets(path):
    return '/assets/' in path


def is_static_file(path):
    return path.split(".")[-1] in ['css', 'html', 'js', 'ico', 'png', 'jpg', 'webp']


def is_admin_api(path):
    return "api/admin/" in path


@app.before_request
def handle_before_request():
    """在每次请求之前都被执行"""
    path = request.path

    if request.method != "OPTIONS" and path.startswith("/user"):
        parse_jwt(request.headers.get('Authorization'))

    # if not is_allow_path(path) and not is_assets(path) and not is_static_file(path):
    #     data = parse_jwt(request.headers.get('Authorization'))
