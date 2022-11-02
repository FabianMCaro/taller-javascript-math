function calcularPromedio(lista){
    // let sumaLista = 0;
    // for(let i=0; i<lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    const sumaLista = lista.reduce(sumarTodosElementos);

    let promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}


function esParOImpar (lista){

    const resultado = lista.length % 2;
    if(resultado == 0){ 
        return true;
    }
    else {
        return false;
    }
}