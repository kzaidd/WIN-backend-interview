const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const appRoutes = require("./routes/appRoutes.js")
const bodyParser = require("body-parser");
const { response } = require("express");

mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 40000

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(cors());

app.use("/api", appRoutes);

const MONGO_URL = process.env.MONGO_CONNECTION_URL


mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
}).catch((error) => {
    response.status(500).send({error: error})
})