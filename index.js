const express = require("express");
const app = express();

const connectDB  = require("./config/db");

require("dotenv").config();
app.use(express.json());

app.listen(process.env.Port, async () => {
    try {
        await connectDB
        console.log("connected with DB")
    } catch (err) {
        console.log(err.message)
    }
    console.log(`server is running ${process.env.port}`)
})
