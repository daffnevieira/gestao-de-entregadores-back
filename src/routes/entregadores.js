const express = require('express');
const {
  criarEntregador,
  listarEntregadores,
  buscarEntregador,
  atualizarStatus,
} = require('../controller/entregadorescontroller');

const router = express.Router();

router.post('/', criarEntregador);
router.get('/', listarEntregadores);
router.get('/:id', buscarEntregador);
router.put('/:id/status', atualizarStatus);

module.exports = router;
