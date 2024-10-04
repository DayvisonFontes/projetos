const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    // Verifica se o usuário está logado
    if (!req.session.user) {
        return res.redirect('/login/index'); // Redireciona para a página de login se o usuário não estiver logado
    }
    
    const userId = req.session.user._id; // Obtendo o userId da sessão
    const contatos = await Contato.findContatos(userId); // Passa o userId para a busca dos contatos
    res.render('index', { contatos });
};