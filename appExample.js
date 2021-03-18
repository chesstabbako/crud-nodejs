/* este metodo de las llaves se llama destructury */

const {frutas, dinero}= require('./frutas');
const cowsay = require("cowsay");

console.log(
    cowsay.say({
      text: "Hello Tabaco",
      e: "Oo",
      T: "U",
    })
);

frutas.forEach(fruta => {

  console.log(fruta);

});





