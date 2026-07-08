import express from "express";
import albumesRouter from './routes/albumes.js'

const app=express();

const PUERTO=3001;

app.use(express.json());
app.use("/albumes",albumesRouter)

app.listen(PUERTO,()=>{
    console.log("servidor corriendo en el puerto : "+PUERTO)
})