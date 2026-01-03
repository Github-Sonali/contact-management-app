# 📇 Contact Management App (MERN Stack)

A full-stack **Contact Management Application** built using the **MERN stack**.  
Users can add and view contacts, with data stored securely in MongoDB and deployed on cloud platforms.

---

## 🚀 Live Demo

- **Frontend (Vercel):**  
  👉 https://contact-management-app-one-red.vercel.app

- **Backend API (Render):**  
  👉 https://contact-management-app-gcbp.onrender.com  
  👉 https://contact-management-app-gcbp.onrender.com/api/contacts

---

## 🛠 Tech Stack

### Frontend
- React (TypeScript)
- Vite
- Axios
- CSS (custom styling)
- Deployed on **Vercel**

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS
- Deployed on **Render**

---

## ✨ Features

- Add new contacts (Name, Email, Phone)
- Fetch and display contact list
- REST API integration
- MongoDB database storage
- Full frontend + backend deployment
- Responsive UI

---

## 📂 Project Structure

contact-management-app/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── contactController.js
│ ├── models/
│ │ └── Contact.js
│ ├── routes/
│ │ └── contactRoutes.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ContactForm.tsx
│ │ │ └── ContactList.tsx
│ │ ├── api.ts
│ │ ├── App.tsx
│ │ └── main.tsx
│ ├── index.html
│ └── package.json
│
└── README.md


---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| GET | `/api/contacts` | Get all contacts |
| POST | `/api/contacts` | Create a new contact |

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000

Sample API Response
[
  {
    "_id": "6958ded0bec2d0e7348dd675",
    "name": "Sakshi Gupta",
    "email": "sakshipgl@gmail.com",
    "phone": "1234567891"
  }
]


Installation (Local Setup)
Backend
cd backend
npm install
npm start


Frontend
cd frontend
npm install
npm run dev

Author
Sonali Gupta
GitHub: https://github.com/Github-Sonali
