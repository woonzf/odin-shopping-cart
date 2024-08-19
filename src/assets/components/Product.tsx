import { useState } from "react";
import { Star, X } from "lucide-react";
import { addToCart } from "../modules/cart";

export default function Product({
  product,
  closeProduct,
}: {
  product: product;
  closeProduct: any;
}) {
  const [quantity, setQuantity] = useState<any>(1);
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
    setQuantity(1);
    alert("Product added to cart successfully!");
  }

  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-dark bg-opacity-50 pt-12">
      <div className="relative flex h-[75%] w-full max-w-screen-md flex-col justify-evenly gap-2 bg-white p-5">
        <button
          className="absolute right-5 top-5 z-[99]"
          onClick={closeProduct}
        >
          <X size={24} />
        </button>
        <div className="relative flex h-[30%] items-center justify-center">
          <img className="object-fit h-full" src={product.image} />
          <div className="absolute bottom-0 right-0 flex items-center">
            <Star />
            <div className="flex items-center pt-[1px]">
              &nbsp;{product.rating.rate} &#40;{product.rating.count}&#41;
            </div>
          </div>
        </div>
        <div>{product.title}</div>
        <small className="overflow-auto">{product.description}</small>
        <div>$ {product.price.toFixed(2)}</div>
        <div className="flex portrait:flex-col portrait:gap-1 landscape:items-center landscape:gap-2">
          <label htmlFor="quantity">Quantity (Max: 10):</label>
          <div className="flex gap-1">
            <button
              className="w-[100px] rounded-md bg-theme hover:bg-orange-200"
              onClick={handleQuantitySubtract}
            >
              -
            </button>
            <input
              className="w-[100px] bg-theme text-center portrait:w-full"
              type="text"
              value={quantity}
              name="quantity"
              id="quantity"
              onChange={handleQuantityChange}
            />
            <button
              className="w-[100px] rounded-md bg-theme hover:bg-orange-200"
              onClick={handleQuantityAdd}
            >
              +
            </button>
          </div>
        </div>
        <div>Total Price: $ {priceTotal.toFixed(2)}</div>
        <button
          className="rounded-md bg-green-400 bg-opacity-50 leading-loose hover:bg-green-500"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
