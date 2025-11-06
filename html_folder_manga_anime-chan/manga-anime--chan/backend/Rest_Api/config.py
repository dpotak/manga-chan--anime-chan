import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    DEBUG = True
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
    DATABASE = os.getenv("DATABASE_URL", "sqlite:///database.db")

