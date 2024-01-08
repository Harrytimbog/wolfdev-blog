import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    // const db = await mongoose.connect(process.env.MONGODB_URI);
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next14TUTE",
      bufferCommands: false,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("Database is connected successfully");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
