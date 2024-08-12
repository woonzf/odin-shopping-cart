import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Store() {
  const [cartAmount, setCartAmount] = useState<number>(0);

  return (
    <>
      <Header cartAmount={cartAmount} />
      <aside></aside>
      <main className="pt-12"></main>
      <Footer />
    </>
  );
}
