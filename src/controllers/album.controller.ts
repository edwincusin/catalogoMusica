import type { Request, Response } from "express";
import prisma from "../database/prisma.js";
import PrismaC


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


//FUNCION MODIFICAR UN ALBUN POR ID
export const actualizarAlbum=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params;
        const {titulo, artista, anio}=req.body;

        const existeAlbum= await prisma.album.findUnique({
            where:{id:Number(id)}
        });

        if(!existeAlbum){
           return res.status(404).json({mensaje: "No existe album para actualizar"});
        }

        const albumActualizado= await prisma.album.update({
            where:{id:Number(id)},
            data:{titulo, artista, anio}
        }); 

        res.status(200).json(albumActualizado);

    } catch (error) {
        res.status(500).json({error: "Error al recuperar album "+error})
    }
}