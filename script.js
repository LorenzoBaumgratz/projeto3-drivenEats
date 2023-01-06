function selecionarbebida(x){
    const k=document.querySelector(".bebidas .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    let txt=document.querySelector(".bebidas .selecionar h3").innerHTML;
    alert(txt);
}

function selecionarcomida(x){
    const k=document.querySelector(".linha-pratos .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    let txt=document.querySelector(".linha-pratos .selecionar h3").innerHTML;
    alert(txt);
}

function selecionarsobremesa(x){
    const k=document.querySelector(".sobremesa .selecionar");
    if(k!==null)
    k.classList.remove("selecionar");

    x.classList.add("selecionar");

    let txt=document.querySelector(".sobremesa .selecionar h3").innerHTML;
    alert(txt);
}