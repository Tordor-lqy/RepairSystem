from app import app
from app.model import *
from flask import request
from utils.Result import *
from utils.AutoPage import auto_page
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy import engine

sess = scoped_session(sessionmaker(bind=engine))


@app.route("/")
def static_get():
    return app.send_static_file("index.html")


@app.route("/assets/<path:path>")
def send_js(path):
    return app.send_static_file("assets/" + path)


@app.route("/images/<path:path>")
def send_img(path):
    return app.send_static_file("images/" + path)


from . import location, order, user, damage, worker, interceptor, admin
