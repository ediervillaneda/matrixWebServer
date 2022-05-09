import { Express } from "express";
import dotenv from "dotenv";
import Server from "./models/serverModel";

// Configurar dotenv
dotenv.config();

const server = new Server();

server.listen();
