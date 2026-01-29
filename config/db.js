const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "admin", "admin123", {
  host: "database-1.ck3ea6aio3bo.us-east-1.rds.amazonaws.com",
  dialect: "mysql"
});

module.exports = sequelize;
