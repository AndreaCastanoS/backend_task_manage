const mongoose = require("mongoose");

const connection = async () => {
  try {
    console.log("Database URI (from env):", process.env.DB); // Agrega este log
    if (!process.env.DB) {
      throw new Error("Missing DB environment variable");
    }
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
};

connection();
