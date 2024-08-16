import { useState } from "react";
import { Star, X } from "lucide-react";

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
      const value: any = e.target.value;
      if (value !== quantity) {
        if (value > 10) setQuantity(10);
        else setQuantity(value);
      } else if (value === "") setQuantity("");
    }
    // Todo: Escape + an - sign
  }

  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-dark bg-opacity-50 pt-12">
      <div className="relative flex h-[75%] w-full max-w-screen-md flex-col justify-evenly bg-white p-5">
        <button className="absolute right-5 top-5" onClick={closeProduct}>
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
        <small>{product.description}</small>
        <div>$ {product.price.toFixed(2)}</div>
        <div className="flex flex-col gap-1">
          <label htmlFor="quantity">Quantity (Max: 10)</label>
          <input
            className="bg-theme"
            type="number"
            value={quantity}
            name="quantity"
            id="quantity"
            min={1}
            max={10}
            onChange={handleQuantityChange}
          />
        </div>
        <div>Total Price: $ {priceTotal.toFixed(2)}</div>
        <button className="rounded-md bg-green-400 bg-opacity-50 leading-loose">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
