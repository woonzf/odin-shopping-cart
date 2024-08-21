import { useState, useEffect } from "react";

// Components
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";

// Modules
import { categories } from "../modules/categories";
import fetchProducts from "../modules/fetchProducts";

export default function Store() {
  const [category, setCategory] = useState<category>(categories[0]);
  const [products, setProducts] = useState<product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts(category, setProducts, setIsProductsLoading);
  }, [category]);

  return (
    <>
      <Banner categories={categories} />
      <main className="w-xl mx-auto flex min-h-[calc(100vh-246px)] px-6 portrait:flex-col landscape:gap-10">
        <Category handleCategoryChange={setCategory} category={category} />
        <Products
          category={category}
          products={products}
          isLoading={isProductsLoading}
        />
      </main>
    </>
  );
}
