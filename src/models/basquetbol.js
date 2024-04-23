import { sequelize } from "../db/db.js";
import { DataTypes } from "sequelize";

export const Basket = sequelize.define("basket", {
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
});
