import "dotenv/config";

import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.js";

console.log("Mongo URI:", process.env.MONGODB_URI);

const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("Server is live!");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});