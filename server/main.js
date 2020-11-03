import express from 'express';
import bp from 'body-parser';
import cors from 'cors'
import dbContext from "./database/dbconfig"

import TaskController from "./controllers/TaskController"
import ListController from "./controllers/ListController"
import SubListController from './controllers/SubListController';

const server = express();

dbContext.connect();

let port = process.env.port || 3000;
server.use(express.static(__dirname + "/../client/dist"));

var whitelist = ["http://localhost:8080"];
var corsOptions = {
    origin: function (origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted)
    },
    credentials: true
};
server.use(cors(corsOptions));

server.use(bp.json());

server.use('/api/tasks', new TaskController().router)
server.use('/api/lists', new ListController().router)
server.use('/api/sublists', new SubListController().router)

server.use((error, req, res, next) => {
    res.status(error.status || 400).send({ error: { message: error.message } })
})

server.use("*", (req, res, next) => {
    res.status(404).send({
        error: "No Matching Routes"
    })
})

server.listen(port, () => {
    console.log("Server is running on port:", port)
})