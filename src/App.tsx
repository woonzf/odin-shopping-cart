import { useState } from "react";
import Intro from "./assets/components/Intro";
import Header from "../src/assets/components/Header";
import Footer from "../src/assets/components/Footer";
import "./App.css";

function App() {
  const [isIntroEnd, setIsIntroEnd] = useState<boolean>(false);
  const [cartAmount, setCartAmount] = useState<number>(0);

  return (
    <>
      {isIntroEnd === false && (
        <Intro handleIntroEnd={() => setIsIntroEnd(true)} />
      )}
      <Header cartAmount={cartAmount} />
      <aside></aside>
      <main className="pt-12"></main>
      <Footer />
    </>
  );
}

export default App;
