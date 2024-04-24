import express from "express";
import ejs from "ejs";

import deporte from "./src/routes/futbol.routes.js";
import { sequelize } from "./src/db/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method",
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE",
    );
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.set("view engine", "ejs");
app.use("/api/deporte", deporte);
sequelize
    .sync({ force: false, alter: false })
    .then(() => {
        console.log("CONEXION OK");
    })
    .catch((erro) => {
        console.log("ERROR EN LA BD ", erro);
    });

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
