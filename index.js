document.getElementById('convert-button').addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (fromCurrency === toCurrency) {
        alert("Please choose different currencies.");
        return;
    }

    // Example static conversion rates (real apps use APIs)
    const exchangeRates = {
        "USD": { "EUR": 0.93, "GBP": 0.82, "JPY": 130.27, "INR": 83.09 },
        "EUR": { "USD": 1.08, "GBP": 0.88, "JPY": 140.07, "INR": 89.38 },
        "GBP": { "USD": 1.22, "EUR": 1.14, "JPY": 159.54, "INR": 101.42 },
        "JPY": { "USD": 0.0077, "EUR": 0.0067, "GBP": 0.0063, "INR": 0.64 },
        "INR": { "USD": 0.012, "EUR": 0.011, "GBP": 0.0098, "JPY": 1.57 }
    };

    // Convert the amount
    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    // Display the result
    document.getElementById('result').textContent = `${convertedAmount.toFixed(2)} ${toCurrency}`;
}