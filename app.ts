import dotenv from "dotenv";
import Server from "./models/serverModel";

// Cargar variables de entorno
dotenv.config();

const server = new Server();

server.listen();