const express = require('express');
const router = express.Router();

// Requisições do entregador
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

// Requisicoes da localização dos entregadores
const {
    listarLocalizacoes,
    listarLocalizacoesPorEntregador
} = require('../controller/localizacaocontroller');

  
router.get('/localizacoes', listarLocalizacoes);
router.get('/localizacoes/:id', listarLocalizacoesPorEntregador);

//Requisição da Rota


module.exports = router;
