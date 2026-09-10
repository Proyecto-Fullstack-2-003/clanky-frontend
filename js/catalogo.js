const productosDisqueria = obtenerProductos();

const contenedor = document.querySelector("#contenedor-productos");

function renderProductos(lista) {
    if (!contenedor) return;

    const categoriaFiltro = (contenedor.dataset.categoria || "todos").toLowerCase().trim();

    let listaAfectada = [...lista];

    if (categoriaFiltro !== "todos") {
        listaAfectada = listaAfectada.filter(producto =>
            producto.formato.toLowerCase().trim() === categoriaFiltro
        );
    }
    
    const inputBusqueda = document.getElementById("input-busqueda");
    if (inputBusqueda) {
        // Pasamos el texto a minúsculas para que no importe cómo escriba el usuario
        const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
        if (textoBusqueda !== "") {
            listaAfectada = listaAfectada.filter(producto =>
                producto.nombre.toLowerCase().includes(textoBusqueda)
            );
        }
    }

    const selectorOrden = document.getElementById("orden-productos");
    if (selectorOrden) {
        const orden = selectorOrden.value;

        if (orden === "az") {
            listaAfectada.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (orden === "za") {
            listaAfectada.sort((a, b) => b.nombre.localeCompare(a.nombre));
        } else if (orden === "menor") {
            listaAfectada.sort((a, b) => a.precio - b.precio);
        } else if (orden === "mayor") {
            listaAfectada.sort((a, b) => b.precio - a.precio);
        }
    }

    contenedor.innerHTML = "";

    listaAfectada.forEach(producto => {
        let colorBadge = producto.formato.toLowerCase() === 'vinilo' ? 'bg-warning text-dark' : 'bg-danger text-white';

        contenedor.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3 mb-4">
                <article class="card h-100 shadow-sm border-0">
                    <img src="${producto.imagen}" class="card-img-top p-2" alt="${producto.nombre}">
                    <div class="card-body d-flex flex-column">
                        <span class="badge ${colorBadge} mb-2 w-auto align-self-start">${producto.formato}</span>
                        <h2 class="h5 fw-bold">${producto.nombre}</h2>
                        
                        <p class="fs-4 fw-bold mt-auto mb-3">$${producto.precio.toLocaleString("es-CL")}</p>
                        
                        <button class="btn btn-clanky w-100 btn-agregar" onclick="agregarAlCarrito('${producto.id}')" ${producto.stock === 0 ? "disabled" : ""}>
                            <i class="bi bi-cart-plus me-1"></i> ${producto.stock === 0 ? "Sin stock" : "Agregar al carrito"}
                        </button>
                    </div>
                </article>
            </div>
        `;
    });
}
renderProductos(productosDisqueria);