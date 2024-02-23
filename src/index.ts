import express , { Express } from "express"
import http from "http"
import cors from "cors"
import bodyParser from "body-parser"
import router from "./routes/routes";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app: Express = express();
const server = http.createServer(app);

//express confg
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("PORT",3000);
app.set("BASE_URL","localhost");

// define router
 app.use("/api/v1", router)

dotenv.config()
 //mongodm connection
 const mongoURI = process.env.MONGODB_URI

 if(!mongoURI){
    console.error("MONGODB Not Connected")
    process.exit(1);
 }

 mongoose.connect(mongoURI, {}).then( () => {
    console.log("MONGODB Connected")
 }).catch( (error) => {
    console.log(error)
 });
// Start server
try {
    const port : Number = app.get("PORT");
    const baseUrl : String = app.get("BASE_URL");
    server.listen(port, (): void => {
        console.log("Server is listening")
    })
} catch (error) {
    console.log(error);
}