// Protege admin.html: solo entra con sesión de admin activa
if (localStorage.getItem("CLANKY_ADMIN_LOGUEADO") !== "true") {
    window.location.href = "login.html";
}

// Elementos del DOM
const tablaProductos = document.querySelector("#tablaProductos");
const totalProductos = document.querySelector("#totalProductos");
const totalStock = document.querySelector("#totalStock");
const totalCategorias = document.querySelector("#totalCategorias");
const formularioProducto = document.querySelector("#formularioProducto");
const formProducto = document.querySelector("#formProducto");
const btnNuevoProducto = document.querySelector("#btnNuevoProducto");
const btnCancelar = document.querySelector("#btnCancelar");

let productoEditando = null;

// Renderizar tabla de productos
function renderTabla() {
    if (!tablaProductos) return;

    const productos = obtenerProductos();
    tablaProductos.innerHTML = "";

    if (productos.length === 0) {
        tablaProductos.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted py-4">No hay productos registrados.</td>
            </tr>
        `;
    }

    productos.forEach(producto => {
        tablaProductos.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <img src="${producto.imagen}" alt="${producto.nombre}" width="50" height="50"
                            class="rounded" style="object-fit: cover;">
                        <span>${producto.nombre}</span>
                    </div>
                </td>
                <td><span class="badge text-bg-secondary">${producto.formato}</span></td>
                <td>$${Number(producto.precio).toLocaleString("es-CL")}</td>
                <td>
                    <span class="badge ${Number(producto.stock) === 0 ? "text-bg-danger" : "text-bg-success"}">
                        ${producto.stock}
                    </span>
                </td>
                <td>
                    <div class="d-flex gap-2 flex-wrap">
                        <button type="button" class="btn btn-warning btn-sm btn-editar" data-id="${producto.id}">✏️ Editar</button>
                        <button type="button" class="btn btn-danger btn-sm btn-eliminar" data-id="${producto.id}">🗑️ Eliminar</button>
                    </div>
                </td>
            </tr>
        `;
    });

    actualizarResumen();
}

// Actualizar tarjetas de resumen
function actualizarResumen() {
    const productos = obtenerProductos();

    if (totalProductos) totalProductos.textContent = productos.length;

    const stock = productos.reduce((total, producto) => total + Number(producto.stock), 0);
    if (totalStock) totalStock.textContent = stock;

    const formatos = new Set(productos.map(producto => producto.formato));
    if (totalCategorias) totalCategorias.textContent = formatos.size;
}

// Mostrar / ocultar formulario
function mostrarFormulario() {
    if (formularioProducto) formularioProducto.classList.remove("d-none");
}

function ocultarFormulario() {
    if (!formularioProducto) return;

    formularioProducto.classList.add("d-none");
    if (formProducto) formProducto.reset();

    productoEditando = null;

    const titulo = formularioProducto.querySelector(".card-header h2");
    if (titulo) titulo.textContent = "Agregar producto";
}

// Botón "Nuevo producto"
if (btnNuevoProducto) {
    btnNuevoProducto.addEventListener("click", () => {
        productoEditando = null;
        if (formProducto) formProducto.reset();

        const titulo = formularioProducto.querySelector(".card-header h2");
        if (titulo) titulo.textContent = "Agregar producto";

        mostrarFormulario();
        formularioProducto.scrollIntoView({ behavior: "smooth" });
    });
}

// Botón "Cancelar"
if (btnCancelar) {
    btnCancelar.addEventListener("click", () => ocultarFormulario());
}

// Crear / actualizar producto
if (formProducto) {
    formProducto.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombre = document.querySelector("#nombreProducto").value.trim();
        const formato = document.querySelector("#formatoProducto").value;
        const precio = Number(document.querySelector("#precioProducto").value);
        const stock = Number(document.querySelector("#stockProducto").value);
        const imagen = document.querySelector("#imagenProducto").value.trim();

        if (!nombre) {
            alert("Debes ingresar un nombre.");
            return;
        }
        if (isNaN(precio) || precio < 0) {
            alert("El precio no es válido.");
            return;
        }
        if (isNaN(stock) || stock < 0) {
            alert("El stock no es válido.");
            return;
        }
        if (!imagen) {
            alert("Debes ingresar una URL de imagen.");
            return;
        }

        const productos = obtenerProductos();

        // Editar producto existente
        if (productoEditando !== null) {
            const indice = productos.findIndex(producto => producto.id === productoEditando);

            if (indice !== -1) {
                productos[indice] = { ...productos[indice], nombre, formato, precio, stock, imagen };
                guardarProductos(productos);
                alert("Producto actualizado correctamente.");
            }

        // Crear producto nuevo
        } else {
            let nuevoId = 1;
            if (productos.length > 0) {
                nuevoId = Math.max(...productos.map(producto => Number(producto.id))) + 1;
            }

            productos.push({ id: nuevoId, nombre, formato, precio, stock, imagen });
            guardarProductos(productos);
            alert("Producto agregado correctamente.");
        }

        ocultarFormulario();
        renderTabla();
    });
}

// Botones de editar / eliminar dentro de la tabla
if (tablaProductos) {
    tablaProductos.addEventListener("click", (evento) => {
        const botonEditar = evento.target.closest(".btn-editar");
        if (botonEditar) {
            editarProducto(Number(botonEditar.dataset.id));
            return;
        }

        const botonEliminar = evento.target.closest(".btn-eliminar");
        if (botonEliminar) {
            eliminarProducto(Number(botonEliminar.dataset.id));
        }
    });
}

// Cargar datos del producto en el formulario para editar
function editarProducto(id) {
    const productos = obtenerProductos();
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        alert("Producto no encontrado.");
        return;
    }

    productoEditando = id;

    document.querySelector("#nombreProducto").value = producto.nombre;
    document.querySelector("#formatoProducto").value = producto.formato;
    document.querySelector("#precioProducto").value = producto.precio;
    document.querySelector("#stockProducto").value = producto.stock;
    document.querySelector("#imagenProducto").value = producto.imagen;

    const titulo = formularioProducto.querySelector(".card-header h2");
    if (titulo) titulo.textContent = "Editar producto";

    mostrarFormulario();
    formularioProducto.scrollIntoView({ behavior: "smooth" });
}

// Eliminar producto (del catálogo y del carrito)
function eliminarProducto(id) {
    const productos = obtenerProductos();
    const producto = productos.find(producto => producto.id === id);

    if (!producto) {
        alert("Producto no encontrado.");
        return;
    }

    const confirmar = confirm(`¿Estás seguro de eliminar "${producto.nombre}"?`);
    if (!confirmar) return;

    guardarProductos(productos.filter(producto => producto.id !== id));

    const carrito = JSON.parse(localStorage.getItem("CARRITO_DISQUERIA")) || [];
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem("CARRITO_DISQUERIA", JSON.stringify(nuevoCarrito));

    renderTabla();
    alert("Producto eliminado correctamente.");
}

// Nombre del admin logueado + botón de cerrar sesión
document.addEventListener("DOMContentLoaded", () => {
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

// Iniciar
renderTabla();
