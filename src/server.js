const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const setupSocket = require('./socket');
const routes = require('./routes/rotas');

const app = express();
const server = http.createServer(app);

// middleware
app.use(cors());
app.use(express.json());
app.use('/', routes);

// inicia o socket.io corretamente
setupSocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
