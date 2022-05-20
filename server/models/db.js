/**
 * 1. Loadup all models
 * 2. connect to sqlite database
 */

 "use strict";

 // This file interates through all the model files
 // and syncs to the database tables
 const fs = require("fs");
 const path = require("path");
 const { Sequelize } = require("sequelize");
 var basename = path.basename(__filename);
 const db = {};

 const sequelize = new Sequelize("db", "user", "pass", {
   host: "localhost",
   dialect: "sqlite",
   storage: "db.sqlite",
   operatorsAliases: 0, // false
 });

 // Debug code current dir
 console.log(fs.readdirSync(__dirname));

 fs.readdirSync(__dirname)
   .filter((file) => {
     return (
       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
     );
   })
   .forEach((file) => {
     /** Deprecated: sequelize.import
      *   https://sequelize.org/master/manual/models-definition.html
      *
      *  const model = sequelize.import(path.join(__dirname, file));
      *
      *  USE: https://stackoverflow.com/questions/62917111/sequelize-import-is-not-a-function
      *
      * const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
      */

     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);

     db[model.name] = model;
   });

 Object.keys(db).forEach((modelName) => {
   if (db[modelName].associate) {
     db[modelName].associate(db);
   }
 });

 db.sequelize = sequelize;
 db.Sequelize = Sequelize;

 module.exports = db;
