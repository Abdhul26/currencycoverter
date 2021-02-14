const rating = document.getElementById("rate");
const exchangeValue = document.getElementById("exchange");
const currency1 = document.getElementById("from");
const currency2 = document.getElementById("to");
const outputOne = document.getElementById("output1")
const outputTwo = document.getElementById("output2")

currency1.addEventListener("change",calculate)
currency2.addEventListener("change", calculate)
output1.addEventListener("input", calculate)
output2.addEventListener("input",calculate)

exchange.addEventListener('click', () => {
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();
});

function calculate() {
    const from = currency1.value;
    const to = currency2.value;

fetch(`https://api.exchangeratesapi.io/latest/`)
        .then(res => res.json())
    .then(res => {
        const rate = res.rates[to];
        outputTwo.value = (outputOne.value * rate).toFixed(2);
    })

    
}
calculate();