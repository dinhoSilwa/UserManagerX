import express, { Application } from "express";
import cors from "cors";
import router from "./routes/Users/user.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", router);

export default app;
