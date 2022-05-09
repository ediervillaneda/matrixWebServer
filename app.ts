require("dotenv").config();
import Server from "./models/serverModel";

const server = new Server();

server.listen();
