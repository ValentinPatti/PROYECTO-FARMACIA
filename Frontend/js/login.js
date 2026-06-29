const formulario = document.getElementById("formLogin");
const inputDni = document.getElementById("dni");
const inputContrasena = document.getElementById("contrasena");
const mensaje = document.getElementById("mensaje");
formulario.addEventListener("submit", iniciarSesion);
async function iniciarSesion(e) {
  e.preventDefault();
  mensaje.innerText = "";

  const dni = inputDni.value.trim();
  const contrasena = inputContrasena.value.trim();

  if (!dni || !contrasena) {
    mensaje.textContent = "Debe completar todos los campos";
    return;
  }

  try {
    // Envío la petición al backend

    const response = await API.post("/ingreso/login", {
      dni,
      contrasena
    });

    // Guardo el token

    localStorage.setItem("token", response.data.token);

    // guarda el rol si el backend lo devuelve

    if (response.data.rol) {
      localStorage.setItem("rol", response.data.rol);
    }

    localStorage.setItem("nombre", response.data.nombre)
    // Mensaje

    alert(response.data.message);

    // Redirecciono al dashboard

    window.location.href = "../pages/dashboard.html";
  } catch (error) {
    console.error(error);

    if (error.response) {
      mensaje.textContent = error.response.data.message;
    } else {
      mensaje.textContent = "No se pudo conectar con el servidor.";
    }
  }
}
