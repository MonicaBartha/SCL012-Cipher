// boton del home CIFRAR 
let encript = document.getElementById('encrypt');
encript.addEventListener('click', 
function clickEncrypt() {
    document.getElementById('encryptPage').style.display = "block";
    document.getElementById('finalButtons1').style.display = "block";
    document.getElementById('main').style.display = "none";
});
// boton del home DESCIFRAR
let decript = document.getElementById('decrypt');
decript.addEventListener('click', 
function clickDecript() {
    document.getElementById('decryptPage').style.display = "block";
    document.getElementById('finalButtons2').style.display = "block";
    document.getElementById('encrypt').style.display = "none";
    document.getElementById('main').style.display = "none";
});
// boton LIMIPAR 1 (de la pagina cifrar)
let clear = document.getElementById('clearInput1');
clear.addEventListener('click',
function clearInput() {
    document.getElementById('encryptText').value = '';
    document.getElementById('key1').value = '';
    document.getElementById('encryptResult').value = '';
});
// boton LIMIPAR 2 (de la pagina descifrar)
let clear2 = document.getElementById('clearInput2');
clear2.addEventListener('click',
function clearInput2() {
    document.getElementById('decryptText').value = '';
    document.getElementById('key2').value = '';
    document.getElementById('decryptResult').value = '';
});
// boton HOME 1 (de la pagina cifrar)
let home = document.getElementById('backHome1');
home.addEventListener('click', 
function goHome() {
    document.getElementById('main').style.display = "block";
    document.getElementById('encryptPage').style.display = "none";
    document.getElementById('finalButtons1').style.display = "none";
});
// boton HOME 2 (de la pagina descifrar)
let home2 = document.getElementById('backHome2');
home2.addEventListener('click', 
function goHome2() {
    document.getElementById('main').style.display = "block";
    document.getElementById('encrypt').style.display = "block";
    document.getElementById('decryptPage').style.display = "none";
    document.getElementById('finalButtons2').style.display = "none";
});

// boton HOME 3 , boton del menu 
let home3 = document.getElementById('backHome3');
home3.addEventListener('click', 
function goHome2() {
    document.getElementById('main').style.display = "block";
    document.getElementById('decryptPage').style.display = "none";
    document.getElementById('finalButtons2').style.display = "none";
    document.getElementById('encryptPage').style.display = "none";
    document.getElementById('aboutPage').style.display = "none";
    document.getElementById('finalButtons1').style.display = "none";
});

let about = document.getElementById('aboutButton');
about.addEventListener('click',
                      function goToAboutPage(){
    document.getElementById('main').style.display = "none";
    document.getElementById('aboutPage').style.display = "block";
    document.getElementById('encryptPage').style.display = "none";
    document.getElementById('decryptPage').style.display = "none";
})
// declarar variables del cipher
const buttonCode = document.getElementById('encryptButton'); // boton CIFRAR
const buttonDecode = document.getElementById('decryptButton'); // BOTON DESCIFRAR
const message = document.getElementById('encryptResult'); // texarea donde se muestra el resultado del Cifrado
const message2 = document.getElementById('decryptResult');// textarea donde se muestra el resultado del Descifrar

// Boton CIFRAR
buttonCode.addEventListener('click', () => {
    let textoCodificar = document.getElementById('encryptText').value;
    let offset = document.getElementById('key1').value;
    const outCod = window.cipher.encode(textoCodificar, offset);
    message.innerHTML = outCod;
});
//Boton DESCIFRAR
buttonDecode.addEventListener('click', () => {
    let textoDescifrar = document.getElementById('decryptText').value;
    let offset2 = document.getElementById('key2').value;
    const outDec = cipher.decode(textoDescifrar, offset2);
    message2.innerHTML = outDec;
});