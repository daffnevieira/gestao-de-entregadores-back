const { Server } = require('socket.io');
const prisma = require('./prisma');

let io; // Mantém uma instância única para evitar duplicação

function setupSocket(server) {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`🟢 Cliente conectado: ${socket.id}`);

    socket.on('nova_localizacao', async ({ entregadorId, latitude, longitude }) => {
      console.log(`📍 Localização recebida | Entregador ${entregadorId}: ${latitude}, ${longitude}`);

      try {
        await prisma.localizacao.create({
          data: {
            entregadorId,
            latitude,
            longitude,
          },
        });

        // Repassar localização para os outros conectados (como o gestor)
        socket.broadcast.emit('atualizacao_entregador', {
          entregadorId,
          latitude,
          longitude,
        });
      } catch (error) {
        console.error('❌ Erro ao salvar localização:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log(`🔴 Cliente desconectado: ${socket.id}`);
    });
  });
}

module.exports = setupSocket;
