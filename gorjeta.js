//constantes
const contaTotal = document.querySelector('#contaTotal');
const numeroPessoas = document.querySelector('#numeroPessoas');
const escolhaValorGorjeta = document.querySelector('#gorjetaValor');
const valorPessoa = document.querySelector('#valorPessoa');
const totalPessoa = document.querySelector('#total');
const limpar = document.querySelector('#limpar');


// calculo da conta total
let valorConta = '';
 
contaTotal.addEventListener('input', (entrada) => {


	if (entrada.data !== '0' && 
		entrada.data !== '1' &&	
		entrada.data !== null && 
		entrada.data !== '2' && 
		entrada.data !== '3' && 
		entrada.data !== '4' && 
		entrada.data !== '5' && 
		entrada.data !== '6' && 
		entrada.data !== '7' && 
		entrada.data !== '8' && 
		entrada.data !== '9' && 
		entrada.data !== '.' && 
		entrada.data !== ',') {
		contaTotal.value = '';

	}

	if (contaTotal.value === '0') {
		contaTotal.classList.add('erro');
	}else {
		contaTotal.classList.remove('erro');
		valorConta = contaTotal.value;
	}
	
	})

	//calculo da Gorjeta
	const btSelect = document.querySelectorAll('.gorjetaValor');
	let valorGorjeta = '';

	for (let select of btSelect){
		select.addEventListener('click', () => {

			for (let off of btSelect) {
				off.classList.remove('active');
			}

			select.classList.add('active');

			valorGorjeta = '';			
			for(let escolhaGorjeta = 0; escolhaGorjeta < (select.innerText.length -1); escolhaGorjeta++) {
				valorGorjeta += select.innerText[escolhaGorjeta];
			}
		})
	}

	//calculando a Gorjeta
setInterval(() => {

	if(valorConta !== '' && valorGorjeta !== '' && numeroPessoas.value !== '' && numeroPessoas.value !== '0') {

		valorPessoa.innerText = `$${((parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) / parseFloat(numeroPessoas.value)).toFixed(2)}`;

		totalPessoa.innerText = `$${(((parseFloat(valorConta) * (parseFloat(valorGorjeta) / 100)) + parseFloat(valorConta)) / parseFloat(numeroPessoas.value)).toFixed(2)}`;

	}else {
		escolhaValorGorjeta.innerText = '0,00'
		totalPessoa.innerText = '0,00'
	}

}, 1000)

	//adicionando outro valor para Gorjeta - personalizar
	valorPessoa.addEventListener('click', () => {

		for (let select of btSelect) {
			select.classList.remove('active');
		}
		valorGorjeta = '';

	})


	escolhaValorGorjeta.addEventListener('input', () => {

		if (escolhaValorGorjeta.value === '0') {
			escolhaValorGorjeta.classList.add ('erro');
		} else {
			escolhaValorGorjeta.classList.remove('erro');
			valorGorjeta = escolhaValorGorjeta.value;
		}
	})
