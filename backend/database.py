from motor.motor_asyncio import AsyncIOMotorClient
from config import settings
from typing import Optional

class Database:
    client: Optional[AsyncIOMotorClient] = None

database = Database()

async def connect_to_mongo():
    """Create database connection"""
    database.client = AsyncIOMotorClient(settings.mongodb_url)
    print(f"Connected to MongoDB: {settings.mongodb_url}")

async def close_mongo_connection():
    """Close database connection"""
    if database.client:
        database.client.close()
        print("Disconnected from MongoDB")

def get_database():
    """Get database instance"""
    return database.client[settings.mongodb_db_name]

