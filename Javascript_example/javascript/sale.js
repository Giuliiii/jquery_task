const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];
let items = ["Mezcla Original 200g","Mezcla Original 500g","Mezcla Especial 200g","Mezcla Especial 500g"];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  }
  for(let i=0; i<=purchases.length; i++){
    if(purchases.length < 1 || purchases[i].price !== purchase.price){
      purchases.push(purchase);
    } else {
      purchases[i].number += purchase.number;
    }
  }
    window.alert(`${display()}\nsubtotal${subtotal()}円`);
}
 
function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].price}El círculo es.${purchases[i].number}punto\n`;
  }
  return string
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`Subtotal es: ${sum}¥, los gastos de envío son: ${postage}¥. Total.${sum + postage}¥.`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}