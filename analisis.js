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

    //console.log(salarios);
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

function ProyeccionPorEmpresa(nombre){
    if(!empresas[nombre]){
        console.log('La empresa no existe');
    }
    else{
        const empresaYears = Object.keys(empresas[nombre]);
        const listaMedianaYears = empresaYears.map((year) => {
            return medianaEmpresaYear(nombre,year);
        });

        let porcentajesCrecimiento = [];

        for (let i=1; i<listaMedianaYears.length; i++){
            const salarioActual =listaMedianaYears[i];
            const salarioPasado = listaMedianaYears[i-1];
            const crecimiento = salarioActual - salarioPasado;
            const porcentajeCrecimiento = crecimiento / salarioPasado;
            porcentajesCrecimiento.push(porcentajeCrecimiento);
        }
        
        const medianaProcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length-1];
        const aumento =  ultimaMediana * medianaProcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;
        //console.log({nuevoSalario});
        return nuevaMediana;
    }
}

// Analisis general

function medianaGeneral() {
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));

    const mediana = PlatziMath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(
      persona => medianaPorPersona(persona.name)
    );
  
    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
    
    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;
    
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
  
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    return medianaTop10;
  }
