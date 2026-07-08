import { Router } from "express";
import { crearCancion,actualizarCancion,eliminarCancion,obtenerCanciones } from "../controllers/cancion.controller.js";

const router=Router();

router.post("/",crearCancion);
router.get("/",obtenerCanciones);
router.put("/:id",actualizarCancion);
router.delete("/:id",eliminarCancion);

export default router;