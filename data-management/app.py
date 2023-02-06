import os
from flask import Flask, send_file, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config
from models import db, User, Interface
import platform
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

app = Flask(__name__, static_folder='public')
CORS(app, origins=['*'])
app.config.from_object(Config)
jwt = JWTManager(app)
db.init_app(app)
migrate = Migrate(app, db)

@app.get('/')
def home():
    return send_file('welcome.html')

@app.get('/users')
def all_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@app.get('/interfaces')
def all_interfaces():
    interfaces = Interface.query.all()
    return jsonify([interface.to_dict() for interface in interfaces])

@app.post('/login')
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if not user:
        return({'error': 'No account found'}), 404
    else:
        given_password = data['password']
        if user.password == given_password:
            #authentication
            token = create_access_token(identity=user.id)
            return jsonify({'user': user.to_dict(), 'token': token}), 200
        else:
            return jsonify({'error': 'Invalid password'}), 422

# @app.patch('/users/<int:id>')
# def update_user(id):
#     user = User.query.get(id)

@app.delete('/users/<int:id>')
@jwt_required()
def delete_user(id):
    user = User.query.get(id)
    if user:
        print('Deleting user successfully...')
        current_user_id = get_jwt_identity()
        user = User.query.get(int(current_user_id))
        print('Current user is', user)
        if user.id == id:
            print('You can delete this account')
            return jsonify(user.to_dict())
        else:
            print("You cannot delete an account you do not own.")
            return jsonify({'error': 'Stahhp!'}), 401
    else:
        return({'error': 'No user found'}), 404





if __name__ == '__main__':
    app.run(host='127.0.0.1', port=os.environ.get('PORT', 3001))