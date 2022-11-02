const inputPrecio = document.querySelector('#precio');
const inputCupon = document.querySelector('#cupon');
const btn = document.querySelector('#calcular');
const pResultado = document.querySelector('#resultado');
// reto de ID y usurio
const btnBuscarID = document.querySelector('#buscarID');
const inputID = document.querySelector('#id');
const pResultadoID = document.querySelector('#resultadoID');

//escuchar evento y ejecutar funciones
btn.addEventListener('click', calcularDescuento);
btnBuscarID.addEventListener('click', buscarIDConUsuario);

// const cupunesObj = {
//     'Batman': 30,
//     'cupon2': 25,
//     'cupon3': 15,
// };

// lista de cupones y sus descuentos
const cuponesList  = [];
cuponesList.push({
    name: 'batman',
    descuento: 30,
});
cuponesList.push({
    name: 'robin',
    descuento: 25,
});
cuponesList.push({
    name: 'superman',
    descuento: 15,
});

// id y usuarios
const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

function buscarIDConUsuario () {
    const id = Number(inputID.value);

    function encontrarID (user){
        return user.id == id;
    }

    const idConUsuario = users.find(encontrarID);

    if(idConUsuario){
        const nombre = idConUsuario.name;
        pResultadoID.innerText = 'El nombre el usuario es: '+ nombre;
    }
    else {
        pResultadoID.innerText = 'El numero de ID no existe';
    }

}


function calcularDescuento(){
    const precio = Number(inputPrecio.value);
    const cupon = inputCupon.value;
    let descuento;

    if (!precio || !cupon) {
        pResultado.innerText = 'Por favor llene el formulario';
        return;
    }

    function esCuponEnArray(cuponElemento){
        return cuponElemento.name == cupon;
    }

    const cuponEnArray = cuponesList.find(esCuponEnArray); // {}

    if(cuponEnArray){
        descuento = cuponEnArray.descuento;
    }
    else {
        console.log({
            cupon,
            descuento,
            cuponEnArray,
        });
        pResultado.innerText = 'El cupon no es valido';
        return;
    }  

    // condicional con los copnes en un objeto
    // if (cupunesObj [cupon]) {
    //     descuento = cupunesObj [cupon];
    // }
    // else{
    //     pResultado.innerText = 'El cupon no es valido';
    //     return;
    // }
    
    // switch (cupon){
    //     case 'cupon1':
    //         descuento = 30;
    //         break;
    //     case 'cupon2':
    //         descuento = 25;
    //         break;
    //     default:
    //         pResultado.innerText = 'El cupon no es valido';
    //         return;
    // }

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