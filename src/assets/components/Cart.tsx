import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { getCart } from "../modules/cart";

export default function Cart() {
  const cart: cart = getCart();

  function getTotalPrice(item: cartItem) {
    return (item.product.price * item.quantity).toFixed(2);
  }

  return (
    <section className="fixed left-0 top-0 h-screen w-screen bg-dark bg-opacity-50 pt-12">
      <div className="relative mx-auto flex h-full w-full max-w-screen-md flex-col items-center justify-center bg-white px-6">
        <Link to={-1} className="absolute right-5 top-5 z-[99]">
          <X size={24} />
        </Link>
        <div>Cart</div>
        <div className="flex flex-col gap-2">
          {cart.items.map((item) => (
            // Make it a table
            <div className="flex h-[100px] items-center justify-between">
              <img className="object-fit h-full" src={item.product.image} />
              <div>{item.product.title}</div>
              <div>$ {item.product.price.toFixed(2)}</div>
              <div>x {item.quantity}</div>
              <div>$ {getTotalPrice(item)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
