// const express = require('express') // CommonJS module
import express from 'express' // ESM - ES module
import path from 'path';

const app = express();

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

app.listen(3000, () => {
  console.log('Server started on 3000');
});
