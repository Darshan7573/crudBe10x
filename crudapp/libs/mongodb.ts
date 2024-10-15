import mongoose from "mongoose";

let isConnected = false; // Global variable to track the connection status

const connectMongoDB = async (): Promise<void> => {
  if (isConnected) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    const dbConnection = await mongoose.connect(
      process.env.MONGODB_URI as string
    );

    isConnected = dbConnection.connections[0].readyState === 1;
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectMongoDB;
