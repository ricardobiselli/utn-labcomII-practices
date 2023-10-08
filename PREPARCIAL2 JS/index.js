const colorToImage = {
    grafito: 'grafitoiphone.jpeg',
    sierra: 'sierraiphone.jpg',
    silver: 'silveriphone.jpeg',
    gold: 'goldiphone.jpeg',
};


function changeProductImage() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedColor = colorSelect.value;

    const logo = document.getElementById('logo');
    if (selectedColor in colorToImage) {
        logo.src = `img/${colorToImage[selectedColor]}`;
    } else {
        logo.src = 'img/iphones.jpg';
    }
}

const priceToQuantity = {
    128: 150000,
    256: 165000,
    512: 180000,
    
};

function calculatePrice(){
    const capacitySelect = document.getElementById('capacity');
    const selectedCapacity = capacitySelect.value;
    const quantity = document.getElementById('cantidad');
    const selectedQuantity = quantity.value;

    if (selectedCapacity in priceToQuantity) {
        const price = selectedQuantity * priceToQuantity[selectedCapacity];
        result.textContent = `Precio: $${price.toFixed(2)}`; 
        if (price==0) {
            result.textContent = "ERROR, no ha ingresando una cantidad válida";
        }
    }
    
}