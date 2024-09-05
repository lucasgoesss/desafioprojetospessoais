// Espera o DOM carregar completamente antes de manipular os elementos
document.addEventListener('DOMContentLoaded', () => {
    // Variáveis para controle de quantidade
    let quantity = 2;
    const pricePerItem = 12.15;  // Definimos um valor para cada item
    const quantityDisplay = document.querySelector('.quantity');
    const decreaseButton = document.querySelector('.decrease');
    const increaseButton = document.querySelector('.increase');
    const totalDisplay = document.querySelector('h3 span');

    // Atualiza o total de acordo com a quantidade
    function updateTotal() {
        const total = (pricePerItem * quantity).toFixed(2);
        totalDisplay.textContent = `$${total}`;
    }

    // Inicializa com o valor padrão
    quantityDisplay.textContent = quantity;
    updateTotal();

    // Diminui a quantidade
    decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
            updateTotal();
        }
    });

    // Aumenta a quantidade
    increaseButton.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
        updateTotal();
    });
});