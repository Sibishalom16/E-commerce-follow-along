require("dotenv").config(); // Ensure environment variables are loaded
const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`✅ MongoDB connected: ${connection.connection.host}`);

    // List all collections in the connected database
    console.log("📂 Collections:", Object.keys(mongoose.connection.collections));
  } catch (error) {
    console.error(`❌ Database connection failed: ${error.message}`);
    process.exit(1); // Stop the app if DB connection fails
  }
};

module.exports = connectDatabase;
