require('dotenv').config();


const prompts = require('prompts');
const Cryptor = require('./Crypt')
const generateKey = require("./generate-key");
// console.log('Nova chave: ',generateKey(64));



(async () => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Digite algo para ser criptado: ',
    });

    const { value } = response

    let crypted = Cryptor.crypt(`${process.env.KEY}`, value)
    let decrypted = Cryptor.decrypt(`${process.env.KEY}`, crypted)

    console.log('\nCriptografado pela chave salva: ', crypted);
    console.log('Decriptografado pela chave salva: ', decrypted, '\n')

    const key = generateKey(128)
    crypted = Cryptor.crypt(key, value)
    decrypted = Cryptor.decrypt(key, crypted)

    console.log('Criptografado pela chave randômica: ', crypted);
    console.log('Decriptografado pela chave randômica: ', decrypted)
})();
