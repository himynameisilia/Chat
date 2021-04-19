// const express = require('express') // CommonJS module
import express from 'express' // ESM - ES module

const app = express();
const router = express.Router();
app.use(router);

router.route('/')
  .get((req, res) => {
    res.send('Hello')
  });

app.listen(3000, () => {
  console.log('Server started on 3000');
});
