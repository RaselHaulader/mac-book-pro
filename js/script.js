// set price of custom choice 
function setPrice(id, price) {
    document.getElementById(id).innerText = price;
    calculateTotal();
};
// calculate total price
function calculateTotal() {
    const prices = document.querySelectorAll('.price');
    let totalPrice = 0;
    for (const price of prices) {
        totalPrice += parseInt(price.innerText);
    };
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('last-total').innerText = totalPrice;
    discountMassage('block', 'none');
};
// discount with promo code
document.querySelector('.promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        const total = document.getElementById('total-price').innerText;
        const promoDiscount = parseInt(total) / 5;
        document.getElementById('last-total').innerText = parseInt(total) - promoDiscount;
        document.getElementById('promo-input').value = '';
        discountMassage('none', 'block');
        document.getElementById('discount-amount').innerText = promoDiscount;
    };
});
// promo discount massage show
function discountMassage(view1, view2) {
    document.getElementById('promo-container').style.display = view1;
    document.getElementById('congratulation').style.display = view2;
};