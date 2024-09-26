const fs = require("node:fs/promises");

console.log("Leyendo primer archivo");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log(text);
});

console.log("Leyendo segundo archivo");
fs.readFile("./archivo2.txt", "utf-8").then((text2) => {
  console.log(text2);
});
