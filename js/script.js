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
}

document.querySelector('.promo-btn').addEventListener('click', function () {
    console.log('click')
})
