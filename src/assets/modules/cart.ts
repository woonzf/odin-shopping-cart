const localStorageName: string = "mizuStoreCart";
let cart: cart = {
  items: [],
  quantity: 0,
  currentId: -1,
  price: 0,
};

// Check if cart exists, get if, set if not
if (localStorage.getItem(localStorageName)) cart = getLocalStorage();
else setLocalStorage(cart);

export function addToCart(product: product, quantity: number) {
  const items: cartItem[] = cart.items;
  const index: number = items.findIndex(
    (item) => item.product.id === product.id,
  );

  if (index !== -1) {
    const currentQuantity: number = items[index].quantity;
    const newQuantity: number = currentQuantity + quantity;
    if (newQuantity > 10) cart.items[index].quantity = 10;
    else cart.items[index].quantity = newQuantity;
  } else {
    const newCartItem: cartItem = {
      id: cart.currentId + 1,
      product: product,
      quantity: quantity,
    };
    cart.items.push(newCartItem);
  }

  updateCartQIP();
  setLocalStorage(cart);
}

export function deleteFromCart(id: number) {
  const items: cartItem[] = cart.items;
  const index: number = items.findIndex((item) => item.id === id);
  cart.items.splice(index, 1);
  updateCartQIP();
  setLocalStorage(cart);
}

function updateCartQIP() {
  const items: cartItem[] = cart.items;
  const length = items.length;

  // Update quantity
  cart.quantity = length;

  // Update currentId
  if (!length) cart.currentId = 0;
  else cart.currentId = items[length - 1].id + 1;

  // Update price
  cart.price = +items
    .reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    .toFixed(2);
}

export function getCart() {
  return cart;
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem(localStorageName)!);
}

function setLocalStorage(data: cart) {
  localStorage.setItem(localStorageName, JSON.stringify(data));
}
