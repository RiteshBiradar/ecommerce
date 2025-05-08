# 🌐 E-Commerce App

A simple e-commerce web application built using modern web technologies.

---

## What's Working

- Basic frontend structure with product listing
- Backend API setup with Express.js
- Connection to PostgreSQL via NeonDB
- Simple search functionality for products
- Responsive layout using React + Vite

---

## Tech Stack

| Layer       | Technology        |
|-------------|-------------------|
| Frontend    | React + Vite             |
| Backend     | Node.js + Express |
| Database    | NeonDB (PostgreSQL) |
| Tools       | Axios, CORS, dotenv |

---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RiteshBiradar/ecommerce.git 
cd ecommerce 
```

### 2. Set Up the Backend

```bash
cd backend
npm install

PORT=5000
DATABASE_URL=your_neondb_connection_string_here
```

#### Start the server
```bash
npm start
```
#### Backend will run on http://localhost:5000.

### 3. Set Up the Frontend

```bash
cd ../frontend
npm install

npm run dev
```
#### Frontend will be available at http://localhost:5173 (or another port if 5173 is occupied). 

## Features Implemented

### Product Search Feature

#### 1) Users can search for products by name.
#### 2) The query is sent to the backend which fetches matching results from the database.
#### 3) Results are rendered dynamically in the UI using React components. 

## Contributing 🤝
Contributions are welcome! Fork the project and submit a pull request.


