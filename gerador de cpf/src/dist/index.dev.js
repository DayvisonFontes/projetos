"use strict";

var _GeraCPF = _interopRequireDefault(require("./modules/module-cpf/GeraCPF"));

require("./assets/css/modelo.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var btn = document.querySelector('.btn');
var btnLimpar = document.querySelector('.limpar');
var cpfGerado = document.querySelector('.cpf-gerado');
btn.addEventListener('click', function () {
  var gera = new _GeraCPF["default"]();
  cpfGerado.innerHTML = gera.geraNovoCpf();
  cpfGerado.classList.add('com-borda');
});
btnLimpar.addEventListener('click', function () {
  cpfGerado.innerHTML = '';
  cpfGerado.classList.remove('com-borda');
});