import { useState, useEffect } from "react";
import "./App.css";

// Components
import Intro from "./assets/components/Intro";
import Banner from "./assets/components/Banner";
import Header from "./assets/components/Header";
import Category from "./assets/components/Category";
import Store from "./assets/components/Store";
import Footer from "./assets/components/Footer";

// Modules
import { categories } from "./assets/modules/categories";
import fetchProducts from "./assets/modules/fetchProducts";

export default function App() {
  const [isIntroEnd, setIsIntroEnd] = useState<boolean>(false);
  const [cartAmount, setCartAmount] = useState<number>(0);
  const [category, setCategory] = useState<category>(categories[0]);
  const [products, setProducts] = useState<product[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchProducts(category, setProducts, setIsProductsLoading);
  }, [category]);

  return (
    <>
      {!isIntroEnd ? (
        <Intro handleIntroEnd={() => setIsIntroEnd(true)} />
      ) : (
        <div className="flex h-full animate-appear flex-col">
          <Header cartAmount={cartAmount} />
          <Banner categories={categories} />
          <main className="w-xl mx-auto flex min-h-[calc(100vh-246px)] px-6 portrait:flex-col landscape:gap-10">
            <Category handleCategoryChange={setCategory} category={category} />
            <Store
              category={category}
              products={products}
              isLoading={isProductsLoading}
            />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
