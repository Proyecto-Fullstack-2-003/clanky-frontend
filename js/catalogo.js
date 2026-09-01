const productosDisqueria = [
    {
        id: 1,
        nombre: "PINK FLOYD - DARK SIDE OF THE MOON",
        formato: "Vinilo",
        precio: 34990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/49/86/18/49861852-877b-0992-fa27-58b25fa032b5/196589805232.jpg/316x316bf.webp"
    },
    {
        id: 2,
        nombre: "The Beatles – Abbey Road",
        formato: "Vinilo",
        precio: 32990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/df/db/61/dfdb615d-47f8-06e9-9533-b96daccc029f/18UMGIM31076.rgb.jpg/316x316bf.webp"
    },
    {
        id: 3,
        nombre: "Nirvana – Nevermind",
        formato: "Vinilo",
        precio: 32990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/fd/b9/95fdb9b2-6d2b-92a6-97f2-51c1a6d77f1a/00602527874609.rgb.jpg/316x316bf.webp"
    },

    {
        id: 4,
        nombre: "Arctic Monkeys – AM",
        formato: "Vinilo",
        precio: 34990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/69/9c/b5/699cb5d6-115c-ff73-9d26-e57ea4350d72/887828031795.png/316x316bf.webp"
    },
    {
        id: 5,
        nombre: "Radiohead – OK Computer",
        formato: "Vinilo",
        precio: 36990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/07/60/ba/0760ba0f-148c-b18f-d0ff-169ee96f3af5/634904078164.png/316x316bf.webp"
    },
    {
        id: 6,
        nombre: "Taylor Swift – Midnights",
        formato: "Vinilo",
        precio: 39990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3d/01/f2/3d01f2e5-5a08-835f-3d30-d031720b2b80/22UM1IM07364.rgb.jpg/316x316bf.webp"
    },
    {
        id: 7,
        nombre: "Billie Eilish – Happier Than Ever",
        formato: "Vinilo",
        precio: 39990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2d/f3/c9/2df3c9fd-e0eb-257c-c035-b04f05a66580/21UMGIM36691.rgb.jpg/316x316bf.webp"
    },
    {
        id: 8,
        nombre: "Lana Del Rey – Born to Die",
        formato: "Vinilo",
        precio: 34990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/59/10/66/591066ea-3c85-3dfe-ef82-ffdbbcdfc8b9/12UMGIM00033.rgb.jpg/316x316bf.webp"
    },
    {
        id: 9,
        nombre: "Daft Punk – Random Access Memories",
        formato: "Vinilo",
        precio: 49990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/316x316bf.webp"
    },
    {
        id: 10,
        nombre: "The Weeknd – After Hours",
        formato: "Vinilo",
        precio: 39990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/316x316bf.webp"
    },
    {
        id: 11,
        nombre: "Michael Jackson – Thriller",
        formato: "Vinilo",
        precio: 29990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/316x316bf.webp"
    },
    {
        id: 12,
        nombre: "Queen – Greatest Hits",
        formato: "Vinilo",
        precio: 34990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b0/ca/05/b0ca05aa-29c9-4e01-5a16-f6fa06bce05c/602527594347.jpg/316x316bf.webp"
    },
    {
        id: 13,
        nombre: "Twenty One Pilots – Blurryface",
        formato: "Vinilo",
        precio: 49990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8e/e2/89/8ee28904-0821-610d-5011-a61845f62756/075679926951.jpg/316x316bf.webp"
    },
    {
        id: 14,
        nombre: "Metallica – Master of Puppets",
        formato: "Vinilo",
        precio: 39990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/82/9a/c0/829ac046-9ef9-b027-3257-c2ed6a515707/17UM1IM18688.rgb.jpg/316x316bf.webp"
    },
    {
        id: 15,
        nombre: "Green Day – American Idiot",
        formato: "Vinilo",
        precio: 32990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0e/17/f0/0e17f011-aadf-d4d1-1c7e-b61ce39f968b/093624947301.jpg/316x316bf.webp"
    },
    {
        id: 16,
        nombre: "Coldplay – Parachutes",
        formato: "Vinilo",
        precio: 29990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f5/93/8c/f5938c49-964c-31d1-4b33-78b634f71fb7/190295978075.jpg/316x316bf.webp"
    },
    {
        id: 17,
        nombre: "Bruno Mars & Anderson .Paak – An Evening With Silk Sonic",
        formato: "Vinilo",
        precio: 23990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4e/b2/25/4eb22575-99e3-8c06-7446-51a99add8b0f/075679754585.jpg/316x316bf.webp"
    },
    {
        id: 18,
        nombre: "Olivia Rodrigo – you seem pretty sad for a girl so in love",
        formato: "Vinilo",
        precio: 32990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/1d/1b/f9/1d1bf9b1-44c6-9a6c-6ffb-c158488c06ce/26UMGIM39303.rgb.jpg/316x316bf.webp"
    },
    {
        id: 19,
        nombre: "Madonna – The Immaculate Collection",
        formato: "Vinilo",
        precio: 48990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/32/fd/6e/32fd6e25-da2b-10e9-df38-2923c01b6c9b/dj.jaxugjvp.jpg/316x316bf.webp"
    },
    {
        id: 20,
        nombre: "Dua Lipa – Dua Lipa",
        formato: "Vinilo",
        precio: 18900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/94/fc/6d/94fc6d23-7257-8fe3-fa19-fdcc22e90856/190295559472.jpg/316x316bf.webp"
    },
    {
        id: 21,
        nombre: "Muse – Origin of Symmetry",
        formato: "Vinilo",
        precio: 44900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0c/c8/0b/0cc80b73-aa09-492d-4fcc-984cab29acfa/825646096909.jpg/316x316bf.webp"
    },
    {
        id: 22,
        nombre: "Los Prisioneros – Estadio Nacional Vol. 1",
        formato: "Vinilo",
        precio: 53000,
        imagen: "https://i.discogs.com/XlawoFVR7EMlbOiR9TV4rtOiJd55ZQ_76cdQ3YpzZNk/rs:fit/g:sm/q:90/h:460/w:460/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjcw/MzQyLTE1MTMxMTU3/NDQtMjAzOC5qcGVn.jpeg"
    },
    {
        id: 23,
        nombre: "Los Bunkers – La Velocidad de la Luz",
        formato: "Vinilo",
        precio: 30000,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/03/ce/46/03ce4676-1cb5-be08-fb5a-d5d019d414f9/192562626160.jpg/316x316bf.webp"
    },
    {
        id: 24,
        nombre: "Chico Trujillo – Mambo Mundial",
        formato: "Vinilo",
        precio: 30000,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/c7/ed/86/c7ed8601-9bc0-ca6b-4be1-c597f3688a57/199538043075.jpg/316x316bf.webp"
    },
    {
        id: 25,
        nombre: "My Chemical Romance – The Black Parade",
        formato: "Vinilo",
        precio: 39990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/56/99/8a/56998a1c-efe7-fdf0-2b1d-e2da88d8df52/093624917724.jpg/316x316bf.webp"
    },
    {
        id: 26,
        nombre: "My Chemical Romance – Three Cheers for Sweet Revenge",
        formato: "CD",
        precio: 39990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/42/58/f7/4258f7bb-eb5b-62b8-573d-6200df0fe3e1/093624917731.jpg/316x316bf.webp"
    },
    {
        id: 27,
        nombre: "Harry Styles – Harry's House",
        formato: "CD",
        precio: 12900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/316x316bf.webp"
    },
    {
        id: 28,
        nombre: "Arctic Monkeys – The Car",
        formato: "CD",
        precio: 20900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/8e/cf/448ecfff-7f7d-286c-8a4a-b631eeeefedb/887828045563.png/316x316bf.webp"
    },
    {
        id: 29,
        nombre: "Mac Miller – The Divine Feminine",
        formato: "CD",
        precio: 19990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/33/cc/4d/33cc4d85-e92a-b171-1b72-4dc882ce2359/093624918844.jpg/316x316bf.webp"
    },
    {
        id: 30,
        nombre: "Mac Miller - Circles",
        formato: "CD",
        precio: 19990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/23/39/38/23393826-762f-ec76-dc1e-9344f647c958/093624905981.jpg/316x316bf.webp"
    },
    {
        id: 31,
        nombre: "Slipknot – Slipknot",
        formato: "CD",
        precio: 12900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/e3/a3/c2e3a370-175c-d67e-7a57-fdb3e1cfc959/016861752507.jpg/316x316bf.webp"
    },
    {
        id: 32,
        nombre: "Air – Moon Safari",
        formato: "CD",
        precio: 8900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/ed/cf/a2/edcfa2bc-4a9a-75f6-80b5-6576d826742c/dj.romspvqk.jpg/316x316bf.webp"
    },
    {
        id: 33,
        nombre: "Tyler, The Creator - IGOR",
        formato: "CD",
        precio: 13900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/0c/06/05/0c060581-6242-6a2a-a677-20170f2cf8da/886447710180.jpg/316x316bf.webp"
    },
    {
        id: 34,
        nombre: "Billie Eilish - HIT ME HARD AND SOFT",
        formato: "CD",
        precio: 18900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/316x316bf.webp"
    },
    {
        id: 35,
        nombre: "The Weeknd - Starboy",
        formato: "CD",
        precio: 12900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/316x316bf.webp"
    },
    {
        id: 36,
        nombre: "Frank Ocean - Blonde",
        formato: "CD",
        precio: 14900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/316x316bf.webp"
    },
    {
        id: 37,
        nombre: "Kendrick Lamar - DAMN.",
        formato: "CD",
        precio: 13990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/86/c9/bb/86c9bb30-fe3d-442e-33c1-c106c4d23705/17UMGIM88776.rgb.jpg/316x316bf.webp"
    },
    {
        id: 38,
        nombre: "Eminem - The Eminem Show",
        formato: "CD",
        precio: 9990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/dd/5c/e6/dd5ce621-f7d2-f767-7a08-e7a7eaa7870b/00602537526994.rgb.jpg/316x316bf.webp"
    },
    {
        id: 39,
        nombre: "Linkin Park - Hybrid Theory",
        formato: "CD",
        precio: 10990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/f0/31/b2/f031b2b2-bcf0-6102-426f-e0b2c7437415/dj.vrgpwamf.jpg/316x316bf.webp"
    },
    {
        id: 40,
        nombre: "The Strokes - Is This It",
        formato: "CD",
        precio: 9990,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/cf/18/7b/cf187bcd-029d-5167-bab6-87219f32d95a/078636804521.jpg/316x316bf.webp"
    },
    {
        id: 41,
        nombre: "The Smiths - The Queen Is Dead",
        formato: "CD",
        precio: 10900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1a/e8/70/1ae870c3-b402-096b-c4c4-8022af5a2ed9/745099189662.jpg/316x316bf.webp"
    },
    {
        id: 42,
        nombre: "Olivia Rodrigo - SOUR",
        formato: "CD",
        precio: 15900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ce/63/06/ce6306bb-5830-af8f-8ebd-4eb7d3c14e1e/21UMGIM26092.rgb.jpg/316x316bf.webp"
    },
    {
        id: 43,
        nombre: "Twenty One Pilots - Trench",
        formato: "CD",
        precio: 20900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a3/c0/2b/a3c02b76-baa1-e575-dcba-247509200424/075679864789.jpg/316x316bf.webp"
    },
    {
        id: 44,
        nombre: "Paramore - This Is Why",
        formato: "CD",
        precio: 19900,
        imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/21/de/99/21de99a3-6eb6-5372-6a96-40d992808d9c/075679716224.jpg/316x316bf.webp"
    },
    {
        id: 45,
        nombre: "Paramore - Paramore",
        formato: "CD",
        precio: 10900,
        imagen: "https://dojiw2m9tvv09.cloudfront.net/41657/product/X_21245907466.jpg?114&t=1788215400"
    },
    {
        id: 46,
        nombre: "Puffle Celeste",
        formato: "Merch",
        precio: 5900,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rlbsRFED5Td0dJ88hIIsNLEbQsYyuMNSEsTk06yeOQ&s=10"
    },
    {
        id: 47,
        nombre: "Puffle Rojo",
        formato: "Merch",
        precio: 5900,
        imagen: "https://static.wikia.nocookie.net/iclubpenguinofficial/images/8/8c/Red_Puffle.png/revision/latest?cb=20180215192259"
    },
    {
        id: 48,
        nombre: "Puffle Verde",
        formato: "Merch",
        precio: 5900,
        imagen: "https://static.wikia.nocookie.net/iclubpenguinofficial/images/1/1b/Green_Puffle.png/revision/latest?cb=20180215192955"
    },
    {
        id: 49,
        nombre: "Puffle Amarillo",
        formato: "Merch",
        precio: 5900,
        imagen: "https://static.wikia.nocookie.net/iclubpenguinofficial/images/9/97/Yellow_Puffle.png/revision/latest/scale-to-width-down/1000?cb=20180212230559"
    },
    {
        id: 50,
        nombre: "Puffle Morado",
        formato: "Merch",
        precio: 5900,
        imagen: "https://static.wikia.nocookie.net/iclubpenguinofficial/images/7/75/Purple_Puffle.png/revision/latest/scale-to-width-down/1000?cb=20180215192943"
    }

];

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
                        
                        <button class="btn btn-clanky w-100 btn-agregar" onclick="agregarAlCarrito('${producto.id}')">
                            <i class="bi bi-cart-plus me-1"></i> Agregar al carrito
                        </button>
                    </div>
                </article>
            </div>
        `;
    });
}
renderProductos(productosDisqueria);