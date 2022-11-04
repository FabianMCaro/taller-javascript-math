// class PlatziMath {
//     static esParOImpar(){}
//     static calcularMediana(){}
//     static calcularPromedio(){}
// }

const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(lista){
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

PlatziMath.esParOImpar = function esParOImpar (lista){
    if(lista.length % 2 == 0){ 
        return true;
    }
    else {
        return false;
    }
}

PlatziMath.calcularMediana = function calcularMediana (listaDesordenada){
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esParOImpar(lista);
    if(listaEsPar){
        const mitadListaPar1 = lista[(lista.length / 2) -1];
        const mitadListaPar2 = lista[(lista.length / 2)];
        const listaMitades = [mitadListaPar1, mitadListaPar2];
        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
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

PlatziMath.ordenarLista = function ordenarLista (listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        /*
        if(valorAcumulado > nuevoValor){
            return 1;
        }
        else if (valorAcumulado == nuevoValor){
            return 0;
        }
        else if(valorAcumulado < nuevoValor){
            return -1;
        }
        */
       return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.CalcularModa = function CalcularModa (lista){
    const listaCount = {};

    for (let i=0; i<lista.length; i++){
        const elemento = lista[i];

        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }
        else{
            listaCount[elemento] = 1;
        }   
    }

    const listaArray = Object.entries(listaCount);
    const listaordenada = PlatziMath.ordenarListaBidimensional (listaArray, 1);
    const listaMaxNumber = listaordenada[listaordenada.length-1];
    const moda = listaMaxNumber[0];
    //console.log({listaCount, listaArray, listaordenada, listaMaxNumber});
    //console.log('La moda es: ' + listaMaxNumber[0]);
    return moda;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional (listaDesordenada, i){
    function ordenarListaSort(valorAcumulado, nuevoValor){
       return valorAcumulado[i] - nuevoValor[i];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}