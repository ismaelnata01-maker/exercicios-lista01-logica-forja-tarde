function check(){
    var WasBorn = parseInt(document.getElementById("birth").value)
    var res = document.getElementById("result")
    var clientAge = document.getElementById("age")

    if(isNaN(WasBorn)){
        res.textContent = "Type only numbers 🚫"
        res.style.color = "red"
        return
    }

    const thisYear = new Date().getFullYear()
    const age = thisYear - WasBorn

    if(age >= 18){
        res.textContent = "Over 18, ENTRY ✅"
        clientAge.textContent = age
        document.getElementById("v1").style.display = "block"
        document.getElementById("v2").style.display = "none"
    }else{
        res.textContent = "Under 18, NOT ALLOWED 🔞"
        clientAge.textContent = age
        document.getElementById("v2").style.display = "block"
        document.getElementById("v1").style.display = "none"
}
}