import app from "./app";
import { PORT, uriDb } from "./utils/mongoDb/client";
import MongoDBConnection from "./utils/mongoDb/db";
import { configDotenv } from "dotenv";
configDotenv();

const startServer = async () => {
  try {
    const db = MongoDBConnection.getInstance();
    await db.connect(uriDb as string);
    app.listen(PORT, () => {
      console.log(`Server is Running on Port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting Server", error);
    process.exit(1);
  }
};
startServer();
