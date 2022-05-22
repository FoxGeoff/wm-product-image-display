'use strict'

module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const Book = sequelize.define('Book', {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      year: DataTypes.INTEGER
    });
=======
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
>>>>>>> 4311b26505725967d388fb771bfeb87cf50e9e8c

    Book.associate = (models) => {
      models.Book.belongsToMany(models.User, { as: 'Readers', through: 'ReadingList'});
    };

    return Book;
  };
