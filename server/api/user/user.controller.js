<<<<<<< HEAD
'use strict'

const models  = require('../../models/db');

exports.allUsers = (req, res) => {
  models.User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}
exports.singleUser = (req, res) => {
  let id = req.params.id;
  models.User.findByPk(id, {
      include: [{
        model: models.Book, as: 'Reading',
        attributes: ['title', 'author']
      }, {
        model: models.Favorite
      }]
    })
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
}
exports.saveUserFav = (req, res) => {
  let title = req.body.bookTitle;
  let UserId = req.body.userId;

  models.Favorite.create({
    title,
    UserId
  })
  .then(() => {
    res.json({success: 'Success, favorite book added for User!'});
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
}
exports.saveUser = (req, res) => {
  let name = req.body.name;

  models.User.create({ name })
  .then(user => {
    res.json(user);
  })
  .catch(error => {
    console.log(error);
    res.status(404).send(error);
  })
}
=======
/**
 *  server/api/user/user.controller.js
 */
 'use strict'

 const models  = require('../../models/db');

 // Debug test route
 exports.test = (req, res) => {
   res.send('API user route works!');
 }

 exports.allUsers = (req, res) => {
   models.User.findAll()
     .then(users => {
       res.json(users);
     })
     .catch(error => {
       console.log(error);
       res.status(404).send(error);
     })
 }

 exports.singleUser = (req, res) => {
   let id = req.params.id;
   models.User.findByPk(id, {
       include: [{
         model: models.Book, as: 'Reading',
         attributes: ['title', 'author']
       }, {
         model: models.Favorite
       }]
     })
     .then(user => {
       res.json(user);
     })
     .catch(error => {
       console.log(error);
       res.status(404).send(error);
     })
 }

 exports.saveUserFav = (req, res) => {
   let title = req.body.bookTitle;
   let UserId = req.body.userId;

   models.Favorite.create({
     title,
     UserId
   })
   .then(() => {
     res.json({success: 'Success, favorite book added for User!'});
   })
   .catch(error => {
     console.log(error);
     res.status(404).send(error);
   })
 }
 exports.saveUser = (req, res) => {
   let name = req.body.name;

   models.User.create({ name })
   .then(user => {
     res.json(user);
   })
   .catch(error => {
     console.log(error);
     res.status(404).send(error);
   })
 }
>>>>>>> 4311b26505725967d388fb771bfeb87cf50e9e8c
