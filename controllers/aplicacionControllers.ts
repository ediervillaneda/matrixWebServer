import { Request, Response } from "express";
import Aplicacion from "../models/aplicacionModel";

/**
 * Obtener todas las aplicaciones
 */

export const getAplicaciones = async(req: Request, res:Response) =>{
    try{
        const aplicaiones = await Aplicacion.findAll();
        res.json({aplicaiones});
    }catch(error: any){
        res.status(404).json({msg: `Error al intentar buscar las Aplicaciones`, error});
    }
};