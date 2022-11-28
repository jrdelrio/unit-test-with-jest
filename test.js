const {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test('convert from euro to dollar', () => {
    let convertion = fromEuroToDollar(1);
    expect(convertion).toBe(1.04);
});


test('convert from dollar to yen', () => {
    let convertion = fromDollarToYen(1);
    let result = 143.84/1.04;
    expect(convertion).toBe(result);
});

test('convert from yen to pound', () => {
    let convertion = fromYenToPound(1);
    let result = 0.87/143.84;
    expect(convertion).toBe(result);
});