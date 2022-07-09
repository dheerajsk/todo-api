
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./src/todoController");
const cors = require("cors");

const server = express();
server.use(bodyParser.json());
server.use(cors());
server.post('/api/task',controller.addTask);
server.get('/api/task',controller.getAllTasks);

server.get("/",(req, res)=>{
    res.send("Welcome...");
});

console.log("Server is listening on 4100");

server.listen(4100);