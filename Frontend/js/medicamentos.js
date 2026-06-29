verificarAutenticacion();

verificarRol("administrador", "empleado");

const rol = localStorage.getItem("rol");

if (rol === "empleado") {

    document.getElementById("btnNuevoMedicamento").style.display = "none";

}