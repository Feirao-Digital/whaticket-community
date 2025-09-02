module.exports = {
  apps: [
    {
      name: 'whaticket-frontend',
      script: 'D:/@Projetos/WhatsApp/Whaticket/frontend/server.js', // O script a ser executado
      
      // Define o diretório de trabalho para a pasta raiz do backend.
      // Isso garante que o '.env' seja encontrado no local esperado pelo código.
      //cwd: 'D:/@Projetos/WhatsApp/Whaticket/frontend/', 

      // Se a abordagem 'cwd' não funcionar, esta é ainda mais explícita.
      // O PM2 irá carregar este arquivo .env antes de iniciar o script.
      // Descomente a linha abaixo se necessário, mas 'cwd' geralmente resolve.
      // env_file: './.env',

      // Opcional: modo cluster para usar todos os núcleos de CPU
      // instances: 'max', 
      // exec_mode: 'cluster',
    },
  ],
};
