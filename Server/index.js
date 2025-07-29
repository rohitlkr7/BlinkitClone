import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import connectdb from "./config/connectdb.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "",
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcesPolicy: false,
  })
);

const PORT = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "welcome to Blinkit server",
  });
});

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
  });
});
