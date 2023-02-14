import { Sequelize } from "sequelize";
import { CONSTANT_CONFIG } from "../config/CONSTANT_CONFIG";

export const DB_CONN = {
  AC: new Sequelize({
    dialect: "mariadb",
    host: CONSTANT_CONFIG.DATABASE.ACCOUNT.HOST,
    port: CONSTANT_CONFIG.DATABASE.ACCOUNT.PORT,
    database: CONSTANT_CONFIG.DATABASE.ACCOUNT.NAME,
    username: CONSTANT_CONFIG.DATABASE.ACCOUNT.USER,
    password: CONSTANT_CONFIG.DATABASE.ACCOUNT.PASSWORD,
    logging: true,
  }),
};
