from app import app
from models import db, User

def run_seeds():
    print('Seeding database ... 🌱')
    # Add your seed data here
    with app.app_context():
        user1 = User('Joreerb', 'jorb@jorb.com', '0000')
        db.session.add_all([user1])
        db.session.commit()
        print('Done! 🌳')

run_seeds()