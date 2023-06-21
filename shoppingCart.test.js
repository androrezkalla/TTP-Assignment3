const { 
  addToCart, 
  removeFromCart, 
  calculateTotal, 
  cart } = require('./shoppingCart');

describe('Shopping Cart Testing', () => {
  beforeEach(() => {
    // Clear the cart before each test
    cart.length = 0;
  });

  //testing the adding functionality and quanity of items in the cart
  test('addToCart function', () => {
    addToCart('apple', 3);
    addToCart('bread', 1);

    expect(cart.length).toBe(2);
    expect(cart[0]).toEqual({ name: 'apple', quantity: 3 });
    expect(cart[1]).toEqual({ name: 'bread', quantity: 1 });
  });

  test('Quanitity update function', () => {
    addToCart('cheese', 2);
    addToCart('cheese', 3);

    expect(cart.length).toBe(1);
    expect(cart[0]).toEqual({ name: 'cheese', quantity: 5 });
  });

  //testing decrement quaniti
  test('Removing items from the cart', () => {
    addToCart('meat', 1);
    addToCart('eggs', 3);
    removeFromCart('eggs', 2);

    expect(cart.length).toBe(2);
    expect(cart[0]).toEqual({ name: 'meat', quantity: 1 });
    expect(cart[1]).toEqual({ name: 'eggs', quantity: 1 });
  });

  //testing removing items from cart completly, the cart length should decrease by 1 after removing the item
  test('Removing items from the cart', () => {
    addToCart('meat', 2);
    addToCart('eggs', 2);
    removeFromCart('eggs', 2);

    expect(cart.length).toBe(1);
  })

  test('Calculating the total price', () => {
    addToCart('apple', 2);
    addToCart('bread', 1);
    addToCart('cheese', 3);

    const total = calculateTotal();

    expect(total).toBe(65); // 5*2 + 10*1 + 15*3 = 10 + 10 + 45 = 65
  });
});
