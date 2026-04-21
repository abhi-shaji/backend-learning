import {} from 'dotenv/config' 
import connectDB from "./db/index.js";
import { app } from './app.js';

const port = process.env.PORT || 2000
connectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running at ${port}`);
    
  }) 
})
.catch((err) => {
  console.log("MONGODB connection Failed !!!", err);
})

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   } catch (error) {
//     console.log("ERROR",error);
//     throw error
//   }
// }) ()
