const { DataTypes } = require("sequelize");
const { sequelizeDB } = require("../connection/connection");

const credentials = sequelizeDB.define(
    "credentials", 
    {
        username: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        password: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: "credentials",
    }
);

module.exports = credentials;