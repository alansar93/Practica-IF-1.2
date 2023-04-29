const BITCOIN = 1;
const BITCOIN_A_ETHEREUM = "13540";
const BITCOIN_A_DOLAR = "39685.40";
 
const cantidadUsd = document.querySelector ("#usd")
const cantidadBitcoin = document.querySelector ("#eth")
const pConvencionUsd = document.querySelector("#dolar")
const pConvencionBtc = document.querySelector("#btc")

// let cantidadBitcoin = prompt ("ingrese cuantos bitcoin va a convertir");
let ethereum = "ethereum";
let dolar = "dolar";
// let tipoCambio = prompt ("Dolar o Ethereum");
 let btcRecibido = "def"; 
 let usdRecibido = "def"

function cambioEth() {
    let btcRecibido = cantidadBitcoin.value;
    let calculoBtc = btcRecibido * BITCOIN_A_ETHEREUM
    pConvencionBtc.innerHTML = calculoBtc + " cantidad de eth";
}

function cambioUsd() {
    let usdRecibido = cantidadUsd.value
    let calculoUsd = usdRecibido * BITCOIN_A_DOLAR
    pConvencionUsd.innerHTML = calculoUsd + " cantidad de usd";
}

/* 
if ((tipoCambio == ethereum) && (cantidadBitcoin > "0")) {
    /* document.write ("Usted tiene " + (BITCOIN_A_ETHEREUM * cantidadBitcoin) + " ethereum"); */
/* pEtherium.innerHTML = ("Usted recibiria " + (cantidadBitcoin * BITCOIN_A_ETHEREUM))
} else if ((tipoCambio == dolar) && (cantidadBitcoin > "0")) { */
    /* document.write ("Usted tiene " + (BITCOIN_A_DOLAR * cantidadBitcoin) + " dolar") */
/* }  */ /* (document.write ("No se puede convertir") *//* ) */
 /* */ 