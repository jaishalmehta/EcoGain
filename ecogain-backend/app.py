from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy 
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash
import jwt 
import datetime
from flask_cors import CORS
from functools import wraps



app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./data/ecogain.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False    # Disables modification notifications
app.config['SECRET_KEY'] = 'string'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from models import User, Activity

#Sign up/create an account
@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    hash_password = generate_password_hash(data['passwordOne'], method='sha256')
        # verification
    new_user = User(name = data['name'], username = data['username'], email = data['email'], password_hash = hash_password, total_points = 0 )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message' : 'new user created'})

#allow to take username and pword
# use http authentication
#creates a token which will expire after some time
#use token in header for subsequent req
@app.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        # if no auth info at all / no user/no pwordthen return the following
        return make_response('could not verify', 401, {'WWW-Authenticate' : 'Basic realm= "Login required!"'})
    
    # if there is auth information
    # want to get the user
    user = User.query.filter_by(username=auth.username).first()

    if not user:
        return jsonify({'message': ' no user found'})

    # then the user does exist
    # need to check pword
    if check_password_hash(user.password_hash, auth.password):
        # then generate token
        token = jwt.encode({'id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})

    # if pword incorrect
    return make_response('could not verify', 401, {'WWW-Authenticate': 'Basic realm= "Login required!"'})


# decorator for the token requied
# reusable 
# certain routes require a token to access (i.e. a user account) 
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # if there is an access token then assign it to token variable
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message' : 'token is missing'}), 401

        # if the token is there
        try:
            # decodes the jwt
            data = jwt.decode(token, app.config['SECRET_KEY'])
            # queries the User db for the user with the id of the id in the decoded web token
            # since it is unique can return first result from
            current_user = User.query.filter_by(id=data['id']).first()
            print(current_user)
        except:
            return jsonify({'message': 'token is invalid'}), 401

        # want to pass the user object to the router
        return f(current_user, *args, **kwargs)

    return decorated


# gets the user currently using the app using their jwt that we hopefully store in local storage 
# and send it in the header of our fetch requests on the front end
@app.route('/current_user', methods=['GET'])
@token_required
def get_current_user(current_user):
    # this step is a bit redundant but i couldn't be bothered to type out everything again
    print(current_user)
    user = current_user
    # i think this is also redundant because the decorator should always return the user or it will
    # throw an error
    if not user:
        return jsonify({'message': ' no user found'})

    user_data = {}
    user_data['id'] = user.id
    user_data['name'] = user.name
    user_data['username'] = user.username
    user_data['email'] = user.email
    user_data['password'] = user.password_hash
    user_data['total_points'] = user.total_points

    # might wanna change these returns to not include 'user'
    return jsonify({'user': user_data})
    

# returns all users - potential route for the leaderboard feature (nice-to-have feature)
@app.route('/user', methods=['GET'])
def get_all_users():
    users = User.query.all()
    output = []
    for user in users:
        user_data = {}
        user_data['id'] = user.id
        user_data['name'] = user.name
        user_data['username'] = user.username
        user_data['email'] = user.email
        user_data['password'] = user.password_hash
        user_data['total_points'] = user.total_points
        output.append(user_data)

    return jsonify({'users': output})

# th might be helpful starting point for Jaishal's task of filtering the activities
@app.route('/activities', methods=['GET'])
def all_activities():
    activities = Activity.query.all()
    output = []
    for activity in activities:
        activity_data = {}
        activity_data['name'] = Activity.name
        activity_data['activity_points'] = Activity.activity_points
        output.append(activity_data)
    
    return jsonify({'activities': output})


# returns one user using a specified id in the url
#  maybe we don't need this for our app
@app.route('/user/<user_id>', methods=['GET'])
@token_required
def get_one_user(current_user, user_id):
    user = User.query.filter_by(id = user_id).first()
    if not user: 
        return jsonify({'message': ' no user found'})
    
    user_data = {}
    user_data['id'] = user.id
    user_data['name'] = user.name
    user_data['username'] = user.username
    user_data['email'] = user.email
    user_data['password'] = user.password_hash
    user_data['total_points'] = user.total_points

    # might wanna change these returns to not include 'user'
    return jsonify({ 'user': user_data})



# think we should re do this to delete current user again using the decorator - similar to above
# for if we want a delete profile section on profile page
@app.route('/user/<user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.filter_by(id=user_id).first()

    if not user:
        return jsonify({'message': ' no user found'})
    
    db.session.delete(user)
    db.session.commit()
    return jsonify ({'message': 'user deleted'})


