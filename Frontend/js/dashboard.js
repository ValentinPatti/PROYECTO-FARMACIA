verificarAutenticacion();
const botonLogout = document.getElementById("btnLogout")
botonLogout.addEventListener("click", cerrarSesion)

const rol = localStorage.getItem("rol");

//oculto opciones para el rol empleado
if (rol === "empleado") {

    document.getElementById("empleados").style.display = "none";
    document.getElementById("compras").style.display = "none";
    document.getElementById("proveedores").style.display = "none";

}