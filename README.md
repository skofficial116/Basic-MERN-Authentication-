
# 🔐 Basic MERN Authentication

A simple **MERN (MongoDB, Express, React, Node.js)** authentication system that includes **user registration, login, and protected routes** using **JWT (JSON Web Tokens)**.  
Deployed on [Vercel (Frontend)](https://basic-mern-authentication-frontend.vercel.app/home).

---

## 🚀 Features

- ✅ User registration with validation  
- 🔒 Secure password hashing using **bcrypt**  
- 🪪 JWT-based login authentication  
- 🔐 Protected routes (frontend + backend)  
- 💾 Persistent login using localStorage  
- 🔔 Toast notifications for feedback  
- 🎨 Clean and minimal React UI  

---

## 🧩 Tech Stack

### **Frontend**
- React 
- React Router 
- React Toastify  
### **Backend**
- Node.js / Express  
- MongoDB + Mongoose  
- bcrypt for password hashing  
- jsonwebtoken for auth  
- joi for validation  
- dotenv for env variables  
- cors + body-parser  
- nodemon for development  

---

## 📁 Project Structure


```

root/  
├── backend/  
│ ├── models/  
│ ├── routes/  
│ ├── controllers/  
│ ├── middleware/   
│ ├── .env  
│ └── index.js  
│  
└── frontend/  
├── src/    
│ ├── pages/  
│ ├── App.js  
│ ├── index.js  
│ └── ...  
├── .env  
└── package.json

```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/skofficial116/basic-mern-authentication.git
cd basic-mern-authentication

```

### 2️⃣ Backend Setup
```bash
cd backend
npm install

```

Create a `.env` file in `/backend`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

```

Run the backend:

```bash
npm start

```

----------

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install

```

Create a `.env` file in `/frontend`:

```
REACT_APP_API_URL=http://localhost:5000

```

Run the frontend:

```bash
npm start

```

----------


## 🔄 API Endpoints

| **Method** | **Endpoint**          | **Description**                |
|-------------|----------------------|--------------------------------|
| **POST**    | `/api/auth/register` | Register a new user            |
| **POST**    | `/api/auth/login`    | Login user and receive JWT     |
| **GET**     | `/api/auth/me`       | Get current user (Protected)   |


----------

## 🌍 Deployment

-   **Frontend:** [Vercel](https://vercel.com/)
    
-   **Backend:**  [Vercel](https://vercel.com/) (due to simple project)
    

----------

