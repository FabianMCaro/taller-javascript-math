const inputPrecio = document.querySelector('#precio');
const inputCupon = document.querySelector('#cupon');
const btn = document.querySelector('#calcular');
const pResultado = document.querySelector('#resultado');

btn.addEventListener('click', calcularDescuento);



function calcularDescuento(){
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;
    let descuento;

    if (!precio || !cupon) {
        pResultado.innerText = 'Por favor llene el formulario';
        return;
    }
    
    switch (cupon){
        case 'cupon1':
            descuento = 30;
            break;
        case 'cupon2':
            descuento = 25;
            break;
        default:
            pResultado.innerText = 'El cupon no es valido';
            return;
    }


    // if(cupon == 'aaaaa444'){
    //     descuento = 30;
    // }
    // else if (cupon == 'aaaaa333'){
    //     descuento = 25;
    // }
    // else{
    //     pResultado.innerText = 'El cupon no es valido';
    //     return;
    // }

    // (p * (100 - d)) / 100
    const nuevoPrecio = (precio * (100 - descuento)) / 100;

    pResultado.innerText = 'El nuev precio con descuento es: $' + nuevoPrecio;

}