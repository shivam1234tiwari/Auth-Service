1. Project Title
# 🔐 Auth Service API

Authentication Service built with Node.js, Express.js and Supabase Authentication.
2. Features
## Features

- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Logout
- Refresh Token
- Supabase Authentication
3. Tech Stack
## Tech Stack

- Node.js
- Express.js
- Supabase Auth
- dotenv
4. Installation
## Installation

git clone <repository>

cd Auth-Service

npm install
5. Environment Variables

Create .env

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_publishable_key
PORT=3000
6. Run
npm run dev
7. API Endpoints
Method	Endpoint	Description
POST	/auth/signup	Register User
POST	/auth/login	Login User
POST	/auth/logout	Logout User
POST	/auth/refresh	Refresh Access Token
GET	/public/info	Public Route
GET	/protected/profile	Protected Route
8. Example Signup
POST /auth/signup

Body

{
  "email":"user@gmail.com",
  "password":"Password@123"
}
9. Example Login
POST /auth/login

Body

{
  "email":"user@gmail.com",
  "password":"Password@123"
}

Response

{
  "access_token":"...",
  "refresh_token":"..."
}
10. Protected Route

Header

Authorization: Bearer ACCESS_TOKEN
11. Folder Structure
Auth-Service/
│
├── config/
│
├── controllers/
│
├── middleware/
│
├── routes/
│
├── .env.example
│
├── server.js
│
└── README.md
12. Learning Outcomes
## What I Learned

- REST API Development
- Express Routing
- Authentication
- JWT Access Token
- Refresh Token
- Middleware
- Supabase Authentication
- Protected Routes
.env.example

SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_publishable_key
PORT=3000
<img width="1907" height="982" alt="Screenshot 2026-07-20 232133" src="https://github.com/user-attachments/assets/8677b42f-b952-42d5-a5fa-c9733d325cd5" />
