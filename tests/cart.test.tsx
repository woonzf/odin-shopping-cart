import { describe, it, expect } from "vitest";
import { addToCart, deleteFromCart, getCart } from "../src/assets/modules/cart";

describe("cart module", () => {
  const productTest: product = {
    category: "test",
    description: "test",
    id: 9,
    image: "test",
    price: 99.99,
    rating: {
      count: 99,
      rate: 9.9,
    },
    title: "test",
  };

  const productTest2: product = {
    category: "test2",
    description: "test2",
    id: 10,
    image: "test2",
    price: 100.0,
    rating: {
      count: 100,
      rate: 10,
    },
    title: "test",
  };

  it("added an item correctly", () => {
    addToCart(productTest, 1);

    const cartItemTest: cartItem = {
      id: 0,
      product: productTest,
      quantity: 1,
    };
    const cart: cart = getCart();

    expect(cart.items[0]).toStrictEqual(cartItemTest);
  });

  it("deleted an item correctly", () => {
    addToCart(productTest2, 10);
    deleteFromCart(0);

    const cartItemTest: cartItem = {
      id: 1,
      product: productTest2,
      quantity: 10,
    };
    const cart: cart = getCart();

    expect(cart.items[0]).toStrictEqual(cartItemTest);
  });

  it("updated quantity, currentId and price correctly", () => {
    const cartItemTest: cartItem = {
      id: 1,
      product: productTest2,
      quantity: 10,
    };

    const cartTest: cart = {
      items: [cartItemTest],
      quantity: 1,
      currentId: 1,
      price: 1000.0,
    };

    const cart: cart = getCart();

    expect(cart).toStrictEqual(cartTest);
  });
});
