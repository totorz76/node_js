const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/notes");

const app = express();
const portServer = 8002;
app.use(express.json());

mongoose
  // .connect("mongodb://localhost:27017/notes")
  .connect("mongodb://host.docker.internal:27017/notes")
  .then(() => console.log("Connecté à mongodb"))
  .catch((err) => console.error("Erreur de connexion à mongodb !", err));

app.use("/api/notes", noteRoutes);

app.listen(portServer, "0.0.0.0", () => {
  console.log(`Le serveur tourne sur le port ${portServer}`);
});

