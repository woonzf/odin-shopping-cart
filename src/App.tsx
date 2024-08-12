import { useState } from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import "./App.css";

function App() {
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

export default App;
