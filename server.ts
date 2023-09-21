import Express from "express";
import router from "./routes";
import cors from "cors";

const server = Express();

server.use(Express.urlencoded({ extended: true }));
server.use(cors());
server.use(router);

server.listen(4000);
console.log("Servidor rodando!");