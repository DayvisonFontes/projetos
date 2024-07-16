document.getElementById('calcular').addEventListener('click', function(event) {
    event.preventDefault();

    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    let imc = peso / (altura * altura);

    let resultado;
    if (imc <= 18.5) {
        resultado = "Abaixo do peso";
    }else if (imc >= 18.5 && imc < 25) {
        resultado = "Peso normal";
    }else if (imc >= 25 && imc < 30 ) {
        resultado = "Sobrepeso";
    }else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade grau 1";
    }else if (imc >= 35 && imc < 40) {
        resultado = "Obesidade grau 2";
    }else if (imc > 40) {
        resultado = "Obesidade grau 3";
    }

    document.querySelector('.resultado').innerHTML = `Seu imc é igual a ${imc.toFixed(2)} e você está ${resultado}`;
});