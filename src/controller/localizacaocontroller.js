const prisma = require('../prisma');

const listarLocalizacoes = async (req, res) => {
  try {
    const localizacoes = await prisma.localizacao.findMany({
      include: { entregador: true },
      orderBy: { timestamp: 'desc' },
    });
    res.json(localizacoes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar localizações', detalhes: err });
  }
};

const listarLocalizacoesPorEntregador = async (req, res) => {
  const { id } = req.params;
  try {
    const localizacoes = await prisma.localizacao.findMany({
      where: { entregadorId: parseInt(id) },
      orderBy: { timestamp: 'desc' },
    });
    res.json(localizacoes);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar localizações do entregador', detalhes: err });
  }
};

module.exports = {
  listarLocalizacoes,
  listarLocalizacoesPorEntregador,
};
