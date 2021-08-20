function elementsText(id) {
 return document.getElementById(id);
}

function setPrice(id, price) {
    elementsText(id).innerText = price
    calculateTotal()
};
calculateTotal()

function calculateTotal() {
    const prices = document.querySelectorAll('.price')
    let totalPrice = 0
    for (const price of prices) {
        totalPrice+= parseInt(price.innerText)
    }
    elementsText('total-price').innerText = totalPrice
    elementsText('last-total').innerText = totalPrice
}

document.querySelector('.promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input').value
    console.log(promoCode)
    if (promoCode == 'stevekaku') {
        const total = elementsText('total-price').innerText
        const promoDiscount = parseInt(total) / 5
        elementsText('last-total').innerText =  parseInt(total) - promoDiscount
        elementsText('promo-input').value = ''
    }
})
