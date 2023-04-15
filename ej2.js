const BITCOIN = 1;
const BITCOIN_A_ETHEREUM = 13540;
const BITCOIN_A_DOLAR = 39685.40;

let cantidadBitcoin = prompt ("ingrese cuantos bitcoin va a convertir");
let ethereum = "ethereum";
let dolar = "dolar";
let tipoCambio = prompt ("Dolar o Ethereum");

if ((tipoCambio == ethereum) && (cantidadBitcoin > "0")) {
    document.write ("Usted tiene " + (BITCOIN_A_ETHEREUM * cantidadBitcoin) + " ethereum");
} else if ((tipoCambio == dolar) && (cantidadBitcoin > "0")) {
    document.write ("Usted tiene " + (BITCOIN_A_DOLAR * cantidadBitcoin) + " dolar");
}else (document.write ("No se puede convertir"))
