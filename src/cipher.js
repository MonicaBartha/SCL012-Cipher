window.cipher = {
  encode: function codeText(textoCodificar, offset) {
    let resultCode = ''; // el resultado, el texto cifrado 
        for (let i = 0; i < textoCodificar.length; i++) {
            let ascii = textoCodificar.charCodeAt(i); //charCodeAt dice el codigo ascii de la letra
       // String mayusculas
                if (ascii >= 65 && ascii <= 90) {
                    let code = (ascii - 65 + parseInt(offset)) % 26 + 65; // formula 
                        resultCode += String.fromCharCode(code); // DEVUELVE LA LETRA
      }
            // String minusculas
                if (ascii >= 97 && ascii <= 122) {
                    let code = (ascii - 97 + parseInt(offset)) % 26 + 97;
                        resultCode += String.fromCharCode(code);
        }
        // Condicion para mantener espaciado
                if (ascii === 32) {
                    resultCode += ' ';
      }
  }
                if (textoCodificar === ''){
                    alert('Ingresa tu mensaje')
                }
      // alerta si no se ingresa el offset
                if (offset === '') {
                    alert('Ingresa un número de desplazamiento');
                }
    return resultCode;  
},

  decode: function decodeText(textoDescifrar, offset2) {
      let resultDecode = ''; 
        for (let i=0; i < textoDescifrar.length; i++) {
            let asciiDec = textoDescifrar.charCodeAt(i);
            //mayusculas
            if (asciiDec >= 65 && asciiDec <= 90) {
                let codeDec = (asciiDec + 65 - parseInt(offset2)) % 26 + 65;
                resultDecode += String.fromCharCode(codeDec);
            }
            //minusculas
            if (asciiDec >= 97 && asciiDec <= 122) {
                let codeDec = (asciiDec - 97 - parseInt(offset2)+ 52) % 26 + 97;
                resultDecode += String.fromCharCode(codeDec);
            }
            //espacio
            if (asciiDec === 32) {
                resultDecode += ' ';
            }
           
        }
                if (textoDescifrar === '') {
                    alert('Ingresa tu mesaje');
                }
      // alerta si no se ingresa el offset
                if (offset2 === '') {
                    alert('Ingresa un número de desplazamiento');
                }
        return resultDecode;
 }

};