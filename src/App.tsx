import { useState, useEffect } from "react";
import { categories } from "./assets/components/categories";

import Intro from "./assets/components/Intro";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Category from "./assets/components/Category";
import Store from "./assets/components/Store";
import fetchProducts from "./assets/components/fetchProducts";

import "./App.css";

function App() {
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
      {!isIntroEnd && <Intro handleIntroEnd={() => setIsIntroEnd(true)} />}
      <div className="">
        <Header cartAmount={cartAmount} />
        <main className="w-xl mx-auto">
          <Category handleCategoryChange={setCategory} />
          <Store
            category={category}
            products={products}
            isLoading={isProductsLoading}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
