// Estado global del cupón de descuento
let descuentoAplicado = false;

// Función global para mostrar alertas dinámicas en el carrito
function mostrarAlerta(mensaje, tipo = "danger") {
    const contenedorMensaje = document.getElementById("mensaje-carrito");
    if (!contenedorMensaje) return;
    contenedorMensaje.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show py-2 small mb-3" role="alert">
            ${mensaje}
            <button type="button" class="btn-close py-2" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}

// Inicialización de eventos al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarTablaCarrito();

    const btnPagar = document.getElementById("btn-pagar");
    const btnCupon = document.getElementById("btn-cupon");
    const inputCupon = document.getElementById("cupon");

    // Evento para aplicar el cupón de descuento
    btnCupon?.addEventListener("click", () => {
        const codigo = inputCupon ? inputCupon.value.trim().toUpperCase() : "";

        if (!codigo) {
            mostrarAlerta("Por favor ingresa un código de cupón.", "warning");
            return;
        }

        if (descuentoAplicado) {
            mostrarAlerta("Ya has aplicado un cupón a esta compra.", "info");
            return;
        }

        const cuponesValidos = ["CLANKY10", "DISCO10"];

        if (cuponesValidos.includes(codigo)) {
            descuentoAplicado = true;
            renderizarTablaCarrito(); // Recalcula el total restando el 10%
            mostrarAlerta("¡Cupón del 10% aplicado con éxito!", "success");
        } else {
            mostrarAlerta("El cupón ingresado no es válido.", "danger");
        }
    });

    // Evento para procesar el pago
    btnPagar?.addEventListener("click", () => {
        const carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
        if (carritoStorage.length === 0) {
            mostrarAlerta("Tu carrito está vacío. Agrega productos antes de pagar.", "warning");
            return;
        }

        mostrarAlerta("¡Procesando compra! Redirigiendo a la pasarela de pago...", "success");
    });
});

// Renderiza los productos, el stock y calcula el subtotal/total
function renderizarTablaCarrito() {
    const contenedor = document.getElementById("items-carrito");
    const elementoTotal = document.getElementById("total-carrito");

    if (!contenedor) return;

    const carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];

    contenedor.innerHTML = "";
    let subtotalTotal = 0;

    if (carritoStorage.length === 0) {
        contenedor.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-4 text-muted">
                    El carrito está vacío. <a href="catalogo.html" class="text-danger fw-bold">Ir a comprar</a>
                </td>
            </tr>
        `;
        if (elementoTotal) elementoTotal.innerText = "$0";
        return;
    }

    carritoStorage.forEach((producto, index) => {
        // Consultar stock real disponible
        let stockDisponible = producto.stock;
        if (stockDisponible === undefined && typeof obtenerProductos === "function") {
            const listaProductos = obtenerProductos();
            const prodOriginal = listaProductos.find(p => p.id === producto.id || p.nombre === producto.nombre);
            if (prodOriginal && prodOriginal.stock !== undefined) {
                stockDisponible = prodOriginal.stock;
            }
        }

        const subtotal = producto.precio * producto.cantidad;
        subtotalTotal += subtotal;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>
                <div class="d-flex align-items-center gap-3">
                    <img src="${producto.imagen}" alt="${producto.nombre}" width="55" height="55" class="rounded object-fit-cover">
                    <div>
                        <div class="fw-semibold">${producto.nombre}</div>
                        ${producto.categoria ? `<div class="small text-muted">${producto.categoria}</div>` : ''}
                        <div class="small text-secondary fw-semibold">Stock: ${stockDisponible !== undefined ? stockDisponible : 'Disponible'}</div>
                    </div>
                </div>
            </td>
            <td class="align-middle">$${producto.precio.toLocaleString('es-CL')}</td>
            <td class="text-center align-middle">
                <div class="btn-group btn-group-sm" role="group">
                    <button class="btn btn-outline-secondary" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span class="btn btn-light disabled px-3 text-dark fw-bold">${producto.cantidad}</span>
                    <button class="btn btn-outline-secondary" onclick="cambiarCantidad(${index}, 1)">+</button>
                </div>
            </td>
            <td class="fw-bold align-middle">$${subtotal.toLocaleString('es-CL')}</td>
            <td class="text-center align-middle">
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        contenedor.appendChild(fila);
    });

    // Aplica el 10% de descuento si el cupón fue activado
    const totalFinal = descuentoAplicado ? Math.round(subtotalTotal * 0.90) : subtotalTotal;

    if (elementoTotal) {
        elementoTotal.innerText = `$${totalFinal.toLocaleString('es-CL')}`;
    }
}

// Cambia la cantidad evaluando el stock máximo antes de sumar
function cambiarCantidad(index, cambio) {
    let carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
    
    if (!carritoStorage[index]) return;

    const producto = carritoStorage[index];

    // Validar límite superior de Stock
    if (cambio > 0) {
        let stockMaximo = producto.stock;

        if (stockMaximo === undefined && typeof obtenerProductos === "function") {
            const listaProductos = obtenerProductos();
            const prodOriginal = listaProductos.find(p => p.id === producto.id || p.nombre === producto.nombre);
            if (prodOriginal && prodOriginal.stock !== undefined) {
                stockMaximo = prodOriginal.stock;
            }
        }

        if (stockMaximo !== undefined && (producto.cantidad + cambio) > stockMaximo) {
            mostrarAlerta(`Solo hay ${stockMaximo} unidades disponibles en stock para "${producto.nombre}".`, "warning");
            return;
        }
    }

    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
        carritoStorage.splice(index, 1);
    }

    localStorage.setItem("CARRITO_DISQUERIA", JSON.stringify(carritoStorage));
    renderizarTablaCarrito();

    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
}

// Elimina un producto individual del carrito
function eliminarProducto(index) {
    let carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
    carritoStorage.splice(index, 1);
    localStorage.setItem("CARRITO_DISQUERIA", JSON.stringify(carritoStorage));
    renderizarTablaCarrito();
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
}

// Vacía todo el carrito
function vaciarCarrito() {
    localStorage.removeItem("CARRITO_DISQUERIA");
    renderizarTablaCarrito();
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
}