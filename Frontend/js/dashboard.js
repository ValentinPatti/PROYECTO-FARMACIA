verificarAutenticacion();
const botonLogout = document.getElementById("btnLogout")
botonLogout.addEventListener("click", cerrarSesion)

const rol = localStorage.getItem("rol");
const nombre = localStorage.getItem("nombre")
const tituloSaludo = document.getElementById("saludoUsuario")
//oculto opciones para el rol empleado
if (rol === "empleado") {

    document.getElementById("empleados").style.display = "none";
    document.getElementById("compras").style.display = "none";
    document.getElementById("proveedores").style.display = "none";

}
//saludo personalizado
if (nombre) {
    tituloSaludo.textContent = `Hola, ${nombre}`
}