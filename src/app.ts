import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes

// default route
app.get("/", async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the E-commerce API" });
});
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
