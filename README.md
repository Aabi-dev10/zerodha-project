# 📈 Zerodha Clone — Trading Dashboard

A full-stack **Zerodha-inspired trading platform clone** built with React, Node.js, Express, and MongoDB.

This project recreates the core experience of a modern online trading dashboard with authentication, watchlist, orders, holdings, positions, funds, and a responsive trading interface.

> 🚀 Built for learning, practice, and portfolio purposes.

---

## 🌐 Live Demo

### 🚀 Live Application

[Open Live Zerodha Clone](https://zerodha-frontend-main.onrender.com)

---

## ✨ Features

### 🔐 Authentication

* User registration and login
* Logout functionality
* Session/token verification
* Protected dashboard
* Persistent authentication
* Cookie-based authentication
* Automatic session validation

### 📊 Trading Dashboard

* Zerodha/Kite-inspired dashboard
* Clean and minimal trading interface
* NIFTY 50 section
* SENSEX section
* User profile display
* Responsive navigation
* Desktop and mobile layouts

### ⭐ Watchlist

* Stock watchlist interface
* Market information display
* Easy access to tracked stocks
* Trading-focused UI

### 📦 Orders

* Orders dashboard
* Order information table
* Responsive order interface
* Organized trading information

### 💼 Holdings

* Holdings dashboard
* Portfolio information
* Investment overview
* Responsive layout

### 📍 Positions

* Positions dashboard
* Trading position information
* Clean position interface

### 💰 Funds

* Funds dashboard
* Account balance information
* Trading funds interface

### 🛠️ Apps

* Dedicated applications section
* Dashboard-style application interface

### 📱 Responsive Design

The application is designed for:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The mobile dashboard includes a right-side navigation drawer for easy access to dashboard sections.

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| ⚛️ React.js      | Frontend UI                 |
| ⚡ Vite           | Development & build tool    |
| 🛣️ React Router | Client-side routing         |
| 📡 Axios         | API requests                |
| 🍪 React Cookie  | Cookie management           |
| 🎨 CSS3          | Styling & responsive design |

### Backend

| Technology        | Purpose             |
| ----------------- | ------------------- |
| 🟢 Node.js        | Backend runtime     |
| 🚂 Express.js     | REST API            |
| 🔐 Authentication | User authentication |

### Database

| Technology  | Purpose                 |
| ----------- | ----------------------- |
| 🍃 MongoDB  | Database                |
| 📦 Mongoose | MongoDB object modeling |

### Deployment

| Platform  | Usage                         |
| --------- | ----------------------------- |
| ☁️ Render | Application deployment        |
| 🐙 GitHub | Source code & version control |

---

## 🏗️ Project Structure

```text
zerodha-project/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Summary.jsx
│   │   ├── Orders.jsx
│   │   ├── Holdings.jsx
│   │   ├── Positions.jsx
│   │   ├── Funds.jsx
│   │   ├── Apps.jsx
│   │   ├── WatchList.jsx
│   │   └── ...
│   │
│   └── ...
│
├── zerodha-dashboard/
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Flow

```text
                    ┌───────────────┐
                    │     Login     │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Authentication│
                    └───────┬───────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │ Trading Dashboard   │
                 └──────────┬──────────┘
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      Watchlist           Orders          Holdings
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
          Positions                     Funds
              │                           │
              └─────────────┬─────────────┘
                            ▼
                           Apps
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aabi-dev10/zerodha-project.git
```

### 2. Open the Project

```bash
cd zerodha-project
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 5. Environment Variables

Create the required `.env` files according to your backend and frontend configuration.

Example:

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
VITE_API_URL=your_backend_url
```

> ⚠️ Never upload `.env` files or private API keys to GitHub.

### 6. Start Backend

```bash
cd backend
npm start
```

### 7. Start Frontend

```bash
cd frontend
npm run dev
```

---

## 📸 Screenshots

Add screenshots of the project here to showcase the interface.

Recommended screenshots:

```text
screenshots/
│
├── login.png
├── dashboard.png
├── watchlist.png
├── orders.png
├── holdings.png
├── positions.png
├── funds.png
└── mobile-sidebar.png
```

Then add them to this README:

```markdown
![Dashboard](./screenshots/dashboard.png)
```

---

## 🎯 Project Goals

This project was created to gain practical experience with:

* React.js
* React Router
* REST APIs
* Axios
* Authentication
* Cookies
* Local storage
* Node.js
* Express.js
* MongoDB
* Mongoose
* Responsive web design
* Dashboard UI development
* Git & GitHub
* Full-stack deployment

---

## 📚 What I Learned

While building this project, I practiced:

* Creating reusable React components
* Managing application state
* Building protected routes
* Connecting frontend and backend APIs
* Handling authentication
* Working with MongoDB
* Creating responsive layouts
* Building trading dashboard interfaces
* Managing projects with Git
* Deploying applications with Render

---

## 🔒 Security

The project uses environment variables for sensitive information.

Sensitive values such as:

* Database credentials
* Authentication secrets
* API keys
* Environment variables

should never be committed to the repository.

---

## ⚠️ Disclaimer

This is an **educational project inspired by Zerodha's trading platform**.

It is not affiliated with, sponsored by, or officially connected to Zerodha.

This project is intended for **educational and portfolio purposes only**.

---

## 👨‍💻 Author

### Aabi-dev10

## 👨‍💻 Author

### Aabi-dev10

GitHub:
https://github.com/Aabi-dev10

---

## ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

---

## 🚀 Project Links

**Live Demo:**
https://zerodha-frontend-main.onrender.com

**Source Code:**
https://github.com/Aabi-dev10/zerodha-project


### Built with ❤️ using React, Node.js, Express & MongoDB
