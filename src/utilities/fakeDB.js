
const setIdAndValueToLocalStorage = id => {
  let cart = getAlreadySavedCart();

  if (id in cart) {
    for (let key in cart) {
      if (key === id) {
        cart[id] += 1;
      }
    }
  }
  else {
    cart[id] = 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};

const getAlreadySavedCart = () => {
  let cart = {};

  const isLocalStorageAlreadyHaveCart = localStorage.getItem('cart');
  if (isLocalStorageAlreadyHaveCart) {
    cart = JSON.parse(isLocalStorageAlreadyHaveCart);
  }

  return cart;
}

