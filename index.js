require("dotenv").config();

const mongoose = require("mongoose");
const chalk = require("chalk");
const server = require("./server");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "localhost";
const MONGO_PORT = process.env.MONGO_PORT || 27018;

server.listen(PORT, () => {
    console.log(chalk.bgGreen("AUTENTICATION SERVER RUNNING @", PORT));

    mongoose.connect(`mongodb://${MONGO_URL}:${MONGO_PORT}/cicechat`, { useNewUrlParser: true }, () => {
        console.log(chalk.bgGreen("MONGODB RUNNING @", PORT));
    })
});