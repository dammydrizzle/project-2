const btnElement = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totalSpan = document.getElementById("total")

function calculateTotal() {
    const billValue = billInput.Value
    const tipValue = tipInput.Value
    const totalValue = billValue *(1 + tipValue / 100)


}






btnElement.addEventListener('click', calculateTotal)