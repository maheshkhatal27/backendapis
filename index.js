const express=require("express");
//const cors = require("cors");
const app = express();

//app.use(cors);

const port  = process.env.PORT || 7001;

const apiData = require("./projectData.json");

app.get("/",(req,res)=>{
    res.send("Hello node is live....");
});

app.get("/projectdata",(req,res)=>{
    res.send(apiData);
})

app.listen(port,"0.0.0.0",()=>{
    console.log("Server is up and running... @",port)
})