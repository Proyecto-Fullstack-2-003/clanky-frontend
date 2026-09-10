function actualizarContadorCarrito() {
    const contador = document.querySelector("#cart-count");
    if (!contador) return;

    const carrito = JSON.parse(localStorage.getItem("carritoClanky")) || [];
    
    const total = carrito.reduce((acc, item) => acc + (Number(item.cantidad) || 1), 0);
    contador.textContent = total;
}

function cerrarSesion() {
    localStorage.removeItem("sesionClanky"); 
    const rutaBase = window.location.pathname.includes("coleccion") ? "../" : "./";
    window.location.href = rutaBase + "index.html";
}

function marcarPaginaActual() {
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";
    
    document.querySelectorAll(".navbar-nav .nav-link").forEach(enlace => {
        if (enlace.getAttribute("href").endsWith(paginaActual)) {
            enlace.classList.add("text-white"); 
            enlace.setAttribute("aria-current", "page");
        }
    });
}

function cargarNavbar() {
    const navbar = document.querySelector("#navbar");
    if (!navbar) return;

    const rutaBase = window.location.pathname.includes("coleccion") ? "../" : "./";
    
    const sesion = JSON.parse(localStorage.getItem("sesionClanky")); 
    const estaLogueado = sesion !== null;

    navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg nav-clanky">
            <div class="container-fluid px-4">
                <a class="navbar-brand d-flex align-items-center" href="index.html">
                    <img src="https://i.pinimg.com/736x/67/62/03/676203cc2d70b1ea218810abf0da6600.jpg" alt="Clanky Logo"
                        width="40" height="40" class="d-inline-block align-text-top me-2">
                    <span class="brand-text"></span>
                </a>                
                <a class="navbar-brand fs-3" href="${rutaBase}index.html">Clanky</a>
                
                <button class="navbar-toggler bg-light rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacion">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="menuNavegacion">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                        <li class="nav-item"><a class="nav-link" href="${rutaBase}index.html">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="${rutaBase}coleccion/vinilos.html">Vinilos</a></li>
                        <li class="nav-item"><a class="nav-link" href="${rutaBase}coleccion/cds.html">CDs</a></li>
                        <li class="nav-item"><a class="nav-link" href="${rutaBase}coleccion/merch.html">Merch</a></li>
                        <li class="nav-item"><a class="nav-link" href="${rutaBase}contacto.html">Contacto</a></li>
                    </ul>
                    
                    
                    <div class="d-flex gap-3 icon-links align-items-center mt-3 mt-lg-0">
                        <a href="${rutaBase}carrito.html" class="position-relative text-decoration-none">
                            <i class="bi bi-cart3 fs-4"></i>
                            <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark border border-warning">0</span>
                        </a>
                        
                        ${estaLogueado ? `
                            <div class="dropdown">
                                <a href="#" class="text-decoration-none dropdown-toggle" data-bs-toggle="dropdown">
                                    <i class="bi bi-person-circle fs-4 text-white"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end rounded-0 border-dark border-2">
                                    <li><button id="btnCerrarSesion" class="dropdown-item fw-bold text-danger">Cerrar Sesión</button></li>
                                </ul>
                            </div>
                        ` : `
                            <a href="${rutaBase}login.html" class="text-decoration-none">
                                <i class="bi bi-person-circle fs-4"></i>
                            </a>
                        `}
                    </div>
                </div>
            </div>
        </nav>
    `;

    marcarPaginaActual();
    actualizarContadorCarrito();

    const btnCerrar = document.querySelector("#btnCerrarSesion");
    if (btnCerrar) {
        btnCerrar.addEventListener("click", cerrarSesion);
    }
}

function cargarFooter() {
    const footer = document.querySelector("#footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="py-4 mt-5" style="background-color: #111; border-top: 4px solid #d12020;">
            <div class="container text-center text-white">
                <h4 class="fw-bold mb-3" style="color: #ffdd00;">Clanky Disquería</h4>
                <p class="mb-0 fw-semibold text-light">&copy; 2026 Todos los derechos reservados.</p>
            </div>
        </footer>
    `;
}

cargarNavbar();
cargarFooter();