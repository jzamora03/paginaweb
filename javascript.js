function addToCart(productId) {
    const product = document.getElementById(productId);
    const productInfo = {
        id: productId,
        name: product.querySelector('h3').innerText,
        price: parseFloat(product.querySelector('.price').innerText.replace('$', '')),
        image: product.querySelector('img').src
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productInfo);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartItemCount();

    const addButton = product.querySelector('.add-to-cart');
    addButton.innerText = 'Agregado';
    addButton.disabled = true;
}

function updateCartItemCount() {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const cartItemCount = cartItems ? cartItems.length : 0;
    document.getElementById('cart-item-count').innerText = cartItemCount;
}

window.onload = function() {
    localStorage.setItem('cart', JSON.stringify([])); // Reiniciar el carrito al cargar la página
    updateCartItemCount();
};
