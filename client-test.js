const { io } = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('✅ Conectado ao servidor');

  // Envia localização simulada
  socket.emit('nova_localizacao', {
    entregadorId: 1,
    latitude: -23.55052,
    longitude: -46.633308
  });
});
socket.on('atualizacao_entregador', (data) => {
  console.log('📡 Atualização recebida:', data);
});

socket.on('disconnect', () => {
  console.log('❌ Desconectado do servidor');
});
