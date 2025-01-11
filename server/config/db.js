import mongoose from "mongoose";

const connectDB = () => {
  const conn = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(`Error: ${err.message}`));
  return conn;
};

export default connectDB;
