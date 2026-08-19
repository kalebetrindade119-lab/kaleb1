function entraNaLoja(){  

    let nome = document.getElementById("nome").value;

    document.getElementById("mensagem").textContent = "bem-vindo à Pixel Store," +nome+"!";

alert("bem-vindo à Pixel Store,"+nome+"!");

}

function promo(){

let promo = document.getElementById("88")

promo.style.fontSize="30px";

 document.getElementById("88").textContent = "R$ 99,90";

 promo.style.color = "red";



}

function calcularCompra() {

let produto = Number (document.getElementById ("produto").value);

let quantidade = Number(document.getElementById("quantidade").value);

let total= produto *quantidade;

let resultado = document.getElementById("resultadoCompra");

let frete = document.getElementById("frete");

if (quantidade >=3){total = total - (total *0.10);


resultado.textContent = 
"Total de compra: R$" + total.toFixed(2)+
" - Desconto de 10% aplicado!";



}
else {
resultado.textContent  = 
" toral da compa: R$ " + total.toFixed(2) + 
   " - Nenhum desconto aplicado.";



}


if ( quantidade>= 3){

frete.textContent = "🎉 FRETE GRÁTIS! Você comprou 3 ou mais itens";
frete.style.color ="green";



}
else{

frete.textContent = "Frete calculado separadamente.";

frete.style.color = "red";
}


}



function enviarMensagem(){

let nome = document.getElementById("nomeAtendimento").value;

let idade = Number(document.getElementById ("idade").value);

let resposta = document.getElementById("resposta");

let respostaIdade = document.getElementById("respostaIdade")

if ( nome =="")
{
resposta.textContent =  
"Digite seu nome antes de continuar.";

resposta.style.color="red";
}    

else{
resposta.textContent =
" obrigado," + nome + "  sua mensagem foi registrada";

resposta.style.color=" green";





}


if (idade>=18){
respostaIdade.textContent =
"você pode participar das promoções para maiores de 18 anos.";



}



else if (idade < 18) {

    respostaIdade.textContent =
        "vocer ainda e muito Niuba 👶👶👶👶👶👶.";

    respostaIdade.style.color = "red";
}









}

function destacarAtendimento(){

let formulario = document.getElementById("areaFormulario")

formulario.style.backgroundColor ="#eeeeee";

formulario.style.borderColor ="green"

  formulario.style.padding = "30px";


}

function ativarPromocao(){
    document.getElementById("87").style.color = "red";
    document.getElementById("87").style.fontSize = "30px";
    document.getElementById("87").textContent = "R$ 50,90";

    document.getElementById("88").style.color = "red";
    document.getElementById("88").style.fontSize = "30px";
    document.getElementById("88").textContent = "R$ 199,90";


    document.getElementById("89").style.color = "red";
    document.getElementById("89").style.fontSize = "30px";
    document.getElementById("89").textContent = "R$ 220,00";

    document.getElementById("90").style.color = "red";
    document.getElementById("90").style.fontSize = "30px";
    document.getElementById("90").textContent = "R$ 290.00";









}
