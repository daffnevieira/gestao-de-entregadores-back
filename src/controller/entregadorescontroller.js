const prisma = require('../prisma/index');

const criarEntregador = async (req, res) => {
  try {
    const { nome, status } = req.body;
    const novo = await prisma.entregador.create({
      data: { nome, status: status || 'ativo' },
    });
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar entregador', detalhes: err });
  }
};

const listarEntregadores = async (req, res) => {
  try {
    const entregadores = await prisma.entregador.findMany({
      include: { localizacao: true, rotas: true },
    });
    res.json(entregadores);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar entregadores', detalhes: err });
  }
};

const buscarEntregador = async (req, res) => {
  try {
    const { id } = req.params;
    const entregador = await prisma.entregador.findUnique({
      where: { id: parseInt(id) },
      include: { localizacao: true, rotas: true },
    });
    if (!entregador) return res.status(404).json({ erro: 'Não encontrado' });
    res.json(entregador);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar entregador' });
  }
};

const atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const atualizado = await prisma.entregador.update({
      where: { id: parseInt(id) },
      data: { status },
    });
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar status' });
  }
};

module.exports = {
  criarEntregador,
  listarEntregadores,
  buscarEntregador,
  atualizarStatus,
};
