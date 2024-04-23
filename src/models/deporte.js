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
        allowNull: false,
    },
    respuesta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deporte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
