// Importar la función sum del archivo app.js
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar, fromDollarToYen, fromYentoPound } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("3.745 dollar should be 547.75 yen", function () {
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const expected = 3.745 * 156.5
    expect(fromDollarToYen(3.5)).toBe(547.75);
})

test("547.75 yen should be 476.5425 (pounds", function() {
    const {fromYentoPound} = require('./app.js')
    const pound = fromYentoPound(547.75)
    const expected = 547.75 * 0.87;
    expect(fromYentoPound(547.75)).toBe(476.5425)
})