import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getCart } from "../modules/cart";

export default function Cart() {
  const [cart, setCart] = useState<cart>(getCart());

  function getSubtotal(item: cartItem) {
    return (item.product.price * item.quantity).toFixed(2);
  }

  function checkout() {
    alert("Sorry, no checkout function present.");
  }

  return (
    <section className="w-xl relative mx-auto min-h-[calc(100vh-96px)] p-6">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Cart</div>
        <Link to="/" className="flex items-center gap-2">
          <ChevronLeft size={24} />
          <div className="text-lg font-semibold">Back to Store</div>
        </Link>
      </div>
      <table className="mt-6 w-full">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr key={item.id} className="border-y-4 border-theme bg-white">
              <td className="flex items-center gap-2">
                <div className="flex aspect-square h-[100px] items-center justify-center p-2">
                  <img
                    src={item.product.image}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>{item.product.title}</div>
              </td>
              <td className="text-end">$ {item.product.price.toFixed(2)}</td>
              <td className="text-center">x {item.quantity}</td>
              <td className="pr-3 text-end">$ {getSubtotal(item)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="text-lg">
            <td colSpan={2}></td>
            <th>Grand Total:</th>
            <th className="h-[50px] pr-3 text-end">$ {cart.price}</th>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td colSpan={2}>
              <button
                className="h-[50px] w-full rounded-md bg-green-300 hover:bg-green-400"
                onClick={checkout}
              >
                Checkout
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
