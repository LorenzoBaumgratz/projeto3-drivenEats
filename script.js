function selecionarbebida(x){
    const k=document.querySelector(".bebidas .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    let txt=document.querySelector(".bebidas .selecionar h3").innerHTML;
    alert(txt);
    clicarBot();
}

function selecionarcomida(x){
    const k=document.querySelector(".linha-pratos .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    let txt=document.querySelector(".linha-pratos .selecionar h3").innerHTML;
    alert(txt);
    clicarBot();
}

function selecionarsobremesa(x){
    const k=document.querySelector(".sobremesa .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    let txt=document.querySelector(".sobremesa .selecionar h3").innerHTML;
    alert(txt);
    clicarBot();
}

    function clicarBot(){
        const x=document.querySelector(".bebidas .selecionar");
        const y=document.querySelector(".linha-pratos .selecionar");
        const z=document.querySelector(".sobremesa .selecionar");
        const botao=document.querySelector("button");
    
        if(x!==null && y!==null && z!==null){
            botao.innerHTML="Fechar pedido";
            botao.classList.remove("cinza");
            botao.classList.add("verde");
            document.querySelector(".botao-inf").classList.add("verde");
            document.querySelector(".botao-inf").classList.remove("cinza");
            botao.disabled=false;
        }
        
    }
    

    
    
