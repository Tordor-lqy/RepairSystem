import requests
from config import oauth_config
from flask import abort
from utils.Result import *


def get_access_token_and_openid(code):
    url = (f"https://oauth.henau.edu.cn"
           f"/oauth2_server"
           f"/access_token"
           f"?appid={oauth_config['appid']}"
           f"&secret={oauth_config['secret']}"
           f"&code={code}"
           f"&grant_type=authorization_code")

    response = requests.request("GET", url)

    if response.json()['status'] != 'error':
        data = response.json().get('data')
        return {
            "access_token": data.get("access_token"),
            "henau_openid": data.get("henau_openid")
        }
    else:
        abort(401, error(msg="code失效，获取access_token , openid失败"))


def get_user_info(access_token, henau_openid):
    url = (f"https://oauth.henau.edu.cn/oauth2_server/userinfo"
           f"?access_token={access_token}"
           f"&henau_openid={henau_openid}")

    response = requests.request("GET", url)

    if response.status_code == 200:
        data = response.json().get('data')
        return data
    else:
        abort(401, error(msg="获取信息失败"))
