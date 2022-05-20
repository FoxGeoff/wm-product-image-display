/**
 *  seed/seed-db.js
 */
"use strict";

const models = require("../db");
//const _USERS = require("./users.json");
const _BOOKS = require("./books.json");
//const _CUSTOMERS = require("./customers.json");
//const _INVOICES = require("./invoices.json");
//const _ACCOUNTS = require("./accounts.json");
//const _DELIVERABLES = require("./deliverables.json");
//const _PRODUCTS = require("./products.json");
//const _CATEGORIES = require("./categories.json")

module.exports = {
  insert: () => {
    /*
     models.User.bulkCreate(_USERS)
       .then(() => {
         models.Customer.bulkCreate(_CUSTOMERS);
       })
       .then(() => {
         models.Deliverable.bulkCreate(_DELIVERABLES);
       })
       .then(() => {
         models.Invoice.bulkCreate(_INVOICES);
       })
       .then(() => {
         models.Account.bulkCreate(_ACCOUNTS);
       })
       .then(() => {
         models.Product.bulkCreate(_PRODUCTS);
       })
       .then(() => {
         models.Category.bulkCreate(_CATEGORIES);
       })
       .then(() => {
      */
    models.Book.bulkCreate(_BOOKS)
      .then((res) => {
        console.log(
          "(seed-db.js - Success adding products, users, books, customers, invoices, accounts, deliverables, categories"
        );
      })
      // })
      .catch((error) => {
        console.log(error);
      });
  },
};
