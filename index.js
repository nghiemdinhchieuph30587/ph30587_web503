import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
const app  = express();
const port =3000;
 app.use(
    express.urlencoded({
        extends: true,
    })
 );

 app.use(express.json());
 connectMongoDB('mongodb://127.0.0.1:27017/db_nodejs');
 routes(app);
 app.listen(port,() =>{
    console.log('server lissten on port ');
 });