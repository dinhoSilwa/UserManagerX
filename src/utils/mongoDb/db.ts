import mongoose from "mongoose";

class MongoDBConnection {
  private static instance: MongoDBConnection;
  private constructor() {}

  public static getInstance(): MongoDBConnection {
    if (!MongoDBConnection.instance) {
      MongoDBConnection.instance = new MongoDBConnection();
    }
    return MongoDBConnection.instance;
  }

  public async connect(uri: string): Promise<void> {
    try {
      await mongoose.connect(uri);
      console.log("Connected To MongoDb Atlas");
    } catch (error) {
      console.error("Error connecting to MongoDb Atlas", error);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log("Disconnected from Mongo Db Atlas");
    } catch (error) {
      console.error("Error disconnecting from MongoDb Atlas");
    }
  }

  public getConnection(): typeof mongoose {
    return mongoose;
  }
}

export default MongoDBConnection;
