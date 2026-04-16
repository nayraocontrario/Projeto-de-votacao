function inserir(valor) {
    // Obtém o valor do campo de entrada com o id "campo"
    var valorVoto = document.getElementById("campo").value;
    
    // Verifica se o campo está vazio
    if (valorVoto == "") {
        // Se estiver vazio, insere o valor recebido como parâmetro no campo
        document.getElementById("campo").value = valor;
    }

    // Verifica se o valor do voto é 5
    if(valorVoto == 5){
        // Se for 5, limpa o campo
        document.getElementById("campo").value = "";
    }

    // Verifica se o valor do voto é 6
    if(valorVoto == 6){
        // Se for 6, limpa o campo
        document.getElementById("campo").value = "";
    }
}

function corrige(){
    // Limpa o campo
    document.getElementById("campo").value = "";
}

var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var candidato4 = 0;
var nulo = 0;
var branco = 0;
var totalVotos = 0;
var porcentagem = 0;

function votar(){
    // Obtém o valor do voto como um número inteiro
    var valorVoto = parseInt(document.getElementById("campo").value);
    
    // Verifica o valor do voto e incrementa o contador apropriado
    if(valorVoto == 1){
        candidato1 = candidato1 + 1;
        alert("O seu voto no candidato Garcia foi computado");
    }
    if(valorVoto == 2){
        candidato2 = candidato2 + 1;
        alert("O seu voto no candidato Ryan foi computado com sucesso");
    }
    if(valorVoto == 3){
        candidato3 = candidato3 + 1;
        alert("O seu voto na candidato Miguel foi computado com sucesso");
    }
    if(valorVoto == 4){
        candidato4 = candidato4 + 1;
        alert("O seu voto na candidata Moreno foi computado com sucesso");
    }
    if(valorVoto == 5){
        nulo = nulo + 1;
        alert("O seu voto anulado foi computado com sucesso");
    }
    if(valorVoto == 6){
        branco = branco + 1;
        alert("O seu voto branco foi computado com sucesso");
    }

    // Calcula o total de votos e a porcentagem de votos nulos e brancos
    totalVotos = candidato1 + candidato2 + candidato3 + candidato4 + nulo + branco;
    porcentagem = (nulo + branco) * 100 / totalVotos;
    
    // Limpa o campo
    document.getElementById("campo").value = "";
}

function resultado() {
    // Atualiza os elementos HTML com os resultados
    document.getElementById("c1").innerHTML = candidato1;
    document.getElementById("c2").innerHTML = candidato2;
    document.getElementById("c3").innerHTML = candidato3;
    document.getElementById("c4").innerHTML = candidato4;
    document.getElementById("nulo").innerHTML = nulo;
    document.getElementById("branco").innerHTML = branco;
    document.getElementById("total").innerHTML = totalVotos;
    document.getElementById("percentual").innerHTML = porcentagem + "%";
}