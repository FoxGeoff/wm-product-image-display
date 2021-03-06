"use strict";

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
  });
  // for the user association
  Book.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: "Readers",
      through: "ReadingList",
    });
  };

  Book.associate = (models) => {
    models.Book.belongsToMany(models.User, {
      as: "Readers",
      through: "ReadingList",
    });
  };

  return Book;
};
