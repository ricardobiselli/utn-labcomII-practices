const cotizacionMonedas = {
    usd: 850,
    eur:370,
};

function calcularConversion(){
    const cantidadArs = document.getElementById('pesos');
    const cantidadArsValue = cantidadArs.value;
    const cantidadArsValueNum = parseFloat(cantidadArsValue);

    if (isNaN(cantidadArsValueNum) || cantidadArsValue <= 0 ) {
        alert("no ha ingresado una cantidad válida");
        return;
    }

    const monedaDestino = document.getElementById('selector-monedas').value;
    if (monedaDestino in cotizacionMonedas) {
        var conversion = (cantidadArsValueNum /cotizacionMonedas[monedaDestino]).toFixed(4); //toFixed(4) necesario para mostrar conversiones de bajo monton en ARS
        document.getElementById('resultado-final').innerHTML = conversion;
    }
}