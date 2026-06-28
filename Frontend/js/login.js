async function login() {

    const dni = document.getElementById("dni").value;
    const contrasena = document.getElementById("contrasena").value;
    const mensaje = document.getElementById("mensaje");

    mensaje.innerText = "";

    try {
        const res = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ dni, contrasena })
        });

        const data = await res.json();

        // 👇 SI HAY ERROR (404, 401, 400, etc)
        if (!res.ok) {
            mensaje.innerText = data.mensaje;
            return;
        }

        // LOGIN OK
        localStorage.setItem("usuario", JSON.stringify(data));

        if (data.rol === "Administrador") {
            window.location.href = "pages/administrador.html";
        } else {
            window.location.href = "pages/empleado.html";
        }

    } catch (error) {
        console.error(error);
        mensaje.innerText = "Error de conexión con el servidor";
    }
}