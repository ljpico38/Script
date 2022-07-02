console.log("page loading...");
var cookieDiv = document.querySelector(".cookie-policy");
function loading() {
    alert("Cargando el clima de su ciudad. . . ...")
}
function ocultarcookie() {
    cookieDiv.remove();
}
function convert(elemento){
    console.log(elemento.value);
    if(elemento.value == "farenheit"){
        let num = document.getElementsByClassName("max");
        for (var i=0; i<num.length; i++){
            var valor = num[i].innerText;
            valor.slice(0,2);
            let var_int = parseInt(valor);
            console.log(var_int);            
            num.[i].innerText = var_int * 2;
            }
        console.log(num[0].outerText);

        alert("se cambio a farenheit");
        }
}
function convert(elemento){
    console.log(elemento.value);
    if(elemento.value == "Celsius"){
        let num = document.getElementsByClassName("max");
        for (var i=0; i<num.length; i++){
            var valor = num[i].innerText;
            valor.slice(0,2);
            let var_int = parseInt(valor);
            console.log(var_int);            
            num.[i].innerText = var_int * 2;
            }
        console.log(num[0].outerText);

        alert("se cambio a Celsius");
        }
}