import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

import Intro from "./assets/components/Intro";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import { getCart } from "./assets/modules/cart";

export default function App() {
  const [isIntroEnd, setIsIntroEnd] = useState<boolean>(false);
  const [cart, setCart] = useState<cart>(getCart());

  return (
    <>
      {!isIntroEnd ? (
        <Intro handleIntroEnd={() => setIsIntroEnd(true)} />
      ) : (
        <div className="flex h-full animate-appear flex-col">
          <Header cartAmount={cart.quantity} />
          <Outlet context={[cart, setCart]} />
          <Footer />
        </div>
      )}
    </>
  );
}
