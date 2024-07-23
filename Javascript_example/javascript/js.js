const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const items = {
  1: { product_name: "Mezcla Original 200g", product_price: 500 },
  2: { product_name: "Mezcla Original 500g", product_price: 900 },
  3: { product_name: "Mezcla Especial 200g", product_price: 700 },
  4: { product_name: "Mezcla Especial 500g", product_price: 1200 },
};

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  
  let found = false;
  for (let i = 0; i < purchases.length; i++) {
    if (purchases[i].price === price) {
      purchases[i].number += number;
      found = true;
      break;
    }
  }
  
  if (!found) {
    purchases.push({ price: price, number: number });
  }
  
  window.alert(`${display()}\nSubtotal: ${subtotal()} yenes`);
}

function display() {
  let string = "Detalles del carro de compra:\n";
  for (let i = 0; i < purchases.length; i++) {
    const product = items[purchases[i].price];
    string += `${product.product_name} × ${purchases[i].number} - ${product.product_price}¥ por unidad\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += items[purchases[i].price].product_price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);

  window.alert(display() + `\nSubtotal: ${sum} yenes. \nGastos de envío: ${postage} yenes. \nImporte total: ${sum + postage} yenes`);
  
  purchases = [];
  priceElement.value = "0";
  numberElement.value = "1";
}

function calcPostageFromPurchase(sum) {
  if (sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}
