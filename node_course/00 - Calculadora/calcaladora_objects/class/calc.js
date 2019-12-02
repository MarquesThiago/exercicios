class Calc{
    soma = (valueA , valueB) => {

        return valueA + valueB

    }

    subtracion = (valueA , valueB) => {

        return valueA - valueB

    }

    multiple = (valueA , valueB) => {

        return valueA * valueB

    }

    division = (valueA , valueB) => {

        return valueA / valueB

    }
}

const calcular = new Calc

module.exports = calcular