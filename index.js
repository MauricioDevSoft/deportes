import express from "express";
import basket from "./src/routes/basket.routes.js";
import americano from "./src/routes/americano.routes.js";
import beisbol from "./src/routes/beisbol.routes.js";
import futbol from "./src/routes/futbol.routes.js";
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

app.use("/api/basket", basket);
app.use("/api/americano", americano);
app.use("/api/beisbol", beisbol);
app.use("/api/futbol", futbol);

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