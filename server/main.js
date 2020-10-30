import express from 'express';
import bp from 'body-parser';

let port = process.env.port || 3000;
let server = express();

server.use(bp.json());

server.use((err, req, res, next) => {
    res.status(404).send("Route Not Found")
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(400).send(err)
})

server.listen(port, () => {
    console.log("Server is running on port:", port)
})