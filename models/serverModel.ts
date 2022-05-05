import express, { Application } from "express";
import cors from "cors";

import userDB from "../db/connection";
import userRoutes from "../routes/usuarioRoutes";

// import db from '../db/connection';

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };
  private db: string = "";

  constructor() {
    this.app = express();
    this.port = process.env.PROD_PORT || "4001";
    if (process.env.STATUS === "produccion") {
      this.port = process.env.DEV_PORT || "4000";
    }

    // Métodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      this.db = process.env.MYSQL_USUARIOS_DB || "";
      if (this.db === "") {
        await userDB.authenticate();
      }
      console.log(`Database ${process.env.MYSQL_USUARIOS_DB} online`);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json());

    // Carpeta pública
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor en modo ${process.env.STATUS} corriendo en puerto *:${this.port}`);
    });
  }
}

export default Server;
