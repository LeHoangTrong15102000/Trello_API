// Viết các cấu hình của server vào trong đây

// const express = require('express');
import express from 'express';

const app = express();

const PORT = 8017;
const HOSTNAME = 'localhost';

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Hello Lê Hoàng Trong, I'm running server at http://${HOSTNAME}:${PORT}/ `);
});
