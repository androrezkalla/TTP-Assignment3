const cart = [];

const itemPrice = {
    apple: 5,
    bread: 10,
    cheese: 15,
    meat: 20,
    eggs: 25,
};


//Function to add item to cart
function addToCart(itemName, quantity) {
  const existingItem = cart.find((item) => item.name === itemName);

  //if item doesn't exist, push it to the cart
  if (!existingItem) {
      cart.push({ name: itemName, quantity: quantity });
    }
    //if it already exists, update the quantity
    else {
      existingItem.quantity += quantity;
    }
}

//Function to remove item from cart
function removeFromCart(itemName, quantity) {
  const item = cart.find((item) => item.name === itemName);

  //if item doesn't exist, return null
  if (!item) {
    return null;
    // if it does exist, decrement the quantity
  } else {
    item.quantity -= quantity;
  }

  //if the quantity is 0, remove the item
  if (item.quantity === 0) {
    cart.splice(cart.indexOf(item), 1);
  }
}

//Function to calculate the total price
function calculateTotal() {
  let total = 0;
  for (const item of cart) {
    total += itemPrice[item.name] * item.quantity;
  }
  return total;
}

module.exports = {
  addToCart,
  removeFromCart,
  calculateTotal,
  cart,
};
