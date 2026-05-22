let groceryElementIds = ['grocery1', 'grocery2', 'grocery3', 'grocery4', 'grocery5'];

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < groceryElementIds.length; i++) {
    let itemPrice = parseFloat(document.getElementById(groceryElementIds[i]).value);
    if (!isNaN(itemPrice)) {
      total += itemPrice;
    }
  }
  document.getElementById('result').innerText = `The total amount is: $${total.toFixed(2)}`;
}