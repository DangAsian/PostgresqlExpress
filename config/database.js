const Sequelize = require("sequelize");

// Option 1: Passing parameters separately
const db = new Sequelize("api", "daniel", "Oxing12!", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;
