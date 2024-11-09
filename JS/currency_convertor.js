const button = document.getElementById('convert');
const amountInput = document.getElementById('amount');
const convertOutput = document.getElementById('current');
const from = document.getElementById('currencyF');
const to = document.getElementById('currencyT');

button.addEventListener('click', () => {
    const amount = amountInput.value;
    const curr = from.value;
    const currTo = to.value;
    let rate = 1;
    console.log(currTo)

    const data = fetch(`https://api.exchangerate-api.com/v4/latest/${curr}`);
    data.then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res.rates[currTo])
        rate = res.rates[currTo];
        let value = amount*rate;
        value = Math.round(value*100)/100;
        convertOutput.value = value;
    })
    .catch((err) => {
        console.log(err)
    })
})
