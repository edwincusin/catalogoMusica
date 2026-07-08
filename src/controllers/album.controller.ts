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

//FUNCION PARA OBTNER TODOS LOS ALBUMES
export const obtenerAlbumes=async(req:Request, res:Response)=>{
    try {
        const albumes= await prisma.album.findMany();
        res.status(200).json(albumes);

    } catch (error) {
        res.status(500).json({error: "Error al recuperar album "+error})
    }
}
