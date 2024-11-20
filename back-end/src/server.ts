import express from "express";
import routes from "@/routes/routerController";


const server = express();

server.use(express.json());

//Enable cors
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

server.use("/api", routes)


export default server;