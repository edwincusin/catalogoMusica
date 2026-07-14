import express from "express";
import albumesRouter from './routes/albumes.js'
import cancionesRouter from './routes/canciones.js'

const app=express();

const PUERTO=3001;

app.use(express.json());
app.use("/albumes",albumesRouter)
app.use("/canciones",cancionesRouter)

app.listen(PUERTO,()=>{
    console.log("servidor corriendo en el puerto : "+PUERTO)
})

