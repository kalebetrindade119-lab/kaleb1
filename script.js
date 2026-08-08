function mostrarMensagem(){
    alert("Obrigado por visitar nossa Loja Gamer!");
}

function mudarTexto(){
    document.getElementById("texto").innerHTML =
    "Hoje todos os jogos estão com desconto!";
}

function personalizar(){

    let nome = document.getElementById("nome").value;

    document.getElementById("resposta").innerHTML =
    "Olá, " + nome + "! Seja bem-vindo!";
}

function calcularTotal(){

    let preco = Number(document.getElementById("preco").value);

    let quantidade = Number(document.getElementById("quantidade").value);

    let total = preco * quantidade;

    if(total >= 100){
        document.getElementById("total").innerHTML =
        "Total: R$ " + total + " (Você ganhou desconto!)";
    }else{
        document.getElementById("total").innerHTML =
        "Total: R$ " + total;
    }

}

function mudarCor(){

    document.body.style.background = "darkblue";

    document.getElementById("titulo").style.color = "yellow";

}
