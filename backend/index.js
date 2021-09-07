import express from "express";

const app = express()

const PORT = 8000;

app.listen(PORT,()=>console.log(`The server is successfully runing on Port ${PORT}`))
