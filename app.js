const sum = (a,b) => {
    while (!Number.isInteger(a)){
        let input = prompt('Debes ingresar un número: ');
        a = input;
    }
    return a + b
};

let oneEuroIs = {
    "JPY": 143.84, // japan yen
    "USD": 1.04, // us dollar
    "GBP": 0.87, // british pound
};

const fromDollarToYen = (dollar) => {
    return dollar * (oneEuroIs.JPY/oneEuroIs.USD);
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
};

const fromYenToPound = (yen) => {
    return yen * (oneEuroIs.GBP/oneEuroIs.JPY);
};

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}

console.log(sum('rai',6));