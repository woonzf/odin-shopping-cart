import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../src/assets/components/Cart";

import { ReactNode } from "react";
import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";
import { addToCart, getCart } from "../src/assets/modules/cart";

describe("Cart component", () => {
  interface RenderRouteWithOutletContextProps<T = any> {
    context: T;
    children: ReactNode;
  }

  const RenderRouteWithOutletContext = <T,>({
    context,
    children,
  }: RenderRouteWithOutletContextProps<T>) => {
    return (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Outlet context={context as T} />}>
            <Route index element={children} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  };

  it("rendered empty cart correctly", () => {
    render(
      <RenderRouteWithOutletContext context={[getCart()]}>
        <Cart />
      </RenderRouteWithOutletContext>,
    );

    const emptyElement: HTMLElement = screen.getByText("No item in cart");
    expect(emptyElement).toBeDefined();
  });

  it("rendered non-empty cart correctly", () => {
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
      title: "title-test",
    };

    addToCart(productTest, 1);

    render(
      <RenderRouteWithOutletContext context={[getCart()]}>
        <Cart />
      </RenderRouteWithOutletContext>,
    );

    const cartList: HTMLElement = screen.getByText("title-test");
    expect(cartList).toBeDefined();
  });
});
