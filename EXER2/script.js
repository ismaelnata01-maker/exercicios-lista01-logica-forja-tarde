function escreva(){
    var idade = parseFloat(document.getElementById("idade").value)
   
    console.log(typeof idade)

    var b = document.getElementById("printIdade")

    if(idade >= 18){
        b.textContent = idade + " - " + "MAIOR DE IDADE"
        b.style.color = "green"
    }else{
        b.textContent = idade + " - " + "MENOR DE IDADE"
        b.style.color = "red"
}
}