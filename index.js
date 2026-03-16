document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const tabla = document.getElementById('tablaProductos');
    const filas = tabla.getElementsByTagName('tr');

    buscador.addEventListener('keyup', () => {
        const filtro = buscador.value.toLowerCase().trim();

        // 1. Si el buscador está vacío, mostramos todo y salimos
        if (filtro === "") {
            for (let i = 0; i < filas.length; i++) {
                filas[i].style.display = "";
            }
            return;
        }

        // 2. Ocultamos todo primero para empezar de cero
        for (let i = 0; i < filas.length; i++) {
            filas[i].style.display = "none";
        }

        // 3. Buscamos coincidencias
        for (let i = 0; i < filas.length; i++) {
            // Saltamos los headers en la evaluación del texto
            if (filas[i].classList.contains('marca-header')) continue;

            const celdaProducto = filas[i].getElementsByTagName('td')[0];
            if (celdaProducto) {
                const textoProducto = celdaProducto.textContent.toLowerCase();

                if (textoProducto.includes(filtro)) {
                    // Si hay coincidencia, mostramos el producto
                    filas[i].style.display = "";

                    // RECORREMOS HACIA ARRIBA para encontrar su marca
                    for (let j = i - 1; j >= 0; j--) {
                        if (filas[j].classList.contains('marca-header')) {
                            filas[j].style.display = ""; // Mostramos la marca
                            break; // Salimos del bucle interno (ya encontramos su marca)
                        }
                    }
                }
            }
        }
    });
});