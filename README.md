# TuneTogether

Social streaming platform for watching movies and listening to music together with friends.

## Project Structure

- `backend/` - FastAPI backend with MongoDB
- `frontend/` - React frontend with Tailwind CSS

## Quick Start

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file:
```bash
cp .env.example .env
```

5. Update `.env` with your MongoDB connection string and JWT secret key.

6. Make sure MongoDB is running (local or remote).

7. Run the server:
```bash
python run.py
# Or: uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, defaults to `http://localhost:8000`):
```bash
VITE_API_BASE_URL=http://localhost:8000
```

4. Run the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Features Implemented

- ✅ User authentication (signup/login)
- ✅ JWT token-based authentication
- ✅ Protected routes
- ✅ User profile page
- ✅ MongoDB integration

## Next Steps

- WebRTC for webcams and screen sharing
- Socket.IO for real-time synchronization
- Browser extension for Netflix/Prime Video
- Spotify API integration for music streaming