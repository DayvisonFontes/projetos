import GeraCPF from './modules/module-cpf/GeraCPF'
import './assets/css/modelo.css';

const btn = document.querySelector('.btn');
const btnLimpar = document.querySelector('.limpar');
const cpfGerado = document.querySelector('.cpf-gerado');

btn.addEventListener('click', function() {
    const gera = new GeraCPF();
    cpfGerado.innerHTML = gera.geraNovoCpf();
    cpfGerado.classList.add('com-borda');
});

btnLimpar.addEventListener('click', function() {
    cpfGerado.innerHTML = '';
    cpfGerado.classList.remove('com-borda');
})