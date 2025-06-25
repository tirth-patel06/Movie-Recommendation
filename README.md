# 🎬 Movie Recommendation App — Documentation

## 📝 Overview

The **Movie Recommendation App** is a full-stack web application that recommends movies similar to a user’s selected movie. It combines a **Machine Learning backend (Python + FastAPI)** with a **dynamic and interactive frontend (React.js)** to deliver real-time movie suggestions and information

---

## ⚙️ Technology Stack (Minimal & Focused)

### 📌 Frontend (React)
- **React.js** – Core frontend library
- **React Router DOM** – Client-side routing
- **Axios** – HTTP client for API communication
- **Tailwind CSS / Custom CSS** – Styling and layout
- **Custom Components** – Reusable UI elements (`MovieHolder`, `DecryptedText`, `TryButton`, etc.)

### 📌 Backend (Python)
- **FastAPI** – High-performance Python web framework for building APIs
- **Uvicorn** – ASGI server to run FastAPI
- **Pydantic** – Data validation for request bodies
- **joblib** – For loading pre-trained machine learning models
- **NumPy & Pandas** – Data handling libraries
- **CORS Middleware** – For allowing frontend-backend communication

### 📌 Machine Learning Model
- **Precomputed Cosine Similarity Matrix** – Used for recommending similar movies
- **Pickled `.pkl` files** – `similarity.pkl` and `movies.pkl` (title, overview, vote average, etc.)

---

## 🚀 Features

### 🔍 Search & Suggestion
- Real-time filtering of movie names as the user types.
- Clickable suggestions powered by local static dataset (`movie_name` array).
- On selecting a movie, a POST request is sent to the backend to fetch top 5 similar movies.

### 🎥 Movie Recommendations
- Uses a similarity matrix to determine the closest 5 movies based on a given title.
- Sends movie metadata (title, overview, vote average, ID) to the frontend.

- Enhances recommendation data with visually rich content.

### 🧩 Component-Based Architecture
- Modular React components for:
  - `MovieHolder` – Displays a movie with image, title, description, and rating.
  - `SearchResult` – Interactive search dropdown.
  - `TryButton` – Option to go back and try another search.
  - `Result` – Container for all movie results.
  - `MainWrapper` – Routing and layout control.
  - `Particles` – Optional animated background effect.

### 💡 Visual Experience
- Animated text reveal via `DecryptedText` component.
- Responsive, styled UI for optimal viewing experience.
- Dark-mode themed interface with minimal distractions.

---

## 🔗 API Endpoints

### POST `/suggestions`
- **Request Body:**
```json
{
  "name": "Inception"
}
```
- **Response:**
```json
[
  {
    "name": "Interstellar",
    "overview": "...",
    "rate": 8.6,
    "id": 157336
  },
  ...
]
```

## 🔧 Setup & Run Instructions

### 🖥️ Backend (FastAPI + Python)

1. **Create and activate a virtual environment (optional but recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
2. **Install dependencies:**
   ```bash
   pip install fastapi uvicorn numpy pandas joblib
3. **Ensure these files exist in your backend directory:**
   - main.py – FastAPI server setup
   - ml_model.py – ML recommendation function
   - movies.pkl – Preprocessed movie dataset
   - similarity.pkl – Cosine similarity matrix
4. **Run the FastAPI server:**
   ```bash
   uvicorn main:app --reload
5. **API will run at:**
   ```bash
   http://localhost:8000

### 🌐 Frontend (React)
1. Navigate to the frontend directory and install dependencies:
   ```bash
   npm install
2. Start the React development server:
   ```bash
   npm run dev
3. App will run at:
   ```bash
   http://localhost:5173