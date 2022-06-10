let curso = 'Backend';
let listadoAlumnos = [];
let alumnosPorEgresar = [];
let alumnosEgresados = [];
let listadoProfesores = [];

class Persona{
    constructor(nombre, apellido, edad, curso){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
        this.contador = 0;
        this.titulo = '';
    }

    cumplirAños(){
        this.edad++;
    }

    incrementarContador(){
        this.contador++;
    }

    egresar(titulo){
        this.titulo = titulo;
    }

}

let persona1 = new Persona('Florencia', 'Perez', 22, 'Backend');
let persona2 = new Persona('Ricardo', 'Gonzalez', 25, 'Frontend');
let persona3 = new Persona('Juan', 'Perez', 23, 'Backend');
let persona4 = new Persona('Maria', 'Gonzalez', 24, 'Frontend');
let persona5 = new Persona('Emiliano', 'Perez', 25, 'Backend');
let persona6 = new Persona('Ariel', 'Santos', 26, 'Frontend');
let persona7 = new Persona('Michael', 'Viloria', 27, 'Backend');

listadoAlumnos.push(persona1);
listadoAlumnos.push(persona2);
listadoAlumnos.push(persona3);
listadoAlumnos.push(persona4);
listadoAlumnos.push(persona5);
listadoAlumnos.push(persona6);
listadoAlumnos.push(persona7);

alumnosPorEgresar.push(persona1);
alumnosPorEgresar.push(persona2);
alumnosPorEgresar.push(persona3);





function egresarAlumnos(lista){

    lista.forEach(alumno => {
    alumno.egresar('Egresado');
    alumnosEgresados.push(alumno);
})

}

// egresarAlumnos(alumnosPorEgresar);


// console.log(alumnosEgresados);



class Colegio{
    constructor(nombre, listadoAlumnos, listadoProfesores){
        this.nombre = nombre;
        this.listadoAlumnos = listadoAlumnos;
        this.listadoProfesores = listadoProfesores;
    }

    agregarAlumno(alumno){
        this.listadoAlumnos.push(alumno);
    }

    agregarProfesor(profe){
        this.listadoProfesores.push(profe);
    }
}

let profesor1 =  new Persona('Roberto', 'Profesor', 25, 'Matematicas');
let profesor2 =  new Persona('Liliana', 'Profesora', 25, 'Programacion');

listadoProfesores.push(profesor1);

listadoProfesores.push(profesor2);


let colegio = new Colegio('Colegio Copado', listadoAlumnos, listadoProfesores);

let nuevoAlumno = new Persona('Alumno', 'nuevo', 16, 'Programacion');
let nuevoProfe = new Persona('Profe', 'nuevo', 28, 'Matematicas');


colegio.agregarAlumno(nuevoAlumno);
colegio.agregarProfesor(nuevoProfe);


// console.log(colegio)



// addBook

class Usuario { 
    constructor(nombre){
        this.nombre = nombre
        this.libros = [];
    }

    addBook(nombre, autor){
        let libro = {};
        libro.nombre = nombre;
        libro.autor = autor;
        libro.loquequiera = 'lo que quise';
        this.libros.push(libro);
    }

}

let usuario = new Usuario('Juancito');
usuario.addBook('El señor de los anillos', 'J.R.R. Tolkien');

console.log(usuario);

