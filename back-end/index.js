import express from "express"; // tu importe le framework express

const app = express(); // Tu initialises une application Express. cette variable app qui te permet de définir des routes (GET, POST, etc.), ajouter du middleware,

app.listen(3000, () => {
    // Tu lances le serveur sur le port 3000 , listen démarre le serveur HTTP
    console.log("le serveur est écouté sur le port 3000");
});
