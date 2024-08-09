import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-1">
      <h1>Our First Test</h1>
      <button
        className="rounded-sm border px-2 py-1"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <Link to="profile">Profile page</Link>
    </div>
  );
}

export default App;
