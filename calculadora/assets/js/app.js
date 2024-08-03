function CriaCalculadora () {
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;
        
        try {
            conta = eval(conta);

            if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            };

            this.display.value = String(conta);
        }catch(e) {
            alert('Conta inválida');
            return;
        };
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            };

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            };

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            };

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            };

            this.display.focus();
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };
}

const calculadora = new CriaCalculadora();
calculadora.inicia();