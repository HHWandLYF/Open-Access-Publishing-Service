#encoding:utf-8
import os

DEBUG=True
SECRET_KEY=os.urandom(24)

DB_URI = "mysql+mysqldb://root:maple23333@localhost:3306/OPAS"
SQLALCHEMY_DATABASE_URI = DB_URI
SQLALCHEMY_TRACK_MODIFICATIONS = False


