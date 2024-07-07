# MERN Fullstack Web App

## Description
This is a fullstack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to perform CRUD operations on a collection of books. Users can create, read, update, and delete book entries through a user-friendly interface.

## Features
- Create, Read, Update, Delete (CRUD) operations for books
- Responsive design for mobile and desktop views
- Loading spinners for asynchronous operations
- Error handling and user notifications

## Technologies Used
- **Frontend**: React, Axios, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/mern-fullstack-web-app.git
    cd mern-fullstack-web-app
    ```

2. **Backend Setup**
    - Navigate to the `backend` directory
    ```bash
    cd backend
    ```
    - Install dependencies
    ```bash
    npm install
    ```
    - Create a `.env` file and add your MongoDB URI and other environment variables
    ```bash
    MONGO_URI=your_mongodb_uri
    ```
    - Start the backend server
    ```bash
    npm start
    ```

3. **Frontend Setup**
    - Navigate to the `frontend` directory
    ```bash
    cd ../frontend
    ```
    - Install dependencies
    ```bash
    npm install
    ```
    - Start the frontend development server
    ```bash
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:5555` to view the app.
- Add, view, edit, or delete book entries.
