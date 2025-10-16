function mostre(){
    var nome = document.getElementById("nome").value 
    var des = document.getElementById("des").value 
    var idade = parseFloat(document.getElementById("idade").value) 
    var gen = document.getElementById("gen").value 
    var hobby = document.getElementById("hobby").value 

    var pnome = document.getElementById("pnome")
    var pdes = document.getElementById("pdes")
    var pidade = document.getElementById("pidade")
    var pgen = document.getElementById("pgen")
    var phobby = document.getElementById("phobby")

    pnome.textContent = nome
    pdes.textContent = des
    pidade.textContent = idade
    pgen.textContent = gen
    phobby.textContent = hobby
    

}