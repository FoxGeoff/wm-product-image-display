/**
 *  server/api/user/user.routes.js
 */

const controller = require("./user.controller");
const express = require("express");
const router = express.Router();

// http://localhost:3000/api/users/allUsers
router.get("/allUsers", controller.allUsers);
// http://localhost:3000/api/users/3
router.get("/:id", controller.singleUser);
router.put("/saveUserFav", controller.saveUserFav);
router.post("/addUser", controller.saveUser);

// Debug Code http://localhost:3000/api/users
router.get("/", controller.test);

module.exports = router;
