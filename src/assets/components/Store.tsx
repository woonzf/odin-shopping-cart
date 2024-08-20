import { useState } from "react";
import Product from "./Product";

export default function Store({
  category,
  products,
  isLoading,
}: {
  category: category;
  products: product[];
  isLoading: boolean;
}) {
  const [product, setProduct] = useState<product>();
  const [isProductOpen, setIsProductOpen] = useState<boolean>(false);

  function handleProductClick(product: product) {
    setProduct(product);
    setIsProductOpen(true);
  }

  return (
    <>
      <section className="flex w-full flex-col">
        <div className="bg-theme py-3 text-xl font-semibold capitalize portrait:hidden">
          {category.name}
        </div>
        <div className="flex flex-wrap gap-2">
          {isLoading ? (
            <div className="animate-pulse">Loading...</div>
          ) : (
            <>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex aspect-[0.7] w-[150px] flex-col justify-between border border-light bg-light p-2 hover:cursor-pointer hover:border-black"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="mt-1 flex h-[50%] items-center justify-center">
                    <img className="object-fit h-full" src={product.image} />
                  </div>
                  <div className="mt-2 line-clamp-2 h-[48px] overflow-hidden text-ellipsis">
                    {product.title}
                  </div>
                  <div className="self-end">$ {product.price.toFixed(2)}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
      {isProductOpen && product && (
        <Product
          product={product}
          closeProduct={() => {
            setIsProductOpen(false);
          }}
        />
      )}
    </>
  );
}
