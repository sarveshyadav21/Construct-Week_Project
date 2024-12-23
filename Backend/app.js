import { userRouter } from "./routes/user.router.js";
import { dbConnection } from "./dbConnection.js";
import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use(userRouter);

app.listen(PORT, async () => {
    await dbConnection();
    console.log(`Server started at http://localhost:${PORT}`);
})

