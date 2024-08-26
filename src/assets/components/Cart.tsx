import { Link, useOutletContext } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Trash2 } from "lucide-react";
import { getCart, deleteFromCart } from "../modules/cart";

export default function Cart() {
  const [cart, setCart] = useOutletContext<[cart, any]>();

  function getSubtotal(item: cartItem) {
    return (item.product.price * item.quantity).toFixed(2);
  }

  function checkout() {
    alert("Sorry, no checkout function present.");
  }

  function handleDeleteItem(item: cartItem) {
    const result = confirm(
      `Remove this item from the cart?\n${item.product.title}`,
    );
    if (result) {
      deleteFromCart(item.id);
      setCart({ ...getCart() });
    }
  }

  return (
    <section className="w-xl relative mx-auto flex min-h-[calc(100vh-96px)] flex-col px-6">
      <div className="sticky top-12 flex h-fit justify-between bg-theme py-2">
        <div>
          <div className="text-2xl font-bold">Cart</div>
          <div>{cart.quantity} item&#40;s&#41;</div>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <ChevronLeft size={24} />
          <div className="text-lg font-semibold">Back to Store</div>
        </Link>
      </div>
      {cart.quantity === 0 && (
        <div className="flex flex-1 items-center justify-center text-xl font-bold">
          No item in cart
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2">
        {cart.items.map((item) => (
          <div key={item.id} className="flex gap-5 rounded-md bg-white p-5">
            <div className="flex h-[100px] w-[100px] justify-center">
              <img className="h-full object-contain" src={item.product.image} />
            </div>
            <div className="flex w-full flex-col justify-between">
              <div className="flex justify-between gap-2">
                <div className="line-clamp-2 overflow-hidden text-ellipsis">
                  {item.product.title}
                </div>
                <button
                  className="h-fit"
                  onClick={() => handleDeleteItem(item)}
                >
                  <Trash2 size={24} color="red" />
                </button>
              </div>
              <div className="flex justify-between">
                <div>$ {item.product.price.toFixed(2)}</div>
                <div>x {item.quantity}</div>
              </div>
              <div className="self-end">$ {getSubtotal(item)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 flex w-full justify-end bg-theme pb-6 pt-2">
        <div className="w-[300px] self-end portrait:w-full">
          <div className="flex items-center justify-between">
            <div>Total</div>
            <div className="text-xl font-bold">$ {cart.price.toFixed(2)}</div>
          </div>
          <button
            className="mt-2 w-full rounded-md bg-green-300 leading-loose enabled:hover:bg-green-400 disabled:opacity-50"
            onClick={checkout}
            disabled={cart.quantity === 0 ? true : false}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
