from flask import Flask
import config
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = config.mysql_uri
db = SQLAlchemy()
db.init_app(app)

CORS(app, cors_allowed_origins="*")




def create_app():
    with app.app_context():
        from . import routes

    return app
