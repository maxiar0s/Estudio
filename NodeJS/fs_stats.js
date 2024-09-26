const fs = require("node:fs");
const stats = fs.statSync("./archivo.txt");

console.log(
  " Es un fichero: ",
  stats.isFile(), // si es fichero
  " Es un directorio: ",
  stats.isDirectory(), // si es directorio
  " Es un enlace simbolico: ",
  stats.isSymbolicLink(), // si es enlace simbolico
  " Tamaño en bytes: ",
  stats.size // tamaño en bytes
);
