let resposta = document.getElementById("r");
let corAzul = "#836FFF";
let corVermelha = "#FF0000"
let conferencia = true;
resposta.addEventListener("click",()=>{
    if(conferencia===true){
        resposta.style.backgroundColor=corVermelha;
        conferencia=false;
    }
    else{
        resposta.style.backgroundColor=corAzul;
        conferencia=true;
    }
});