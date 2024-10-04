// Carrega variáveis de ambiente do arquivo .env
require('dotenv').config(); 

// Importa os módulos necessários e inicializa o aplicativo Express
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Conecta ao MongoDB usando Mongoose e emite um evento quando a conexão está pronta
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    app.emit('pronto'); // Emite evento 'pronto' quando a conexão é estabelecida
}).catch((e) => {
    console.log(e); // Log de erro se a conexão falhar
});

// Importa módulos para gerenciamento de sessões e flash messages
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Armazena sessões no MongoDB
const flash = require('connect-flash'); // Permite flash messages

// Importa as rotas do aplicativo e módulos adicionais
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet'); // Middleware para segurança
const csrf = require('csurf'); // Middleware para proteção CSRF
const { middlewareGlobal, checkCsrfError, csrfTokenMiddleware } = require('./src/middleware/middleware');

// Configura o Helmet para proteger o aplicativo
app.use(helmet({
    contentSecurityPolicy: false,
}));
// Middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Middleware para JSON
app.use(express.static(path.resolve(__dirname, 'public'))); // Serve arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'frontend')));

// Configurações de sessões
const sessionOptions = session({
    secret: 'texto que ninguem vai saber', // Chave secreta para assinar a sessão
    // store: new MongoStore({ mongooseConnection: mongoose.connection }), // Método desatualizado
    resave: false, // Não salva a sessão se não houver mudanças
    saveUninitialized: false, // Não salva sessões não inicializadas
    cookie: { secure: false },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }) // Método atualizado para armazenar sessões no MongoDB
});

// Usa a configuração de sessões e o flash
app.use(sessionOptions);
app.use(flash());

// Configura o diretório de views e o motor de visualização (EJS)
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Middleware CSRF
app.use(csrf());
// Usando middlewares personalizados
app.use(middlewareGlobal); // Middleware global
app.use(checkCsrfError); // Verifica e trata erros de CSRF
app.use(csrfTokenMiddleware); // Adiciona token CSRF às respostas
app.use(routes); // Usa as rotas definidas

// Inicia o servidor quando a conexão ao MongoDB estiver pronta
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000'); // URL de acesso
        console.log('Servidor executando na porta 3000'); // Mensagem de confirmação
    });    
}); 
