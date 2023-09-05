let somar = document.getElementById("somar");
somar.addEventListener("click", calculadora);


let diminuir = document.getElementById("subtrair");
diminuir.addEventListener("click", subtracao);


let to_multiplicar = document.getElementById("multiplicar");
 to_multiplicar.addEventListener("click",multiplique);

let to_dividir = document.getElementById("dividir");
to_dividir.addEventListener("click", divida);


let clean_01 = document.getElementById("limpe_aqui");
clean_01.addEventListener("click", clean);


function calculadora (){
    let caixa_01 = document.getElementById("texto01");
    let caixa_02 = document.getElementById("texto02");
    let result = document.getElementById("resultado");

    let number_one= parseFloat(caixa_01.value);
    let number_two= parseFloat(caixa_02.value);
    let resultado= number_one + number_two;
    result.innerText= "A soma é: " + resultado;
}
// desafio: fazer uma calculadora completa 
// adicao, subtracao, divisao, multiplicacao , ter um resultado e limpar

function subtracao (){
    let caixa_01 = document.getElementById("texto01");
    let caixa_02 = document.getElementById("texto02");
    let result = document.getElementById("resultado");

    let number_one= parseFloat(caixa_01.value);
    let number_two= parseFloat(caixa_02.value);
    let resultado= number_one - number_two;
    result.innerText= "A subtração é: " + resultado;
}

function multiplique (){
    let caixa_01 = document.getElementById("texto01");
    let caixa_02 = document.getElementById("texto02");
    let result = document.getElementById("resultado");

    let number_one= parseFloat(caixa_01.value);
    let number_two= parseFloat(caixa_02.value);
    let resultado= number_one * number_two;
    result.innerText= "A multiplicação é: " + resultado;
}

function divida (){
    let caixa_01 = document.getElementById("texto01");
    let caixa_02 = document.getElementById("texto02");
    let result = document.getElementById("resultado");

    let number_one= parseFloat(caixa_01.value);
    let number_two= parseFloat(caixa_02.value);
    let resultado= number_one / number_two;
    result.innerText= "A divisão é: " + resultado;
}

function clean (){
    let caixa_01 = document.getElementById("texto01");
    let caixa_02 = document.getElementById("texto02");
    let result = document.getElementById("resultado");

    caixa_01.value = ""
    caixa_02.value = ""
    result.innerText= "" 
}

