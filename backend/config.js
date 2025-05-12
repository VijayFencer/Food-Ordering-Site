const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://VijayFencer:Vijay123@cluster0.zbswkr4.mongodb.net/Internship_wsa?retryWrites=true&w=majority&appName=Cluster0/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // Increase timeout
      }
    );
    console.log("✅ MongoDB Atlas connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB Atlas connection error:", error);
    process.exit(1);
  }
};

const testConnection = async () => {
    try {
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log("📌 Collections in DB:", collections);
    } catch (error) {
      console.error("❌ Error fetching collections:", error);
    }
  };
  testConnection();
connectDB();

  
  