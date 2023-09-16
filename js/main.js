class Alumno {
    constructor(nombre, edad, calificacion) {
      this.nombre = nombre
      this.edad = edad
      this.calificacion = calificacion
    }
}

const alumnos = []
const notas = []

let botonEnviar = document.getElementById("boton-enviar")
let botonEliminar = document.getElementById("boton-eliminar")
let botonPromedio = document.getElementById("boton-promedio")

let inputNombreError = document.getElementById("input-1_error")
let inputEdadError = document.getElementById("input-2_error")
let inputCalificacionError = document.getElementById("input-3_error")

let promedioGeneral = document.getElementById("promedio-general")

botonEnviar.addEventListener("click", validarInputs)
botonEliminar.addEventListener("click", eliminarStorage)
botonPromedio.addEventListener("click", mostrarPromedios)