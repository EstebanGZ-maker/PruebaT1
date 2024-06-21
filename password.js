const crypto = require('crypto');

// El hash MD5 que estamos buscando
const targetHash = "49f68a5c8493ec2c0bf489821c21fc3b";

// Caracteres posibles (minúsculas, mayúsculas y especiales )
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:",./<>?';

// Función para generar todas las combinaciones posibles de 2 caracteres
function generatePasswords(length) {
    const passwords = [];
    for (let i = 0; i < characters.length; i++) {
        for (let j = 0; j < characters.length; j++) {
            const password = characters[i] + characters[j];
            passwords.push(password);
        }
    }
    return passwords;
}

// Función para encontrar la contraseña
function findPassword() {
    const passwords = generatePasswords(2);
    passwords.forEach(password => {
        const hash = crypto.createHash('md5').update(password).digest('hex');
        if (hash === targetHash) {
            console.log(`La contraseña es: ${password}`);
            return;
        }
    });
}; 

findPassword();
