import { useState } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function Home() {
  const [index, setIndex] = useState<number>(0);
  const categories: string[] = [
    "Men's Clothing",
    "Women's Clothing",
    "Jewelery",
    "Electronics",
  ];

  function updateIndex() {
    index + 1 === categories.length ? setIndex(0) : setIndex(index + 1);
  }

  return (
    <div className="w-xl mx-auto flex h-screen items-center justify-center gap-20 portrait:flex-col portrait:gap-10">
      <div>
        <div className="w-fit">
          <div className="text-8xl font-extrabold lg:text-9xl">MIZU</div>
          <div className="flex justify-between p-1.5 text-2xl lg:p-2 lg:text-3xl">
            <span>S</span>
            <span>T</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>
          </div>
        </div>
      </div>
      <div className="w-[500px] portrait:w-full">
        <div className="overflow-hidden text-center text-2xl">
          <div
            className="animate-slide-up-down"
            onAnimationIteration={updateIndex}
          >
            {categories[index]}
          </div>
        </div>
        <Link
          to="store"
          className="mx-auto mt-5 flex w-[200px] items-center justify-evenly rounded-md border border-dark text-xl font-semibold leading-loose hover:bg-dark hover:text-light"
        >
          <div>Go to Store</div>
          <MoveRight />
        </Link>
      </div>
      <footer className="absolute bottom-0 flex h-12 items-center">
        <small>
          &copy; 2024&nbsp;
          <a
            className="underline"
            href="https://github.com/woonzf"
            target="_blank"
            rel="noreferrer"
          >
            WZF
          </a>
        </small>
      </footer>
    </div>
  );
}
