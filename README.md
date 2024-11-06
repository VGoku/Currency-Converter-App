# Currency-Converter-App
Features:
Input fields for the amount to convert – A user inputs an amount in one currency.
Select currencies to convert between – Users can choose the source and target currencies.
Convert Button – When clicked, the app will display the converted amount.

How the App Works:
HTML provides a simple structure: an amount input, two dropdowns for selecting the source and target currencies, and a button to trigger the conversion.
CSS gives a minimal, clean design with hover effects and proper spacing.
JavaScript handles the core functionality:
It listens for a click event on the "Convert" button.
It takes the inputted amount, and the selected currencies, and uses a static object (exchange rates) to convert the amount.
The result is displayed in the #result span.
