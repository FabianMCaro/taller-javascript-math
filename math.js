// Cuadrado 
const btnCuadrado = document.querySelector('#calcularCuadrado');
const inputlado = document.querySelector('#cuadradoL')
const pResultadoCuadrado = document.querySelector('#respuestaCuadrado');
// Triangulo
const btnTrianguloAP = document.querySelector('#calcularTrianguloAP');
const inputLado1 = document.querySelector('#trianguloL1');
const inputLado2 = document.querySelector('#trianguloL2');
const inputbase = document.querySelector('#trianguloB');
const inputAltura = document.querySelector('#trianguloA');
const pRespuestaTriangulo = document.querySelector('#respuestaTriangulo');
// Triangulo isosceles
const btnTrianguloIsosceles = document.querySelector('#calcularAlturaTrianguloI');
const inputLadosIsosceles = document.querySelector('#trianguloIsoscelesL');
const inputbaseIsosceles = document.querySelector('#trianguloIsoscelesB');
const pRespuestaTrianguloIsosceles = document.querySelector('#respuestaTrianguloIsosceles');
// Triangulo Escaleno
const btnTrianguloEscaleno = document.querySelector('#calcularAlturaTrianguloE');
const inputEscalenoLado1 = document.querySelector('#trianguloEscalenoL1');
const inputEscalenoLado2 = document.querySelector('#trianguloEscalenoL2');
const inputEscalenoLado3 = document.querySelector('#trianguloEscalenoL3');
const pRespuestaTrianguloEscaleno = document.querySelector('#respuestaTrianguloEscaleno');
// Circulo
const btnCirculo = document.querySelector('#calcularCirculo');
const inputRadio = document.querySelector('#radioCirculo');
const pRespuestaCirculo = document.querySelector('#respuestaCirculo');


// eventos y ejecucion de funciones
btnCuadrado.addEventListener('click', calcularCuadradoAP);
btnTrianguloAP.addEventListener('click', calcularTrianguloAP);
btnTrianguloIsosceles.addEventListener('click', calcularTrianguloIsosceles);
btnTrianguloEscaleno.addEventListener('click', calcularTrianguloEscaleno);
btnCirculo.addEventListener('click', calcularCirculoAreaCircunferencia);


// funciones para el calculo de las areas, perimetros y alturas de las figuras geometricas
function calcularCuadradoAP(){
    const lado = Number(inputlado.value);
    const perimetro = lado * 4;
    const area = lado * lado;
    pResultadoCuadrado.innerText = 'El perimetro del cuadrado es: ' + perimetro + 'cm,  y el area es: '+ area + "cm².";
}

function calcularTrianguloAP () {
    const lado1 = Number(inputLado1.value); 
    const lado2 = Number(inputLado2.value);
    const base = Number(inputbase.value);
    const altura = Number(inputAltura.value);

    const perimetro = lado1 + lado2 + base;
    const area = (base * altura) / 2;

    pRespuestaTriangulo.innerText = 'El perimetro del triangulo es:' + perimetro + ' y el area es: ' + area;
}

function calcularTrianguloIsosceles () {
    const lados = Number(inputLadosIsosceles.value);
    const base = Number(inputbaseIsosceles.value);

    if(lados == base){
        pRespuestaTrianguloIsosceles.innerText = 'Este no es un triangulo isosceles!!';
    }
    else{
        const altura = Math.sqrt((lados ** 2) - ((base ** 2) / 4));
        pRespuestaTrianguloIsosceles.innerText = 'La altura del triangulo isosceles es: ' + altura;
    }
}

function calcularTrianguloEscaleno () {
    const lado1 = Number(inputEscalenoLado1.value);
    const lado2 = Number(inputEscalenoLado2.value);
    const lado3 = Number(inputEscalenoLado3.value);

    if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
        //console.warn('No es un triangulo escaleno');
        pRespuestaTrianguloEscaleno.innerText = 'No es un Triangulo Escaleno';
    }
    else {
        const s = (lado1 + lado2 + lado3) / 2;
        const s1 = s - lado1;
        const s2 = s - lado2;
        const s3 = s - lado3;
  
        const altura = (2 / lado1) * Math.sqrt(s * s1 * s2 * s3);
        const resultado = Math.floor(altura);
        pRespuestaTrianguloEscaleno.innerText = 'La altura del triangulo escaleno es: ' + resultado;
    }
}

function calcularCirculoAreaCircunferencia () {
    const radio = Number(inputRadio.value);

    const circuenferencia = (radio * 2) * Math.PI;
    const area = Math.pow(radio, 2) * Math.PI;

    pRespuestaCirculo.innerText = 'La circunferencia del circuo es: ' + circuenferencia + ' y el area es: ' + area;
}


// operaciones basicas y pruebas echas en la consola

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

// Calculo de la altura de un triangulo isosceles
function calcularAlturaTriangulo (lado1, base) {
    if(lado1 == base){
        console.warn('Este no es un triangulo isosceles');
    }
    else{
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
    }
}

// Calculo de la altura de un triangulo escaleno
function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3) {
    if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
      //console.warn('No es un triangulo escaleno');
      return false;
    }
    else {
      const s = (lado1 + lado2 + lado3) / 2;
      const s1 = s - lado1;
      const s2 = s - lado2;
      const s3 = s - lado3;

      const H = (2 / lado1) * Math.sqrt(s * s1 * s2 * s3);
      const resultado = Math.floor(H);
      return resultado;
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