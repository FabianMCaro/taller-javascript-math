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

// Analisis Empresarial
const empresas = {};
for (persona of salarios) {
    for(trabajo of persona.trabajos){
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }

        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}
console.log(empresas);

function medianaEmpresaYear(nombre, year) {
    if(!empresas[nombre]){
        console.log('La empresa no existe');
    }
    else if(!empresas[nombre][year]){
        console.log('la empresa no dio salarios ese año');
    }
    else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
    }
}

function ProyeccionPorEmpresa (){}
