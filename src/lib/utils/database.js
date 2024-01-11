import mongoose from "mongoose";

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next14TUTE",
      // You can add more options as needed
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Database is connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Error connecting to the database");
  }
};
