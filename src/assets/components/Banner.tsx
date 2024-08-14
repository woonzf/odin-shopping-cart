import { useState } from "react";

export default function Banner({ categories }: { categories: category[] }) {
  const [index, setIndex] = useState<number>(1);

  setTimeout(() => {
    if (index + 1 === categories.length) setIndex(1);
    else setIndex(index + 1);
  }, 5000);

  return (
    <div className="w-xl mx-auto flex h-[150px] items-center justify-center gap-10 px-6 pt-3">
      <div className="w-fit">
        <div className="text-6xl font-extrabold lg:text-7xl">MIZU</div>
        <div className="flex justify-between px-1.5 text-xl lg:px-2 lg:text-2xl">
          <span>S</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span>E</span>
        </div>
      </div>
      <div className="w-[300px] overflow-hidden text-center text-xl capitalize">
        <div className="animate-slide-up-down">{categories[index].name}</div>
      </div>
    </div>
  );
}
