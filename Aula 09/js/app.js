const nome = document.getElementById("userInput");
const botao = document.getElementById("actionButton");
let r = document.getElementById('resposta');
botao.addEventListener('click',function(){
    r.innerHTML = `Olá ${nome.value}`;
});