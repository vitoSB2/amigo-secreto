let listaDeNomes = [];
let quantidadeDeNomes = 0;

function adicionarAmigo(){

    let amigo = document.querySelector("input").value;

    if(amigo == ""){
        alert("Digite um nome!");
    } else {
        listaDeNomes.push(amigo);
        quantidadeDeNomes++;
        atualizarListaDeNomes();
        limparCampo();
    }
}

function sortearAmigo(){

    let indexAmigoSorteado = parseInt(Math.random() * quantidadeDeNomes);
    let amigoSorteado = listaDeNomes[indexAmigoSorteado];

    exibirAmigoSorteado(amigoSorteado);
}

function limparCampo(){

    let campo = document.querySelector("input");
    campo.value = "";
}

function atualizarListaDeNomes(){

    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = listaDeNomes.map(nome => "<li>" + nome + "</li>").join("");
}

function exibirAmigoSorteado(nomeSorteado){

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "O Amigo Secreto Sorteado é: " + nomeSorteado;

    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
}