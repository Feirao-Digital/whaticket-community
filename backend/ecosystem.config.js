module.exports = {
  apps: [
    {
      name: 'whaticket-backend',
      script: './dist/server.js', // O script a ser executado
      
      // Define o diret�rio de trabalho para a pasta raiz do backend.
      // Isso garante que o '.env' seja encontrado no local esperado pelo c�digo.
      cwd: './', 

      // Se a abordagem 'cwd' n�o funcionar, esta � ainda mais expl�cita.
      // O PM2 ir� carregar este arquivo .env antes de iniciar o script.
      // Descomente a linha abaixo se necess�rio, mas 'cwd' geralmente resolve.
      // env_file: './.env',

      // Opcional: modo cluster para usar todos os n�cleos de CPU
      // instances: 'max', 
      // exec_mode: 'cluster',
    },
  ],
};