// // // server.mjs
// // import { createServer } from "node:http";
// const { createServer } = require("http");

// const server = createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello Nodejs ");
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, "127.0.0.1", () => {
//   console.log("Listening on 127.0.0.1:3000");
// });

// // run with `node server.mjs`

// import http module
// const http = require("http");

// //create server object

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "content-type": "application/json" });
//   if (request.url === "/posts") {
//     if (request.method === "GET") {
//       response.end(JSON.stringify({ message: "Hello World" }));
//     } else if (request.method === "POST") {
//       response.end(JSON.stringify({ message: "Hello World /Post" }));
//     }
//   } else if (request.url === "/comments") {
//     response.end(JSON.stringify({ message: "Hi Comments" }));
//   }
// });

// listen to server on port 3000

// server.listen(6000, "127.0.0.1", () => {
//   console.log("server is running on http://127.0.0.1:6000");
// });

// // set response header
//   response.writeHead(200, { "Content-Type": "application/json" });

//   //set response body
//   response.end(JSON.stringify({ message: "Hello World!" }));

// to create a server using node rather than express
//const http = require("http");

//create server object

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "content-type": "application/json" });
//   if (request.url === "/posts") {
//     if (request.method === "GET") {
//       response.end(JSON.stringify({ message: "Hello World" }));
//     } else if (request.method === "POST") {
//       response.end(JSON.stringify({ message: "Hello World /Post" }));
//     }
//   } else if (request.url === "/comments") {
//     response.end(JSON.stringify({ message: "Hi Comments" }));
//   }
// });

// server.listen(6000, "127.0.0.1", () => {
//   console.log("server is running on http://127.0.0.1:6000");
// });

// import express

//listen the server to request

const app = require("./utils/app");

app.listen(3000, () => {
  console.log("server is running on http://127.0.0.1:3000");
});
