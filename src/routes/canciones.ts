import { Router } from "express";
import { crearCancion,actualizarCancion,eliminarCancion,obtenerCanciones } from "../controllers/cancion.controller.js";
import { validarDuracionCancion } from "../middleware/validacionDuracion.js";

const router=Router();

router.post("/",validarDuracionCancion,crearCancion);
router.get("/",obtenerCanciones);
router.put("/:id",actualizarCancion);
router.delete("/:id",eliminarCancion);

export default router;

//midd validacion de cacnion mayo 30 y menor 600, evitar que suban una cacnnion, ruta canciones