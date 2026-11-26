const express = require('express');
const sequelize = require('./banco');
const Usuario = require('./modelo/usuario');

const app = express()
const port = 3000

app.use(express.json());




sequelize.sync().then(() => {
  console.log(`Banco de dados conectado com sucesso!`);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
});