import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import aiRouter from "./routes/ai.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(clerkMiddleware());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

// app.use(requireAuth())
app.use("/api/ai", requireAuth(), aiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`);
});
