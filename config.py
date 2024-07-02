# 导入相关库
# --------------------------------------------------------------------------

mysql_config = {
    'host': 'localhost',
    'port': 3306,
    'database': 'xrrs',
    'user': 'xrrs',
    'password': 'xrrsxrrs'
}

oauth_config = {
    'appid': "nd4f60c50ae22887bc",
    'secret': "3a933d2e924f92c32b7c3eaa843b4ff4"
}

# noinspection SpellCheckingInspection
jwt_config = {
    "secretkey": "ehjfsdfvfksgfigwehfvkfhvksd"
}

# --------------------------------------------------------------------------
mysql_uri = (f"mysql+pymysql:/"
             f"/{mysql_config.get('user')}"
             f":{mysql_config.get('password')}"
             f"@{mysql_config.get('host')}"
             f":{str(mysql_config.get('port'))}"
             f"/{mysql_config.get('database')}")
# --------------------------------------------------------------------------
