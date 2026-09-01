// Ejecutar actualización del contador al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorCarrito();
});

// Función global para agregar desde el botón
function agregarAlCarrito(idProducto) {
    let carritoActual = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];

    const productoEncontrado = productosDisqueria.find(p => p.id == idProducto);

    if (!productoEncontrado) return;

    const existe = carritoActual.find(item => item.id == idProducto);

    if (existe) {
        existe.cantidad += 1;
    } else {
        carritoActual.push({
            ...productoEncontrado,
            cantidad: 1
        });
    }

    localStorage.setItem("CARRITO_DISQUERIA", JSON.stringify(carritoActual));
    actualizarContadorCarrito();
    alert(`¡${productoEncontrado.nombre} agregado al carrito!`);
}

// Función global para refrescar el badge rojo de la navbar
function actualizarContadorCarrito() {
    const contadorBadge = document.getElementById("cart-count");
    if (contadorBadge) {
        const carritoActual = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
        const totalItems = carritoActual.reduce((acc, item) => acc + item.cantidad, 0);
        contadorBadge.innerText = totalItems;
    }
}