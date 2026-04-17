import dns from "node:dns";
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

dns.setServers(["8.8.8.8","1.1.1.1"]);

const connectDB = async () => {
  try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
   
  } catch (error) {
 console.log("ERROR MONGODB CONNECTION FAILED: ",error);
  process.exit(1)
  }
}

export default connectDB 
