
document.addEventListener("DOMContentLoaded", () => {

    const adminLogueado = localStorage.getItem("CLANKY_ADMIN_LOGUEADO") === "true";

    // Si no hay sesión de admin, se devuelve al login
    if (!adminLogueado) {
        window.location.href = "login.html";
        return;
    }

    const nombreSpan = document.getElementById("admin-nombre");
    if (nombreSpan) {
        nombreSpan.textContent = localStorage.getItem("CLANKY_ADMIN_USUARIO") || "Administrador";
    }

    const botonCerrarSesion = document.getElementById("btn-cerrar-sesion-admin");
    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener("click", () => {
            localStorage.removeItem("CLANKY_ADMIN_LOGUEADO");
            localStorage.removeItem("CLANKY_ADMIN_USUARIO");
            window.location.href = "index.html";
        });
    }
});
