const express = require("express");
const app =express();
const cors = require("cors");
const userRoute = require('./routes/userRoute');
const port=3000;
app.use(express.json());
app.use(cors());



app.use("/posts",userRoute);

const Port = 3000
app.listen(port,()=>{
console.log(`server started on Port ${Port}`);
});


