import express from "express";
import dotenv from "dotenv";
import Connection from "./Database/db.js";
import defaultData from "./default.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/router.js";
dotenv.config();
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

const PORT = 8000;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

 Connection(userName, password);

app.listen(PORT, () =>
  console.log(`The server is successfully runing on Port ${PORT}`)
);

//import default data to db

defaultData();
