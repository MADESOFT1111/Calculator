let pantalla = document.getElementById("pantalla");
let operacion = "";

function agregarNumero(numero){
    operacion += numero;
    actualizarPantalla();
}

function agregarOperador(operador){
    if( operacion !== "" && !/[\+\-\*\/]$/.test(operacion)){
        operacion += operador;
        actualizarPantalla();
    }   
}

function calcularResultado() {
    try{
        operacion = eval(operacion).toString();
    } catch (error){
        operacion = "Error";
    }
    actualizarPantalla();
}

function limpiarPantalla() {
    operacion = "";
    actualizarPantalla();
}

function actualizarPantalla(){
    pantalla.value = operacion;
}