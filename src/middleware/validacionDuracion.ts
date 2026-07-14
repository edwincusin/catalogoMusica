import type { Request, Response, NextFunction } from "express";
import prisma from "../database/prisma.js";



export const validarDuracionCancion=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {duracion}=req.body;
        
        if(Number(duracion)<30 || Number(duracion)>600){
            return res.status(400).json("La duracion de la cancion debe estar en el rango de 30 a 600");
        }
        
        next();
        
    } catch (error) {
        res.status(500).json({error: "Error al crear cancion "+error})
    }
}