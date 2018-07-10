var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {};
  obj[item] = Math.floor((Math.random() * 100) + 1);
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart
}


function viewCart() {
  if (cart.length===0){
  console.log('Your shopping cart is empty.')
}
  else if(cart.length===1){
  var intro = `In your cart, you have ${Object.entries(cart[0])[0][0]} at $${Object.entries(cart[0])[0][1]}.`
}
  else if(cart.length===2){
  var intro = `In your cart, you have ${Object.entries(cart[0])[0][0]} at $${Object.entries(cart[0])[0][1]} and ${Object.entries(cart[1])[0][0]} at $${Object.entries(cart[1])[0][1]}.`
}
  else{
  var intro = `In your cart, you have ${Object.entries(cart[0])[0][0]} at $${Object.entries(cart[0])[0][1]}, ${Object.entries(cart[1])[0][0]} at $${Object.entries(cart[1])[0][1]}`
}
  for(var i = 2; i < cart.length; i++){
  if(cart[i+1]){
    intro +=
    `, ${Object.entries(cart[i])[0][0]} at $${Object.entries(cart[i])[0][1]}`;
}
  else {
    intro +=
    `, and ${Object.entries(cart[i])[0][0]} at $${Object.entries(cart[i])[0][1]}`;
}
}
    console.log(intro)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
