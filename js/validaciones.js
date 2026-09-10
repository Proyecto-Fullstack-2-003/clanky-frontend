
// Credenciales del administrador 
const ADMIN_USUARIO = "admin";
const ADMIN_PASSWORD = "1234";

document.addEventListener("DOMContentLoaded", () => {
    inicializarTogglePassword();
    inicializarValidacionEnVivo("cliente-password", "cliente-password-checklist");
    inicializarFormularioCliente();
    inicializarFormularioAdmin();
});


// Mostrar / ocultar contraseña
function inicializarTogglePassword() {
    document.querySelectorAll(".toggle-password").forEach((boton) => {
        boton.addEventListener("click", () => {
            const idCampo = boton.getAttribute("data-target");
            const campo = document.getElementById(idCampo);
            const icono = boton.querySelector("i");

            if (campo.type === "password") {
                campo.type = "text";
                icono.classList.remove("bi-eye");
                icono.classList.add("bi-eye-slash");
            } else {
                campo.type = "password";
                icono.classList.remove("bi-eye-slash");
                icono.classList.add("bi-eye");
            }
        });
    });
}


function evaluarReglasPassword(valor) {
    return {
        length: valor.length >= 8,
        mayuscula: /[A-Z]/.test(valor),
        minuscula: /[a-z]/.test(valor),
        numero: /[0-9]/.test(valor),
        especial: /[^A-Za-z0-9]/.test(valor)
    };
}

function passwordEsValida(valor) {
    const reglas = evaluarReglasPassword(valor);
    return Object.values(reglas).every(Boolean);
}

// Activa la validación en vivo mientras el usuario escribe la contraseña
function inicializarValidacionEnVivo(idCampoPassword, idChecklist) {
    const campoPassword = document.getElementById(idCampoPassword);
    const checklist = document.getElementById(idChecklist);

    if (!campoPassword || !checklist) return;

    campoPassword.addEventListener("input", () => {
        const reglas = evaluarReglasPassword(campoPassword.value);
        actualizarChecklist(checklist, reglas);
    });

    // Al perder el foco, si quedó vacío, reseteamos la vista del checklist
    campoPassword.addEventListener("blur", () => {
        if (campoPassword.value.length === 0) {
            actualizarChecklist(checklist, evaluarReglasPassword(""));
        }
    });
}

function actualizarChecklist(checklist, reglas) {
    Object.keys(reglas).forEach((nombreRegla) => {
        const item = checklist.querySelector(`[data-rule="${nombreRegla}"]`);
        if (!item) return;

        const icono = item.querySelector("i");
        const cumple = reglas[nombreRegla];

        item.classList.toggle("regla-cumplida", cumple);
        item.classList.toggle("regla-pendiente", !cumple);

        icono.classList.remove("bi-circle", "bi-check-circle-fill", "bi-x-circle-fill");
        icono.classList.add(cumple ? "bi-check-circle-fill" : "bi-circle");
    });
}


function inicializarFormularioCliente() {
    const form = document.getElementById("form-login-cliente");
    if (!form) return;

    const campoEmail = document.getElementById("cliente-email");
    const campoPassword = document.getElementById("cliente-password");
    const divError = document.getElementById("cliente-login-error");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        ocultarError(divError);

        const email = campoEmail.value.trim();
        const password = campoPassword.value;

        if (!validarEmail(email)) {
            mostrarError(divError, "Ingresa un correo electrónico válido.");
            campoEmail.focus();
            return;
        }

        if (!passwordEsValida(password)) {
            mostrarError(divError, "La contraseña no cumple con todos los requisitos.");
            return;
        }

        
        iniciarSesion({ tipo: "cliente", email: email });
        window.location.href = "index.html";
    });
}


function inicializarFormularioAdmin() {
    const formulario = document.getElementById("formLoginAdmin");
    if (!formulario) return;

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const usuario = document.getElementById("admin-usuario").value.trim();
        const password = document.getElementById("admin-password").value;
        const mensaje = document.getElementById("mensajeLoginAdmin");

        if (usuario === ADMIN_USUARIO && password === ADMIN_PASSWORD) {

            // Guardar sesión de administrador
            localStorage.setItem("CLANKY_ADMIN_LOGUEADO", "true");
            localStorage.setItem("CLANKY_ADMIN_USUARIO", usuario);

            mensaje.innerHTML = `
                <div class="alert alert-success py-2 small mb-0">
                    Inicio de sesión exitoso.
                </div>
            `;

            setTimeout(() => {
                window.location.href = "admin.html";
            }, 800);

        } else {

            mensaje.innerHTML = `
                <div class="alert alert-danger py-2 small mb-0">
                    Usuario o contraseña incorrectos.
                </div>
            `;
        }
    });
}


function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

function mostrarError(divError, mensaje) {
    if (!divError) return;
    divError.textContent = mensaje;
    divError.classList.remove("d-none");
}

function ocultarError(divError) {
    if (!divError) return;
    divError.classList.add("d-none");
    divError.textContent = "";
}

function iniciarSesion(datosSesion) {
    localStorage.setItem("SESION_CLANKY", JSON.stringify(datosSesion));
}

<!-- Validación contacto -->

const formulario = document.getElementById("formContacto");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const mensajeContacto = document.getElementById("mensajeContacto");

// Expresiones regulares del profesor
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexAsunto = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ0-9\s.,!?¿¡'-]{5,100}$/;
const regexMensaje = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ0-9\s.,!?¿¡'"\-():;]{10,500}$/;

function estadoCampo(campo, esValido, errorElemento, textoError = "") {
    campo.classList.remove("is-valid", "is-invalid");
    campo.classList.add(esValido ? "is-valid" : "is-invalid");
    errorElemento.textContent = esValido ? "" : textoError;
    return esValido;
}

function validarEmail() {
    const valor = email.value.trim();
    return estadoCampo(email, regexEmail.test(valor), document.getElementById("errorEmail"), "Ingresa un correo electrónico válido.");
}

function validarAsunto() {
    const valor = asunto.value.trim();
    const valido = regexAsunto.test(valor) && valor.length >= 5 && valor.length <= 100;
    return estadoCampo(asunto, valido, document.getElementById("errorAsunto"), "El asunto debe tener entre 5 y 100 caracteres válidos.");
}

function validarMensaje() {
    const valor = mensaje.value.trim();
    const valido = regexMensaje.test(valor) && valor.length >= 10 && valor.length <= 500;
    return estadoCampo(mensaje, valido, document.getElementById("errorMensaje"), "El mensaje debe tener entre 10 y 500 caracteres válidos.");
}

function mostrarAlertaContacto(texto, tipo = "success") {
    if (!mensajeContacto) return;
    mensajeContacto.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show fw-bold" role="alert">
            ${texto}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>`;
}

if (formulario) {
    formulario.addEventListener("submit", event => {
        event.preventDefault();
        if (validarEmail() && validarAsunto() && validarMensaje()) {
            mostrarAlertaContacto("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
            formulario.reset();
            [email, asunto, mensaje].forEach(campo => campo.classList.remove("is-valid", "is-invalid"));
        }
    });

    email.addEventListener("input", validarEmail);
    asunto.addEventListener("input", validarAsunto);
    mensaje.addEventListener("input", validarMensaje);
}