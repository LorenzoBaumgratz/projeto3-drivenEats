function selecionarbebida(x){
    const k=document.querySelector(".bebidas .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");


    clicarBot();
}

function selecionarcomida(x){
    const k=document.querySelector(".comida .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    
    
    clicarBot();
}



function selecionarsobremesa(x){
    const k=document.querySelector(".sobremesa .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");
    

    clicarBot();
}

function clicarBot(){
        const l=document.querySelector(".bebidas .selecionar");
        const m=document.querySelector(".comida .selecionar");
        const z=document.querySelector(".sobremesa .selecionar");
        const botao=document.querySelector("button");
    
        if(l!==null && m!==null && z!==null){
            botao.innerHTML="Fechar pedido";
            botao.classList.remove("cinza");
            botao.classList.add("verde");
            document.querySelector(".botao-inf").classList.add("verde");
            document.querySelector(".botao-inf").classList.remove("cinza");
            botao.disabled=false;
        }
        
    }
    
function enviar(){
    let celular="5548991323411";
    
    var currency3 = document.querySelector(".sobremesa .selecionar .preco").innerHTML;
    var currency1 = document.querySelector(".comida .selecionar .preco").innerHTML;
    var currency2 = document.querySelector(".bebidas .selecionar .preco").innerHTML;
    
    var total=Number(currency3.replace(/[^0-9.-]+/g,""))+Number(currency2.replace(/[^0-9.-]+/g,""))+Number(currency1.replace(/[^0-9.-]+/g,""));
    let aux=total.toFixed(2);

    let txt=`Olá, gostaria de fazer o pedido: \nPrato: ${document.querySelector(".comida .selecionar h3").innerHTML}\nBebida: ${document.querySelector(".bebidas .selecionar h3").innerHTML}\nSobremesa: ${document.querySelector(".sobremesa .selecionar h3").innerHTML}\nTotal: R$ ${aux}` ;
    
    txt=window.encodeURIComponent(txt);
    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + txt, "_blank");

}
    
    
