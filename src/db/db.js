import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("lic", "postgres", "1235", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    port: 5432,
});
