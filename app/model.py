from app import db
from datetime import datetime
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from sqlalchemy import Column, Integer, String, Text, DateTime

Base = db.Model


# --------------------------------------------------------------------------
class DamageType(Base):
    __tablename__ = 'xrrs_damage_types'
    damage_type_id = Column(Integer, primary_key=True, autoincrement=True)
    damage_type_name = Column(String(16), nullable=False)


class DamageTypeSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = DamageType
        include_relationships = False


DamageType_schema = DamageTypeSchema()
DamageTypes_schema = DamageTypeSchema(many=True)


# --------------------------------------------------------------------------

class FinalLocation(Base):
    __tablename__ = 'xrrs_final_locations'
    final_location_id = Column(Integer, primary_key=True, autoincrement=True)
    final_location_name = Column(String(16), nullable=True)
    two_location_id = Column(Integer)
    two_location_name = Column(String(16), nullable=False)
    one_location_id = Column(Integer)
    one_location_name = Column(String(16), nullable=False)


class FinalLocationSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = FinalLocation
        include_relationships = False


FinalLocation_schema = FinalLocationSchema()
FinalLocations_schema = FinalLocationSchema(many=True)


# --------------------------------------------------------------------------

class OneLocation(Base):
    __tablename__ = 'xrrs_one_locations'
    one_location_id = Column(Integer, primary_key=True, autoincrement=True)
    one_location_name = Column(String(200), nullable=True)


class OneLocationSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = OneLocation
        include_relationships = False


OneLocation_schema = OneLocationSchema()
OneLocations_schema = OneLocationSchema(many=True)


# --------------------------------------------------------------------------

class TwoLocation(Base):
    __tablename__ = 'xrrs_two_locations'
    two_location_id = Column(Integer, primary_key=True, autoincrement=True)
    two_location_name = Column(String(50), nullable=True)
    one_location_id = Column(Integer)


class TwoLocationSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = TwoLocation
        include_relationships = False


TwoLocation_schema = TwoLocationSchema()
TwoLocations_schema = TwoLocationSchema(many=True)


class Order(Base):
    __tablename__ = 'xrrs_orders'
    order_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer)
    final_location_id = Column(Integer)
    damage_type_id = Column(Integer)
    damage_details = Column(Text, nullable=False)
    order_is_repaired = Column(Integer, nullable=False, default=0)
    order_update_time = Column(DateTime, default=datetime.now)
    order_is_public = Column(Integer, default=0)
    one_location_id = Column(Integer)
    two_location_id = Column(Integer)
    one_location_name = Column(String(100))
    two_location_name = Column(String(100))
    final_location_name = Column(String(100))
    damage_type_name = Column(String(100))
    order_completed_time = Column(DateTime, default=datetime.now)
    worker_id = Column(Integer, default=1)
    order_is_deleted = Column(Integer, default=0)


class OrderSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Order
        include_relationships = False


Order_schema = OrderSchema()
Orders_schema = OrderSchema(many=True)


class User(Base):
    __tablename__ = 'xrrs_user'
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_orders_number = Column(Integer, default=0)
    user_openid = Column(String(255), nullable=False)
    user_name = Column(String(30), nullable=False)
    user_henau_number = Column(String(50), nullable=False)
    user_section = Column(String(50), nullable=True)
    user_phone = Column(String(50), nullable=True)


class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        include_relationships = False


User_schema = UserSchema()
Users_schema = UserSchema(many=True)


class Worker(Base):
    __tablename__ = 'xrrs_worker'
    worker_id = Column(Integer, primary_key=True, autoincrement=True)
    worker_name = Column(String(255), nullable=False)
    worker_password = Column(String(255), nullable=False)
    worker_status = Column(Integer, nullable=False)
    worker_phone = Column(String(50), nullable=False)
    worker_email = Column(String(200), nullable=False)


class WorkerSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Worker
        include_relationships = False


Workers_schema = WorkerSchema(many=True)
Worker_schema = WorkerSchema()
