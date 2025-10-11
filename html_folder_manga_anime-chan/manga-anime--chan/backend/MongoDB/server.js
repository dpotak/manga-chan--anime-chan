import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// 🔌 Подключаем MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB подключена"))
  .catch((err) => console.error("Ошибка MongoDB:", err));

// 🧾 Пример маршрута
app.get("/", (req, res) => {
  res.send("Сервер работает!");
});

// 📥 Пример POST-запроса для регистрации
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    res.status(201).json({ message: "Пользователь создан!" });
  } catch (err) {
    res.status(500).json({ error: "Ошибка при создании пользователя" });
  }
});

app.listen(PORT, () => console.log(`🚀 Сервер запущен на порту ${PORT}`));
