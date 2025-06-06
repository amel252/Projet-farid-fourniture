import express from "express";
// tu importe le framework express
import mongoose from "mongoose";
// dotenv on l'appelle avec ca
import dotenv from "dotenv";
import userRouter from "./routes/user.route";

dotenv.config();

const app = express(); // Tu initialises une application Express. cette variable app qui te permet de définir des routes (GET, POST, etc.), ajouter du middleware,
app.get("/", (req, res) => {
    res.send("Serveur OK");
});
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to BD");
    })
    .catch((err) => {
        console.log(err);
    });
app.listen(3000, () => {
    // Tu lances le serveur sur le port 3000 , listen démarre le serveur HTTP
    console.log("le serveur est écouté sur le port 3000");
});
// import des routes
app.use("/api/user", userRouter);
