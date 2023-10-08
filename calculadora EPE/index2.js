const costo = 102;

const precioPorDistrito = {
    centro: 5.8,
    sur: 5.4,
    oeste: 5.35,
    norte: 5.6,
};

const iva = {
    industrial: 0.27,
    residencial: 0.21,
}

function calcularPrecio() {
    var consumoLectura = document.getElementById('consumo');
    var consumoValue = consumoLectura.value;
    var consumoNum = parseFloat(consumoValue);

    if (isNaN(consumoNum) || consumoNum <= 0) {
        alert("no ha ingresado un número válido");
        consumoLectura.value = ""
        return;
    }

    var seleccionTipoUsuario = document.querySelector('input[name="tipo-usuario"]:checked');


    if (!seleccionTipoUsuario) {
        alert("No ha seleccionado un tipo de usuario.");
        return;
    }

    var tipoIva = seleccionTipoUsuario.value;
    var tarifa = document.getElementById('seleccion-domicilio').value;

    if (tarifa in precioPorDistrito && tipoIva in iva) {
        var total = costo + (consumoNum * precioPorDistrito[tarifa]);
        var totalConIVA = total * (1 + iva[tipoIva]);

        alert("El costo total con IVA es: " + totalConIVA.toFixed(2)); // Display the total with two decimal places
    } else {
        alert("Error en los valores seleccionados.");
        return;
    }


}

