To get started with the Task Manager Backend, follow these steps:

1. Clone the repository

2. Install dependencies
npm install
3. Configure environment variables
Create a .env file in the root directory and add the following environment variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1d
BCRYPT_SALT_ROUNDS=10
4. Run the application

npm start
The app will be available at http://localhost:5000.
