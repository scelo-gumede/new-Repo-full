//require apps 
import express from "express"
const mongoose = require('mongoose');
require("dotenv").config()
require("express-async-errors")
import UserRouter from "./routes/UserRoutes"
import jobRoutes from "./routes/JobsRoutes"
import auth from "./middleware/authMiddleware";
import { notFound } from "./middleware/notFound";
import helmet from "helmet";
import cors from "cors"

//configure app
const app = express()




//starting middleware 
app.use(cors())
app.use(express.json())
app.use(helmet())



//routes middleware
app.use("/api/v1",UserRouter)
app.use("/api/v1/jobs",auth,jobRoutes)



//end middleware
app.use(notFound)



//start server



const uri =process.env.MONGO_URI 

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    app.listen(process.env.PORT,()=>console.log("that the start of the app"))
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  }catch(err){
    // Ensures that the client will close when you finish/error
    console.error(err)
  }
}
run();
