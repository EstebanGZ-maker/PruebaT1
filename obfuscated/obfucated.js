//Haz un pequeño código ofuscado en javascript que saque por consola el mensaje “¡Hola mundo!” (sin las comillas)

const { obfuscate } = require('javascript-obfuscator');
const fs = require('fs');

// Código original
const code = 
` (function saludo() {
    const salida = "¡Hola mundo!";
    console.log(salida);
})();`;

// Ofuscar el código
const obfuscatedCode = obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
}).getObfuscatedCode();

// Guardar el código ofuscado en un archivo
fs.writeFileSync('holaMundo.js', obfuscatedCode);

console.log('Código ofuscado generado en obfuscated.js');
