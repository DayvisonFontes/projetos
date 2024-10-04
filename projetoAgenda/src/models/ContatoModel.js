const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;

};


Contato.prototype.register = async function(userId) {
    this.valida();

    if (this.errors.length > 0) return;
    
    // Atribuir userId corretamente
    this.body.userId = userId;
    this.contato = await ContatoModel.create(this.body);
};

// Validação dos campos
Contato.prototype.valida = function() {
    // Chama a função cleanUp
    this.cleanUp(); 

    // Verifica se o email foi enviado e se ele é válido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido'); 

    // Verifica se o nome foi enviado
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório'); 

    // Verifica se o email ou telefone foi enviado
    if(!this.body.email && !this.body.telefone) {
        this.errors.push('Precisa conter pelo menos: E-mail ou telefone');
    }; 
};

// Limpa os objetos
Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };    
};

Contato.prototype.edit = async function(id, userId) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findOneAndUpdate({ _id: id, userId }, this.body, { new: true });
};

// Métodos estáticos

Contato.findId = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
};

Contato.findContatos = async function(userId) {
    const contatos = await ContatoModel.find({ userId }).sort({ criadoEm: -1 });
    return contatos;
};

Contato.delete = async function(id, userId) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({ _id: id, userId });
    return contato;
};

module.exports = Contato;