document.addEventListener("DOMContentLoaded", () => {
    renderizarTablaCarrito();
});

function renderizarTablaCarrito() {
    const contenedor = document.getElementById("items-carrito");
    const elementoTotal = document.getElementById("total-carrito");

    if (!contenedor) return;

    const carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];

    contenedor.innerHTML = "";
    let total = 0;

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
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>
                <div class="d-flex align-items-center gap-2">
                    <img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50" class="rounded object-fit-cover">
                    <span class="fw-semibold">${producto.nombre}</span>
                </div>
            </td>
            <td>$${producto.precio.toLocaleString('es-CL')}</td>
            <td class="text-center">
                <div class="btn-group btn-group-sm" role="group">
                    <button class="btn btn-outline-secondary" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span class="btn btn-light disabled px-3 text-dark fw-bold">${producto.cantidad}</span>
                    <button class="btn btn-outline-secondary" onclick="cambiarCantidad(${index}, 1)">+</button>
                </div>
            </td>
            <td class="fw-bold">$${subtotal.toLocaleString('es-CL')}</td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-danger" onclick="eliminarProducto(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
        contenedor.appendChild(fila);
    });

    if (elementoTotal) {
        elementoTotal.innerText = `$${total.toLocaleString('es-CL')}`;
    }
}

function cambiarCantidad(index, cambio) {
    let carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
    
    if (carritoStorage[index]) {
        carritoStorage[index].cantidad += cambio;

        if (carritoStorage[index].cantidad <= 0) {
            carritoStorage.splice(index, 1);
        }

        localStorage.setItem("CARRITO_DISQUERIA", JSON.stringify(carritoStorage));
        renderizarTablaCarrito();
        if (typeof actualizarContadorCarrito === 'function') {
            actualizarContadorCarrito();
        }
    }
}

function eliminarProducto(index) {
    let carritoStorage = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
    carritoStorage.splice(index, 1);
    localStorage.setItem("CARRITO_DISQUERIA", JSON.stringify(carritoStorage));
    renderizarTablaCarrito();
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
}

function vaciarCarrito() {
    localStorage.removeItem("CARRITO_DISQUERIA");
    renderizarTablaCarrito();
    if (typeof actualizarContadorCarrito === 'function') {
        actualizarContadorCarrito();
    }
}