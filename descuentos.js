const inputPrecio = document.querySelector('#precio');
const inputDescuento = document.querySelector('#descuento');
const btn = document.querySelector('#calcular');
const pResultado = document.querySelector('#resultado');

btn.addEventListener('click', calcularDescuento);



function calcularDescuento(){
    const precio = Number(inputPrecio.value);
    const descuento = Number(inputDescuento.value);

    if (!precio || !descuento) {
        pResultado.innerText = 'Por favor llene el formulario';
        return;
    }

    if (descuento > 100){
        pResultado.innerText = 'Aja, ya quisieras, no te vamos a dar plata, PAGA!!';
        return;
    }

    // (p * (100 - d)) / 100
    const nuevoPrecio = (precio * (100 - descuento)) / 100;

    pResultado.innerText = 'El nuev precio con descuento es: $' + nuevoPrecio;

}