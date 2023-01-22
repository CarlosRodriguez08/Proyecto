function validateForm() {
  var materia = document.getElementById("materia1").value;
  var profesor = document.getElementById("profesor1").value;
  var carrera = document.getElementById("carrera1").value;
  var semestre = document.getElementById("semestre1").value;

  if (!materia && !profesor && !carrera && !semestre) {
    alert("Por favor llena al menos uno de los campos");
    return false;
  }

  var pattern = /\d/;
  if (pattern.test(materia) || pattern.test(profesor) || pattern.test(carrera)) {
    alert("No se permiten números en los campos de materia, profesor y carrera");
    return false;
  }
  
  return false;
}