/**
 *  middleware.js
 */

 const bodyParser = require("body-parser");
 const cors = require("cors");
 const favicon = require("serve-favicon");
 const logger = require("morgan");
 const cookieParser = require("cookie-parser");
 const path = require("path");

 // setup global middleware here
 module.exports = (app) => {
   app.use(cors());
   app.use(favicon(path.join(__dirname, "../../src/favicon.ico")));
   app.use(logger("dev"));
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(cookieParser());

   // ref. project: MeanStack, file: app.js

   /* Allows access to these files. Requires const path */
   //app.use("/images", express.static(path.join("server/images")));
 /*
   app.use((req, res, next) => {
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
     );
     res.setHeader(
       "Access-Control-Allow-Methods",
       "GET, POST, PATCH, PUT, DELETE, OPTIONS"
     );
     next();
   }); */
 };
