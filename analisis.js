console.log(salarios);

// Analisis personal para Juanita


function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona => persona.name == personaEnBusqueda);
    /*
    const persona = salarios.find((persona) => {
        return persona.name == personaEnBusqueda;
    });
    return persona;
    */
}

function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });
    const medianaSlarios = PlatziMath.calcularMediana(salarios);

    console.log(salarios);
    return medianaSlarios;
}
