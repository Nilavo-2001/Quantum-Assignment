# Full Stack Assignment

This repository contains a full stack application developed using ReactJS for the frontend, NodeJS for the backend, and MongoDB for the database. The project is organized into two main directories: `backend` and `frontend`, each with its own setup and dependencies.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## Project Structure

```
.
├── backend
│   ├── index.js
│   ├── package.json
│   └── ...
└── frontend
    ├── src
    ├── public
    ├── package.json
    └── ...
```

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: NodeJS, Express
- **Database**: MongoDB

## Setup Instructions

### Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the backend server**:

   ```bash
   node index.js
   ```

   The backend server will start on `http://localhost:8000`.

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the frontend application**:

   ```bash
   npm start
   ```

   The frontend application will start on `http://localhost:3000`.

## API Endpoints

### Authentication

- **Sign Up**: `POST http://localhost:8000/api/auth/signup`
- **Login**: `POST http://localhost:8000/api/auth/login`
- **Validate JWT**: `GET http://localhost:8000/api/auth/validate-jwt`

### User Information

- **Fetch All Users**: `GET http://localhost:8000/api/info`

## Screenshots

Below are some screenshots of the frontend application.
