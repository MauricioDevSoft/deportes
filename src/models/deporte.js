import { sequelize } from "../db/db.js";
import { DataTypes } from "sequelize";

export const Deporte = sequelize.define("deporte", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    numPregunta: {
        type: DataTypes.INTEGER,
    },
    respuesta: {
        type: DataTypes.STRING,
    },
    deporte: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellido: {
        type: DataTypes.STRING,
    },
});
