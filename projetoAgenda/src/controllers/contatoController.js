const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const userId = req.session.user._id; // Obtendo o userId da sessão
    const contatos = await Contato.findContatos(userId); // Passando o userId

    res.render('contato', {
        contatos,
        contato: {}
    });
};


exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        const userId = req.session.user._id; // Obtenha o userId da sessão
        await contato.register(userId); // Passar o userId para o método register

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;
    } catch (error) {
        return res.render('404');
    }
};


exports.editIndex = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404');

        const contato = await Contato.findId(req.params.id);
        if(!contato) return res.render('404');
    
        res.render('contato', { contato });    
    } catch (error) {
        console.log(error)
        res.render('404');
    };
};

exports.edit = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404');

        const contato = new Contato(req.body);
        await contato.edit(req.params.id, req.session.user._id); // Passando userId para garantir que está editando corretamente.

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => {
                return res.redirect(`/contato/index/${req.params.id}`);
            });
            return;
        };

        req.flash('success', 'Contato alterado com sucesso.');
        req.session.save(() => {
            return res.redirect('/'); // Redireciona para a página inicial após edição
        });
    } catch (error) {
        console.log(error);
        res.render('404');
    }
};

exports.delete = async function(req, res) {
    console.log("Deleting contact with ID:", req.params.id);
    if (!req.params.id) return res.render('404');

    const userId = req.session.user._id; // Obtenha o userId da sessão
    const contato = await Contato.delete(req.params.id, userId); // Passar o userId para o método delete

    if (!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso');
    req.session.save(() => res.redirect('/'));
    return;
};