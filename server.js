const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("api/contacts", require("./routes/contactRoutes"));

app.get("/api/contacts",(req,res)=>{
    res.status(200).json("Get All Contacts");
});

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`);
});

