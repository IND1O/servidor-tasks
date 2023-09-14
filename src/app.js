import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();

const whitelist = [
  "http://localhost:5173",
  "https://dashing-gecko-62bddc.netlify.app",
];

app.use(
  cors({
    //origin: "http://localhost:5173",
    //origin: "https://dashing-gecko-62bddc.netlify.app",
    origin: whitelist,
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRouter);
app.use("/api", taskRoutes);

export default app;
