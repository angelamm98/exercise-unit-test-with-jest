
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 156.5
    return valueInYen
}


const fromYentoPound = function(valueInYen){
    let valueinPound = valueInYen * 0.87
    return valueinPound
}
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = {fromEuroToDollar, fromDollarToYen, fromYentoPound}