# WmProductImageDisplay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Introduction

1. Presentation Document: WingMan Ver 4.0 (5-18-2022)
2. Ref code, Image Server Files <>
3. POC Product <https://www.customsigns.com/24-hour-surveillance-vinyl-decal>

### Specifications

1. POC for component in WingMan V4 Project

### References

1. Video Ref #1: Introduction to Sequelize ORM for Node.js
2. Link:  <https://app.pluralsight.com/library/courses/sequelize-orm-nodejs-introduction/discussion>
3. Project Ref #2: WingMan Version 3
4. Video Ref #3: Angular and Node.js - The MEAN Stack Guide
5. Video Link #3: <https://learning.oreilly.com/videos/angular-and-node-js/9781789959741/>
6. Code Ref #3: Github Project : MeanStack Ver3

### Kanban Task : BUILD NODE SERVER

1. This node server is just for image display

===

### Task: Add Server (node) - Add file server.js

### Task: Add Server (node) - Add file middleware.js

1. Add server folder
2. Add server/api folder
3. Add server/api/middleware folder
4. Add server/api/middleware/middleware.js file
5. Add server/models folder
6. Add server/model/seed/seed-bd.js file
7. Add server/model/db.js
8. Add server/api/index.js file

### Task: Add Server (node) - Add packages

1. run: `npm i body-parser --save`<https://www.npmjs.com/package/body-parser>
2. run: `npm i cors --save`<https://www.npmjs.com/package/cors>
3. run: `npm i serve-favicon --save` <https://www.npmjs.com/package/serve-favicon>
4. run: `npm i morgan --save`<https://www.npmjs.com/package/morgan> logger
5. run: `npm i cookie-parser`<https://www.npmjs.com/package/cookie-parser>
6. run: `npm i path --save`<https://www.npmjs.com/package/path>
7. run: `npm i express --save`<https://www.npmjs.com/package/express>
8. run: `npm i nodemon --save`<https://www.npmjs.com/package/nodemon>
9. run:`npm i sequelize --save`<https://www.npmjs.com/package/sequelize>
10. Error: Please install sqlite3 package manually FIX: Task: Install sqlite
11. Error: Error: Cannot find module './server/api' FIX Task: Fix directory structure and paths

### Task: Install sqlite

1. online ref: <https://www.npmjs.com/package/sqlite3>
2. run `npm i sqlite3`

### Task: Fix directory structure and paths

1. Change in book.controller.js `const models = require("../../models/db");` path note correct

### Task: Add Server (node) - Setup routes (api/index.js)

```javascript
/**
 * server/api/index.js
 */

// api router will mount other routers
module.exports = (app) => {
  app.use("/api/accounts", require("./account/account.routes"));
  // app.use("/api/invoices", require("./invoice/invoice.routes"));

  // app.use("/api/users", require("./user/user.routes"));
  // app.use("/api/books", require("./book/book.routes"));
  app.get("/", (req, res) => res.send("hello world"));
};
```

1. Now test run : node server.js
2. `running server on port 3000`
3. Test: Good to go! ctr + c
4. Run `nodemon server`

```javascript
[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server`
running server on port 3000
```

### Task: Add user and and book to user association

1. Test: Good to go!
===

### Kanban Task: BUILD GUI COMPONENT

1. Ref code project: "Sequelize_BookStore-finished"
2. Setup server.js and node server file structure from the ref code project

### Task: Add Angular Material

1. Ref: <https://material.angular.io/guide/getting-started>
2. Run: `ng add @angular/material`
3. Setup Material Module
4. RE-BOOT SERVER WITH ctl + C and run `ng serve -o`

### Task: Add Angular Flex Layout

1. Run `npm i -s @angular/flex-layout @angular/cdk`
2. Ref. <https://github.com/angular/flex-layout>
3. RE-BOOT SERVER WITH ctl + C and run `ng serve -o`
4. Ref. examples <https://tburleson-layouts-demos.firebaseapp.com/#/docs>

### Kanban Task: USE REF PROJECT - MEANSTACK-V3

1. Add Angular Components
2. post-create
3. post-list
4. header
