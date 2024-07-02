from flask import Flask
import config
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = config.mysql_uri
db = SQLAlchemy()
db.init_app(app)


# @app.route("/")
# def index():
#     return app.send_static_file("index.html")


@app.route("/assets/<path:path>")
def send_js(path):
    return app.send_static_file("assets/" + path)


def create_app():
    with app.app_context():
        from . import routes
    CORS(app, cors_allowed_origins="*")
    return app
