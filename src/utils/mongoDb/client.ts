import { configDotenv } from "dotenv";
configDotenv();
export const uriDb = process.env.MONGOURI;
export const PORT = process.env.PORT || 5000
