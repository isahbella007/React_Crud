import express from "express";
import mysql from "mysql";
import cors from "cors"; 
import router from "./Routes/router.js";

const app = express(); 
app.use(express.json()); 
app.use(cors({
    origin: "*", 
    // methods: "*"
}))
app.use("/api/v1/employee", router); 
const port = 5000; 

app.listen(port, ()=>{ 
    console.log("Listening on port %d....", port); 
})
// connect to the db
const connection_db = mysql.createConnection({ 
    user: "root", 
    password: '', 
    host: "localhost", 
    database: "react_crude",
}); 

export default connection_db; 
