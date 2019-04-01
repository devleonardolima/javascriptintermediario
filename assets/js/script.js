function clicarButton(){
    alert("CLICOUUUUUUUUUUUUUUUUUUUUUUUUUUUUU !");
}

function clicarDuasButton(){
    alert("DUBLE CLICK !!!");
}

function rightButton(){
    alert("Você não pode apertar como botão direito no meu sistema !");
    return false;
}

function apertarButton(){
    console.log("Você esta apertando o meu botão!");
}

function soltarButton(){
    console.log("Você soltou o botão!");
}

function passarButton(){
    console.log("Você esta passando por cima do meu botão");
}

function sairButton(){
    console.log("Boa saiu de cima");
}

function moveButton(){
    console.log("Tu continua passando por cima de min!")
}

function pressKey(event){
    alert("Você apertou a tecla"+event.keyCode);
    if(event.keyCode == 13){
        console.log("Mesagem enviada");
    }
}

function welcome(){
    alert("Bem vindo!");
}

function focou(){
    console.log("A caixa de texto foi focada!");
}

function desfocou(){
    console.log("A caixa de texto foi desfocada!");
    var texto = document.getElementById('texto').value;
    alert("O valor da caixa é: "+texto);
}

function mudarOption(dado){
    alert("A opção foi mudada para"+dado.value);
}

function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");
    var p1 = Math.floor(Math.random() * 1317);
    var p2 = Math.floor(Math.random() * 560);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this);");

    document.body.appendChild(bola);
}

function estourar(elemento){
    document.body.removeChild(elemento);
}

function iniciar(){
    setInterval(addBola, 2);
}

function validar(){
    var numero = document.getElementById("numero").value;
    if(!isNaN(numero)){
        alert("Digite apenas numero por favor");
        return false;
    }else if(numero.length > 2){
        alert("Você digitou um numero com mais de dois algarismos!");
        return false;
    }else{
        alert("Parabéns você é um usuario decente");
        return true;
    }
}