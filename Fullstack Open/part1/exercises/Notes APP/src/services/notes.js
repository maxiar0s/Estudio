import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";
// const cors = require("cors");

///Middlewares
// app.use(cors());

// const express = require("express");
// const app = express();

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

// const generateId = () => {
//   const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
//   return maxId + 1;
// };

// // const app = http.createServer((req, res) => {
// //   res.writeHead(200, { "content-Type": "application/json" });
// //   res.end(JSON.stringify(notes));
// // });

// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

// app.get("/api/notes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const note = notes.find((note) => note.id === id);
//   if (note) {
//     res.json(note);
//   } else {
//     res.status(404).end();
//   }
// });

// app.delete("/api/notes/:id", (req, res) => {
//   const id = Number(req.params.id);
//   notes = notes.filter((note) => note.id !== id);
//   res.status(204).end();
// });

// app.use(express.json());

// app.post("/api/notes", (req, res) => {
//   const body = req.body;

//   if (!body.content) {
//     return res.status(400).json({ error: "content missing" });
//   }

//   const note = {
//     content: body.content,
//     important: Boolean(body.important) || false,
//     id: generateId(),
//   };

//   notes = notes.concat(note);
//   res.json(note);
// });

// const PORT = 3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);

// json-server
const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const dltNote = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  dltNote,
};
