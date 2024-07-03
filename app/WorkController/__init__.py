from app import app
from app.model import *
from flask import request
from utils.Result import *
from utils.AutoPage import auto_page
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy import engine

sess = scoped_session(sessionmaker(bind=engine))

