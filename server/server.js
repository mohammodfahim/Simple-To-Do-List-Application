import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todoRoute.js";
import errorHandler from "./middleware/errHandler.js";

const PORT = process.env.PORT || 5050;

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

// Define routes here
app.use("/api/v1/todos", todoRoutes);

// Error handling middleware
app.use(errorHandler);

// database connection
connectDB();

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
