// var CryptoJS = require("crypto-js");
var crypto = require("crypto");

// // Encrypt
// // var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// // console.log(ciphertext)

// //  ciphertext = CryptoJS.AES.decrypt(ciphertext, 'secret key 123').toString();

// // console.log(ciphertext)

// var bytes  = CryptoJS.AES.decrypt("U2FsdGVkX1/vEVYked1lNb9u10XtO7vIbmK3RNcHmV8=", "iaacbRyLfoGLnKF6M+en+r+AL6v1b5Ur2agKEnQ00FU=");
// var originalText = bytes.toString(CryptoJS.enc.Utf8);

// console.log(originalText); // 'my message'

console.log(crypto.randomBytes(32).toString("base64"))