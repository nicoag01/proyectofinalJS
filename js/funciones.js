function mostrarResultados() {
    let mostrarNombres = document.getElementById("mostrar-nombres")
    let mostrarEdades = document.getElementById("mostrar-edades")
    let mostrarNotas = document.getElementById("mostrar-notas")

    mostrarNombres.innerHTML = "<h5>Nombre de los alumnos:</h5>"
    mostrarEdades.innerHTML = "<h5>Edad de los alumnos:</h5>"
    mostrarNotas.innerHTML = "<h5>Notas de los alumnos:</h5>"
  
    let alumnosAlmacenados = JSON.parse(sessionStorage.getItem("alumnos"))
    if (alumnosAlmacenados) {
      alumnosAlmacenados.forEach(function (alumno) {
        let nombreItem = document.createElement("p")
        nombreItem.textContent = alumno.nombre
        mostrarNombres.appendChild(nombreItem)
  
        let edadItem = document.createElement("p")
        edadItem.textContent = alumno.edad
        mostrarEdades.appendChild(edadItem)
  
        let notaItem = document.createElement("p")
        notaItem.textContent = alumno.calificacion
        mostrarNotas.appendChild(notaItem)
        })
    }
}

function calcularPromedios() {
    let suma = notas.reduce((total, elemento) => total + elemento, 0)
    let promedio = suma / notas.length
    localStorage.setItem("promedio", JSON.stringify(promedio))
}

function validarInputs(event) {
    event.preventDefault()
    
    let inputNombre = document.getElementById("input-nombre")
    let inputEdad = document.getElementById("input-edad")
    let inputCalificacion = document.getElementById("input-nota")
    
  let nombre = inputNombre.value
  let edad = parseInt(inputEdad.value)
  let calificacion = parseFloat(inputCalificacion.value)
  
  if( nombre !== "" && !isNaN(edad) && !isNaN(calificacion)){
      
      if (!isNaN(nombre)) {
          Toastify({
              text: "Error! Ingrese un nombre válido!!",
              duration: 3000,
              style: {
                  background: "linear-gradient(to right, #EF3E22, #EC2A0B)",
                }
            }).showToast();
            return
        }
        
        if (calificacion <= 10) {
            const nuevoAlumno = new Alumno(nombre, edad, calificacion)
            alumnos.push(nuevoAlumno)
            notas.push(calificacion)
            
            inputNombre.value = ""
            inputEdad.value = ""
            inputCalificacion.value = ""
            
            inputNombreError.innerHTML = ""
            inputEdadError.innerHTML = ""
            inputCalificacionError.innerHTML = ""
            
            sessionStorage.setItem("alumnos", JSON.stringify(alumnos))
            
            mostrarResultados()
        } else {
            Toastify({
                text: "Error! Ingrese una nota válida!!",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #EF3E22, #EC2A0B)",
                }
            }).showToast();
        }
        
    } else {
        if (nombre === "") {
            inputNombreError.innerHTML = "<p>Error! debe complete este campo correctamente</p>"
        } else {
            inputNombreError.innerHTML = ""
        }
        if (isNaN(edad)){
            inputEdadError.innerHTML = "<p>Error! debe complete este campo correctamente</p>"
        } else {
            inputEdadError.innerHTML = ""
        }
        if (isNaN(calificacion)){
            inputCalificacionError.innerHTML = "<p>Error! debe complete este campo correctamente</p>"
        } else {
            inputCalificacionError.innerHTML = ""
        }
    }
    
    calcularPromedios()
}

function eliminarStorage() {
    sessionStorage.clear()
    localStorage.clear()
    promedioGeneral.innerHTML = ""
    mostrarResultados()
}

function mostrarPromedios() {
    let promedioFinal = JSON.parse(localStorage.getItem("promedio"))
    promedioGeneral.innerHTML = "El promedio general de la clase es " + promedioFinal.toFixed(1)
}