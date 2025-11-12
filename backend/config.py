from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # MongoDB Configuration
    mongodb_url: str = "mongodb://localhost:27017/tunetogether"
    mongodb_db_name: str = "tunetogether"
    
    # JWT Authentication
    jwt_secret_key: str = "your-secret-key-change-this-in-production"
    jwt_algorithm: str = "HS256"
    jwt_access_token_expire_minutes: int = 60
    
    # Application URLs
    project_host: str = "http://localhost:8000"
    frontend_url: str = "http://localhost:5173"
    
    # Spotify API Configuration
    spotify_client_id: Optional[str] = None
    spotify_client_secret: Optional[str] = None
    spotify_redirect_uri: str = "http://127.0.0.1:8000/spotify/callback"
    
    # YouTube API Configuration
    youtube_api_key: Optional[str] = None
    
    class Config:
        env_file = ".env"
        case_sensitive = False
        extra = "ignore"  # Ignore extra fields in .env file


settings = Settings()

