# 🎬 NextFrame — ML-Powered Movie Recommendation App

<p align="center">
  <!-- Deployment Platforms -->
  <a href="https://movie-recommendation-tp06.vercel.app/">
    <img src="https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Badge"/>
  </a>
  <img src="https://img.shields.io/badge/Backend-Railway-4433FF?style=for-the-badge&logo=railway&logoColor=white" alt="Railway Badge"/>

  <!-- Core Technologies -->
  <img src="https://img.shields.io/badge/Framework-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI Badge"/>
  <img src="https://img.shields.io/badge/UI-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"/>
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>

  <!-- ML / NLP -->
  <img src="https://img.shields.io/badge/Model-Pickle-blue?style=for-the-badge&logo=python&logoColor=white" alt="Pickle Badge"/>
  <img src="https://img.shields.io/badge/NLP-NLTK-85C88A?style=for-the-badge&logo=python&logoColor=white" alt="NLTK Badge"/>

  <!-- Python & Live -->
  <img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Version Badge"/>
</p>

<p align="center">
  <img src="banner.png" alt="NextFrame Banner" style="max-width: 100%;">
</p>


## 📝 Overview

The **NextFrame (Movie Recommendation App)** is a full-stack web application that recommends movies similar to a user’s selected movie. It combines a **Machine Learning backend (Python + FastAPI)** with a **dynamic and interactive frontend (React.js)** to deliver real-time movie suggestions and information

---

## ⚙️ Technology Stack (Minimal & Focused)

### 🖼️ Frontend (React)
- React.js (via Vite)
- React Router DOM – Client-side routing
- Tailwind CSS + Custom CSS – Styling and layout
- Fetch API – To consume backend & TMDb REST API
- Custom Components – MovieHolder, DecryptedText, TryButton, etc.

### 🧠 Backend (Python)
- FastAPI – High-performance web API
- Uvicorn – ASGI server for FastAPI
- Pydantic – Request/response validation
- Pickle / joblib – For loading ML models
- NumPy, Pandas – Data handling
- `requests` – To download `.pkl` from Dropbox
- CORS Middleware – Frontend-backend interaction

### 🤖 Machine Learning
- Trained with: scikit-learn, NLTK
- Features: Genres, overview, cast, crew, keywords
- `CountVectorizer` + Cosine Similarity
- Exported `.pkl` files: `movies.pkl`, `similarity.pkl`

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

--- 

# 🌐 Live Demo
### 🚀 The Movie Recommendation App is live and ready to use:
  - 🔗 Frontend (React + Vite) deployed on Vercel:
    https://movie-recommendation-tp06.vercel.app/
  - 🔗 Backend (FastAPI) deployed on Railway:
    https://movie-recommendation.up.railway.app/

---

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
