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

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    let porcentajesCrecimiento = [];

    for (let i=1; i<trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i-1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    
    const medianaProcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    //console.log({porcentajesCrecimiento, medianaProcentajesCrecimiento});

    const ultimoSalario = trabajos[trabajos.length-1].salario;
    const aumento =  ultimoSalario * medianaProcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;
    //console.log({nuevoSalario});
    return nuevoSalario;
}
