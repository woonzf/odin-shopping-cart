import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Star, X } from "lucide-react";
import { addToCart, getCart } from "../modules/cart";

export default function Product({
  product,
  closeProduct,
}: {
  product: product;
  closeProduct: any;
}) {
  const [quantity, setQuantity] = useState<any>(1);
  const [cart, setCart] = useOutletContext<[cart, any]>();
  const priceTotal: number = product.price * quantity;

  function handleQuantityChange(e: any) {
    if (e) {
      const value: string = e.target.value;
      if (value === "") setQuantity("");
      else {
        const valueN = +value;
        if (valueN > 0 && valueN !== quantity) {
          if (valueN > 10) setQuantity(10);
          else setQuantity(valueN);
        }
      }
    }
  }

  function handleQuantityAdd() {
    if (quantity >= 9) setQuantity(10);
    else setQuantity(+quantity + 1);
  }

  function handleQuantitySubtract() {
    if (quantity <= 2) setQuantity(1);
    else setQuantity(+quantity - 1);
  }

  function handleAddToCart() {
    addToCart(product, quantity);
    setCart({ ...getCart() });
    const close: any = document.querySelector("#close-product");
    if (close) close.click();
    alert("Product added to cart successfully!");
  }

  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-dark bg-opacity-50 pt-12">
      <div className="relative flex h-[90%] w-full max-w-screen-lg gap-5 bg-white p-5 portrait:flex-col portrait:gap-2">
        <button
          className="absolute right-5 top-5 z-[99]"
          id="close-product"
          onClick={closeProduct}
        >
          <X size={24} />
        </button>
        <div className="relative flex w-full items-center justify-center portrait:h-[30%] landscape:p-5">
          <img className="h-[75%] object-contain" src={product.image} />
          <div className="absolute bottom-0 right-0 flex items-center">
            <Star />
            <div className="flex items-center pt-[1px]">
              &nbsp;{product.rating.rate} &#40;{product.rating.count}&#41;
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center gap-2 py-10 portrait:py-2">
          <big className="font-bold">{product.title}</big>
          <small className="max-h-[100px] overflow-auto">
            {product.description}
          </small>
          <div className="font-bold">$ {product.price.toFixed(2)}</div>
          <div className="flex flex-col gap-1 landscape:mt-10">
            <label htmlFor="quantity">Quantity (Max: 10):</label>
            <div className="flex gap-1">
              <button
                className="w-full rounded-md bg-theme hover:bg-orange-200"
                onClick={handleQuantitySubtract}
              >
                -
              </button>
              <input
                className="w-full bg-theme text-center portrait:w-full"
                type="text"
                value={quantity}
                name="quantity"
                id="quantity"
                onChange={handleQuantityChange}
              />
              <button
                className="w-full rounded-md bg-theme hover:bg-orange-200"
                onClick={handleQuantityAdd}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between landscape:mt-10">
            <div>Total price:</div>
            <div>$ {priceTotal.toFixed(2)}</div>
          </div>
          <button
            className="rounded-md bg-green-400 bg-opacity-50 leading-loose hover:bg-green-500"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
