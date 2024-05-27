import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import FinalRoute from "./Routes/finalRoute.js"
import LiveRoute from "./Routes/liveRoute.js"
import TennisRoute from './Routes/tennisRoute.js'
import bodyParser from "body-parser";
import CricketRoute from './Routes/cricketRoute.js'

const app = express();

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://rajaths1192:valour2k24@cluster0.w3grfog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/final",FinalRoute)
app.use('/live',LiveRoute)
app.use('/tennis', TennisRoute)
app.use('/cricket', CricketRoute)

const PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server is running in  ${PORT}`)
})


