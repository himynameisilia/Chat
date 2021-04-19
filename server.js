// const express = require('express') // CommonJS module
import express from 'express'; // ESM - ES module
import path from 'path';
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const router = express.Router();
app.use(router);

const absolutePath = path.resolve(); // абсолютный путь до текущей папки
const staticDir = path.join(absolutePath, 'public');
// console.log(statDir);

app.use(express.static(staticDir));

router.route('/')
  .get((req, res) => {
    res.sendFile(staticDir, 'index.html')
  });

io.on("connection", (socket) => {
  console.log('Connection established');

  socket.on('fromClient', (message) => {
    socket.emit('fromServer', message);
  });
});


httpServer.listen(3000, () => {
  console.log('Server started on 3000');
});
