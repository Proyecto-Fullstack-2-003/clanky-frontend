// Base de datos local de productos
const productosDisqueria = [
    { id: "v-01", nombre: "LED ZEPPELIN - LED ZEPPELIN I", precio: 34990, imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_25344252822.jpg?114&t=1787841571" },
    { id: "v-02", nombre: "PINK FLOYD - DARK SIDE OF THE MOON", precio: 38990, imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_765254-28086564731.jpg?114&t=1787841571" },
    { id: "v-03", nombre: "THE BEATLES - ABBEY ROAD", precio: 32990, imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/396602-product-0-i_1000x1000_a933a5ee-6b0d-42ba-993a-3fccc1447a58_600x4611.jpg" },
    { id: "v-04", nombre: "QUEEN - A NIGHT AT THE OPERA", precio: 36990, imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_28025996652.jpg?114&t=1787841571" },
    { id: "v-05", nombre: "NIRVANA - NEVERMIND", precio: 34990, imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_37352204395.jpg?114&t=1787843382" },
    { id: "v-06", nombre: "AC/DC - BACK IN BLACK", precio: 31990, imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_3429978-25738132526.jpg?114&t=1787843414" }
];

// Ejecutar actualización del contador al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContadorCarrito();
});

// Función global para agregar desde el botón
function agregarAlCarrito(idProducto) {
    let carritoActual = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
    const productoEncontrado = productosDisqueria.find(p => p.id === idProducto);

    if (!productoEncontrado) return;

    const existe = carritoActual.find(item => item.id === idProducto);

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