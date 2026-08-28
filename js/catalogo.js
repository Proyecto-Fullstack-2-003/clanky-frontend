const productos = [
    {
        id: 1,
        nombre: "VINILO LED ZEPPELIN I",
        formato: "Vinilo",
        precio: 34990,
        imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_25344252822.jpg?114&t=1787841571"
    },
    {
        id: 2, 
        nombre: "",
        formato: "",
        precio: 0,
        imagen: ""
    },

];

function cargarCatalogo() {
    const contenedor = document.getElementById("contenedor-productos");
    let htmlTarjetas = "";
    productos.forEach(producto => {
        let colorBadge = producto.formato.toLowerCase() === 'vinilo' ? 'bg-warning text-dark' : 'bg-danger text-white';

        htmlTarjetas += `
            <div class="col">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${producto.imagen}" class="card-img-top p-2" alt="${producto.nombre}">
                    <div class="card-body d-flex flex-column">
                        <span class="badge ${colorBadge} mb-2 w-auto align-self-start">${producto.formato}</span>
                        <h5 class="card-title fw-bold">${producto.nombre}</h5>
                        <div class="mt-auto">
                            <!-- toLocaleString('es-CL') agrega el punto de miles al precio -->
                            <h4 class="fw-bold mb-3">$${producto.precio.toLocaleString('es-CL')}</h4>
                            <button class="btn btn-clanky w-100">
                                <i class="bi bi-cart-plus me-1"></i> Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    contenedor.innerHTML = htmlTarjetas;
}

document.addEventListener("DOMContentLoaded", cargarCatalogo);