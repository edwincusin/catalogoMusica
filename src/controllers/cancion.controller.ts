import type { Request, Response } from "express";
import prisma from "../database/prisma.js";


//FUNCION PARA CREAR CANION
export const crearCancion=async(req:Request, res:Response)=>{
    try {
        const {titulo, duracion, albumId}=req.body;
        const cancion= await prisma.cancion.create({
            data:{titulo, duracion:Number(duracion), albumId:Number(albumId)}
        });
        res.status(201).json(cancion);
    } catch (error) {
        res.status(500).json({error: "Error al crear cancion "+error})
    }
}

//FUNCION PARA OBTNER TODOS LAS CANIONES
export const obtenerCanciones=async(req:Request, res:Response)=>{
    try {
        const canciones= await prisma.cancion.findMany();
        res.status(200).json(canciones);

    } catch (error) {
        res.status(500).json({error: "Error al recuperar las canciones "+error})
    }
}


//FUNCION MODIFICAR UNA CANCION POR ID
export const actualizarCancion=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params;
        const {titulo, duracion, albumId}=req.body;

        const existeCancion= await prisma.cancion.findUnique({
            where:{id:Number(id)}
        });

        if(!existeCancion){
           return res.status(404).json({mensaje: "No existe cancion para actualizar"});
        }

        const cancionActualizado= await prisma.cancion.update({
            where:{id:Number(id)},
            data:{titulo, duracion:Number(duracion), albumId:Number(albumId)}
        }); 

        res.status(200).json(cancionActualizado);

    } catch (error) {
        res.status(500).json({error: "Error al actualizar cancion "+error})
    }
}


//FUNCION ELIMINAR UNA CANCION POR ID
export const eliminarCancion=async(req:Request, res:Response)=>{
    try {
        const {id}=req.params;

        const existeCancion= await prisma.cancion.findUnique({
            where:{id:Number(id)}
        });

        if(!existeCancion){
            return res.status(404).json({mensaje: "No existe cancion para eliminar"});
        }

        await prisma.cancion.delete({
            where:{id:Number(id)}
        })

        res.status(200).json({mensaje: "Canción eliminada correctamente"});

    } catch (error) {
        res.status(500).json({error: "Error al eliminar cancion "+error})
    }
}