from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate(db)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def toJSON(self):
        return {"id": self.id, "username": self.username, "email": self.email, "password": self.password}

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created_at': self.created_at
        }

    def __repr__(self):
        return '<User %r>' % self.username

class Interface(db.Model):
    __tablename__ = 'interfaces'
    id = db.Column(db.Integer, primary_key=True)
    interfaceName = db.Column(db.String(80), unique=True, nullable=False)

    def toJSON(self):
        return {"id": self.id, "interfaceName": self.interfaceName}

    def __init__(self, interfaceName):
        self.interfaceName = interfaceName

    def to_dict(self):
        return {
            'id': self.id,
            'interfaceName': self.interfaceName
        }

    def __repr__(self):
        return '<Interface %r' % self.interfaceName
