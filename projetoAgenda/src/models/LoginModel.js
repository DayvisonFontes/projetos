const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    };

    // Loga o usuário
    async login() {
        this.valida();
        if(this.errors.length > 0) return; // Checa se existe algum erro na validação
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('Usuário não existe');
            return;
        };

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        };
    };

    // Registra o usuário
    async register() {
        this.valida();
        if(this.errors.length > 0) return; // Checa se existe algum erro na validação

        // Checa se o usuário existe
        await this.userExists();

        if(this.errors.length > 0) return; // Checa se existe algum erro na criação do usuário

        // Criptografa a senha do usuário
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
    };

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if(this.user) this.errors.push('Já existe um usuário com esse e-mail.');
    };

    // Validação dos campos
    valida() {
        this.cleanUp(); // Chama a função cleanUp

        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido'); // Valida o email

        if(this.body.password.length < 3 || this.body.password.length >= 50) this.errors.push('Senha precisa ter entre 3 a 50 caracteres.'); // Valida a senha
    };

    // Limpa os objetos
    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        
        this.body = {
            email: this.body.email,
            password: this.body.password
        };    
    };
};

module.exports = Login;