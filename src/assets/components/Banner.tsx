import { useState } from "react";

export default function Banner({ categories }: { categories: category[] }) {
  const [index, setIndex] = useState<number>(1);

  setTimeout(() => {
    if (index + 1 === categories.length) setIndex(1);
    else setIndex(index + 1);
  }, 5000);

  return (
    <div className="w-xl mx-auto h-[150px] px-6 pt-3">
      <div className="mx-auto h-full w-[300px] overflow-hidden lg:w-[500px]">
        <div className="flex h-full animate-slide-rtl-infinite items-center justify-evenly">
          <div className="text-center text-lg capitalize">
            <div>{categories[index].name}</div>
          </div>
          <img className="h-full object-cover" src={categories[index].src} />
        </div>
      </div>
    </div>
  );
}
