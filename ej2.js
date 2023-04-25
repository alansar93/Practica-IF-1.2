const BITCOIN = 1;
const BITCOIN_A_ETHEREUM = 13540;
const BITCOIN_A_DOLAR = 39685.40;
 
const tipoCambio = document.querySelector ("#usd")
const cantidadBitcoin = document.querySelector ("#eth")
const pEtherium = document.querySelector("#ethereum")
const pDolar = document.querySelector ("#dolar")

// let cantidadBitcoin = prompt ("ingrese cuantos bitcoin va a convertir");
let ethereum = "ethereum";
let dolar = "dolar";
// let tipoCambio = prompt ("Dolar o Ethereum");
 let btcRecibido = "def"; 


function cambioEth () {
    btcRecibido = cantidadBitcoin.value;
    console.log (btcRecibido)
}
/* 
if ((tipoCambio == ethereum) && (cantidadBitcoin > "0")) {
    /* document.write ("Usted tiene " + (BITCOIN_A_ETHEREUM * cantidadBitcoin) + " ethereum"); */
/* pEtherium.innerHTML = ("Usted recibiria " + (cantidadBitcoin * BITCOIN_A_ETHEREUM))
} else if ((tipoCambio == dolar) && (cantidadBitcoin > "0")) { */
    /* document.write ("Usted tiene " + (BITCOIN_A_DOLAR * cantidadBitcoin) + " dolar") */
/* }  */ /* (document.write ("No se puede convertir") *//* ) */
 /* */ 