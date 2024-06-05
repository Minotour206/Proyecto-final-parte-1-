const imgCar = document.querySelector('#img-car');
const cart = document.querySelector('.cart');

imgCar.addEventListener('click', e => {
    cart.classList.toggle('show-cart');
});