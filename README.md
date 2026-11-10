# 📈 Zerodha Clone — Trading Dashboard

A full-stack Zerodha-inspired trading platform clone built with React, TypeScript, Node.js, Express, and MongoDB.

This project recreates the core experience of a modern online trading dashboard with authentication, watchlist, orders, holdings, positions, funds, and a responsive trading interface.

🚀 Built for learning, practice, and portfolio purposes.

## 🌐 Live Demo

🚀 **[Open Live Zerodha Clone](https://zerodha-frontend-main.onrender.com)**

## ✨ Features

### 🔐 Authentication
- User registration and login
- Logout functionality
- Session/token verification
- Protected dashboard
- Persistent, cookie-based authentication
- Automatic session validation

### 📊 Trading Dashboard
- Zerodha/Kite-inspired dashboard
- Clean and minimal trading interface
- NIFTY 50 and SENSEX sections
- User profile display
- Responsive navigation for desktop and mobile

### ⭐ Watchlist
- Stock watchlist with price and percentage change
- Buy and Sell actions on hover
- Doughnut chart of watchlist prices

### 📦 Orders
- Orders table (instrument, quantity, price, BUY/SELL type)
- Empty state when no orders are placed

### 💼 Holdings
- Holdings table with current value, P&L, net and day change
- Total investment, current value and overall P&L summary
- Bar chart of stock prices

### 📍 Positions
- Positions table with product, quantity, average price, LTP and P&L

### 💰 Funds & 🛠️ Apps
- Funds dashboard with account balance information
- Dedicated applications section

### 📱 Responsive Design
Designed for desktop, laptop, tablet and mobile. The mobile dashboard includes a right-side navigation drawer for easy access to all sections.

## 🔷 TypeScript

The trading dashboard (`zerodha-dashboard/`) has been migrated to **TypeScript**:

- Shared type definitions in `src/types.ts` (`Stock`, `Holding`, `Position`, `Order`)
- Typed component props, state (`useState<Holding[]>`) and React Context
- Typed API responses with Axios (`axios.get<Holding[]>(...)`)
- A union type for order mode (`"BUY" | "SELL"`)
- Strict mode enabled, checked with `tsc --noEmit`

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| ⚛️ React.js | Frontend UI |
| 🔷 TypeScript | Typed components, props, state and API responses (dashboard) |
| ⚡ Vite | Development & build tool |
| 🛣️ React Router | Client-side routing |
| 📡 Axios | API requests |
| 🍪 React Cookie | Cookie management |
| 🎨 Material UI | Tooltips and icons |
| 🎨 CSS3 | Styling & responsive design |

### Backend
| Technology | Purpose |
|---|---|
| 🟢 Node.js | Backend runtime |
| 🚂 Express.js | REST API |
| 🔐 Authentication | Cookie/token-based user authentication |

### Database
| Technology | Purpose |
|---|---|
| 🍃 MongoDB | Database |
| 📦 Mongoose | MongoDB object modeling |

### Deployment
| Platform | Usage |
|---|---|
| ☁️ Render | Application deployment |
| 🐙 GitHub | Source code & version control |

## 🏗️ Project Structure

```
zerodha-project/
│
├── backend/                  # Node.js + Express REST API
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ...
│
├── frontend/                 # Main website (landing, login, signup)
│   └── src/
│       └── ...
│
├── zerodha-dashboard/        # Trading dashboard (React + TypeScript)
│   ├── src/
│   │   ├── components/       # Dashboard, WatchList, Holdings, Orders,
│   │   │                     # Positions, GeneralContext (.tsx), ...
│   │   ├── data/
│   │   │   └── data.ts       # Typed sample data
│   │   ├── types.ts          # Shared TypeScript types
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔄 Application Flow

```
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

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Aabi-dev10/zerodha-project.git
cd zerodha-project
```

### 2. Install and start the backend
```bash
cd backend
npm install
npm start
```

### 3. Install and start the frontend
Open another terminal:
```bash
cd frontend
npm install
npm run dev
```

### 4. Install and start the dashboard
Open another terminal:
```bash
cd zerodha-dashboard
npm install
npm run dev
```

To check types and create a production build:
```bash
npx tsc --noEmit
npm run build
```

### 5. Environment variables
Create the required `.env` files according to your backend and frontend configuration.

Example:
```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
VITE_API_URL=your_backend_url
```

⚠️ Never upload `.env` files or private API keys to GitHub.

<!--
## 📸 Screenshots
Add screenshots here, for example:
![Dashboard](./screenshots/dashboard.png)
-->

## 🎯 Project Goals

This project was created to gain practical experience with:

React.js, TypeScript, React Router, REST APIs, Axios, Authentication, Cookies, Node.js, Express.js, MongoDB, Mongoose, Responsive web design, Dashboard UI development, Git & GitHub, and full-stack deployment.

## 📚 What I Learned

- Creating reusable React components
- Managing application state and React Context
- Building protected routes
- Connecting frontend and backend APIs
- Handling cookie-based authentication
- Working with MongoDB and Mongoose
- Migrating a React app to TypeScript: typed props, state, context and Axios responses
- Creating responsive layouts and trading dashboard interfaces
- Managing projects with Git (branches, pull requests, merges)
- Deploying applications with Render

## 🔒 Security

The project uses environment variables for sensitive information such as database credentials, authentication secrets and API keys. These values should never be committed to the repository.

## ⚠️ Disclaimer

This is an educational project inspired by Zerodha's trading platform. It is not affiliated with, sponsored by, or officially connected to Zerodha. It is intended for educational and portfolio purposes only.

## 👨‍💻 Author

**Aabi-dev10**
GitHub: [github.com/Aabi-dev10](https://github.com/Aabi-dev10)

## 🚀 Project Links

- Live Demo: https://zerodha-frontend-main.onrender.com
- Source Code: https://github.com/Aabi-dev10/zerodha-project

---

Built with ❤️ using React, TypeScript, Node.js, Express & MongoDB

⭐ If you found this project interesting, consider giving the repository a star.
