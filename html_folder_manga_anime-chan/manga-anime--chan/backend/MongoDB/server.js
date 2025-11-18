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

// -----------------------------------------
// 🔌 Подключение MongoDB
// -----------------------------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB подключена"))
  .catch((err) => console.error("Ошибка MongoDB:", err));

// -----------------------------------------
// 🗂 Модель для поиска (аниме/манга)
// -----------------------------------------
const ItemSchema = new mongoose.Schema({
  title: String,
  type: String, // anime | manga
  image: String,
});

const Item = mongoose.model("Item", ItemSchema);

// -----------------------------------------
// 🧪 Проверочный маршрут
// -----------------------------------------
app.get("/", (req, res) => {
  res.send("Сервер работает!");
});

// -----------------------------------------
// 🔐 Регистрация пользователя
// -----------------------------------------
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: "Пользователь создан!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при создании пользователя" });
  }
});

// -----------------------------------------
// 🔍 Поиск: /api/search?query=xxx
// -----------------------------------------
app.get("/api/search", async (req, res) => {
  const query = req.query.query;

  // Пустой запрос → пустой массив
  if (!query || query.trim() === "") {
    return res.json([]);
  }

  try {
    const results = await Item.find({
      title: { $regex: query, $options: "i" }, // i = ignore case
    }).limit(10);

    res.json(results);
  } catch (err) {
    console.error("Ошибка поиска:", err);
    res.status(500).json({ error: "Ошибка поиска на сервере" });
  }
});

// -----------------------------------------
// 🚀 Старт сервера
// -----------------------------------------
app.listen(PORT, () =>
  console.log(`🚀 Сервер запущен на порту ${PORT}`)
);
