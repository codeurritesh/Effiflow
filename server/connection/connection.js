const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelizeDB = new Sequelize({
    logging: false,
    dialect: "postgres",
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432", 10),

    dialectOptions: {
      requestTimeout: 300000 * 5,
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 20000, 
        idle: 20000,
        evict: 20000,
    },
    define: {
        timestamps: false,
        freezeTableName: true,
    },
});

async function DBConnection() {
    try {
        await sequelizeDB.authenticate();
        await sequelizeDB.sync({ alter: true });
        console.info("DB Connected Successfully")
    } catch (error) {
        console.error("DB Database Error: ", error.message);
    }
}

module.exports = { sequelizeDB, DBConnection };
