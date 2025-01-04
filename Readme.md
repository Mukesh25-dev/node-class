### nodejs

opensource cross platform,back-end js runtime environment that runs on the v8 engine and executes a js code executes outside

steps to create backend project
npm 

we should initialize the directory by npm init
name
standard version(1.0.0)
desc:name of the front end app which wants be
entry point:index js
git;:
keywords: blank
author:name
license: default



### package.json:
- is a file that gives the neccesary information to npm which allows it to identify the project as well as handle the projects dependencies


### package.lock.json
- is automatically generated for any operations where npm modifies either the node modules or package.json



### dependencies vs dev depend:
- needed packages for a appliication is called dependencies,req at run time, they are global dependencies

- 'dev-depend'  are the packages that are only required during development, they are local dependencies.


### lets install body parser
- "npm install package_name" commmand to install
- if we have many packages and we need to delete a certain package we can use this method delete the package from packgae.jsson under dependenciess then delete nodemodules files and then again insert npm i command in terminal it will create anode module file which will only have the depoendancies which are inside the package.json file


### devdependencies:
- to move a package from depe to dev use this command "npm i -D packagename"


    ### list of built in third party custom packages
    -third party cokkies examplse:
    `express` - to create server
    `body-parser` - to parse the body of the request
    `nodemon` - to restart the server automatically
    `mongoose` - to connect to mongodb
    `mysql` - to connect to mysql
    `cookie parser` - to parse the cookies
    `cors` - to enable cors
    `dotenv` - to load environment variables
    `bcrypt` - to hash the password
    `multer` - to upload files
    `morgan` - to log the requests
    `nodemailer` - to send emails
    `jsonwebtoken` - to generate jwt tokens


    ## list custom created packages(we going to create)
    `logger` - middleware to log the request
    `auth` - middleware to authenticate the user using jwt and passport
    `upload` - middleware to upload files

### http module
  - to create a server

  ## imports:
  - there are two types 
    -es6 imports
     import express from "express"
     file extension should be .mjs
     for export use use export default or export {name}

    - commonjs imports
    - const express = require('express')
    - const {router} = require('express')
    file extension should be .js
    for exporting use module.exports or exports.router = router;


### example of common js imports
// // server.mjs
// import { createServer } from "node:http";
const { createServer } = require("http");

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});

// run with `npm start`

- in package.json change the name in start command and main command as server.js




### how to add nodemon

first install it 
-- npm i -D nodemon

-- then
in package.json add, additional 
"dev" : "dev":"nodemon file_name"

-- now run the server with this command
-- npm run dev;




### Filesystem in node module
