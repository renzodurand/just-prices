document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const tabla = document.getElementById('tablaProductos');
    const filas = tabla.getElementsByTagName('tr');

    buscador.addEventListener('keyup', () => {
        const filtro = buscador.value.toLowerCase();

        for (let i = 1; i < filas.length; i++) {
            // Verificamos si la fila es un encabezado de marca
            if (filas[i].classList.contains('marca-header')) {
                // Si el buscador está vacío, mostramos las marcas, si no, las ocultamos
                filas[i].style.display = filtro === "" ? "" : "none";
                continue; 
            }

            const celdaProducto = filas[i].getElementsByTagName('td')[0];
            if (celdaProducto) {
                const textoProducto = celdaProducto.textContent.toLowerCase();
                filas[i].style.display = textoProducto.includes(filtro) ? "" : "none";
            }
        }
    });
});