# TuneTogether Backend

FastAPI backend with MongoDB for TuneTogether social streaming platform.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB connection string and JWT secret key.

4. Make sure MongoDB is running (local or remote).

5. Run the server:
```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

API documentation (Swagger UI) will be available at `http://localhost:8000/docs`

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/login` - Login and get access token
- `GET /api/auth/me` - Get current user information (requires authentication)
- `POST /api/auth/logout` - Logout (clears cookie)

## Environment Variables

- `MONGODB_URL` - MongoDB connection string (default: `mongodb://localhost:27017`)
- `MONGODB_DB_NAME` - Database name (default: `tunetogether`)
- `JWT_SECRET_KEY` - Secret key for JWT tokens (change in production!)
- `JWT_ALGORITHM` - JWT algorithm (default: `HS256`)
- `JWT_ACCESS_TOKEN_EXPIRE_MINUTES` - Token expiration time in minutes (default: `30`)

