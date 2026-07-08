import { Router } from "express";
import { crearAlbum, actualizarAlbum,eliminarAlbum,obtenerAlbumes } from "../controllers/album.controller.js";

const router=Router();

router.post("/",crearAlbum);
router.get("/",obtenerAlbumes);
router.put("/:id",actualizarAlbum);
router.delete("/:id",eliminarAlbum);

export default router;