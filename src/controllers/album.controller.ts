import type { Request, Response } from "express";
import prisma from "../database/prisma.js";


//FUNCION PARA CREAR ALBUM
export const crearAlbum=async(req:Request, res:Response)=>{
    try {
        const {titulo, artista, anio}=req.body;
        const albumCreado= await prisma.album.create({
            data:{titulo,artista,anio}
        });
        res.status(201).json(albumCreado);
    } catch (error) {
        res.status(500).json({error: "Error al crear album "+error})
    }
}

