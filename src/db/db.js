import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("nbuhwzkf", "nbuhwzkf", "8X6g7-FwXdz1PTRhqV9jsCX2uFRtOjQf", {
    host: "lucky.db.elephantsql.com",
    dialect: "postgres",
    logging: false,
    port: 5432,
});
