const http = require("node:http");
const { findAvailablePort } = require("./free_port.js");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
