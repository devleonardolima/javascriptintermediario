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