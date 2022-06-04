import express from 'express';
import db from './src/Models/connection.js';
import routerStudent from './src/Routers/studentRouter.js'
import bodyparser from "body-parser";
const app = express();

db.connect(err => {
    if(err) console.log(err);
    console.log("Database Connected");
})

app.use(express.json())
app.use(bodyparser.urlencoded({extended: false}))

app.use("/api/student", routerStudent);

app.listen(3000, () => {
    console.log("Server Running on port 3000")
})