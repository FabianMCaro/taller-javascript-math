// Calculo del perimetro y del area de un cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.group('Cuadrado')
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});
console.groupEnd('Cuadrado')

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        areas: lado * lado,
    }
}


// Calculo de Perimetro y area de un triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase  * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        areas: (base * altura) / 2,
    }
}

console.group('Triangulo')
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
});
console.groupEnd('Triangulo')


// Calculo de Perimetro y Area de una circulo
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio,2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}

console.group('Circulo');
console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});
console.groupEnd('Circulo');