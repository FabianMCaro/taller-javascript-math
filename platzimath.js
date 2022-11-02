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
    //console.log(promedio);
    return promedio;
}


function esParOImpar (lista){
    if(lista.length % 2 == 0){ 
        return true;
    }
    else {
        return false;
    }
}

function calcularMediana (lista){
    const listaEsPar = esParOImpar(lista);
    if(listaEsPar){
        const mitadListaPar1 = lista[(lista.length / 2) -1];
        const mitadListaPar2 = lista[(lista.length / 2)];
        const listaMitades = [mitadListaPar1, mitadListaPar2];
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    }
    else{
        // redondear y quitar decimales Math.floor 
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return lista[indexMitadListaImpar];
    }
}