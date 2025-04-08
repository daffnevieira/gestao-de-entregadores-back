const express = require('express');
const router = express.Router();

const {
  criarEntregador,
  listarEntregadores,
  buscarEntregador,
  atualizarStatus,
} = require('../controller/entregadorescontroller');

router.post('/entregadores', criarEntregador);
router.get('/entregadores', listarEntregadores);
router.get('/entregadores/:id', buscarEntregador);
router.put('/entregadores/:id/status', atualizarStatus);

module.exports = router;
