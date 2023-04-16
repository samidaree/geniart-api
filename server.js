const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config()

const routes = require("./routes/api");
const port = process.env.PORT;

// Enable all request 
app.use(cors())

// Parsing application/json
app.use(express.json())

// Parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }))

app.use("/openai", routes)

app.listen(port, () => {
    console.log(`Serveur running at port ${port}`);
})