// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // загружаем переменные из .env

const uri = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // если подключение не удалось — выходим
  }
};

export default connectDB;
