import { ChevronDown } from "lucide-react";
import { categories } from "./categories";

export default function Category({
  handleCategoryChange,
}: {
  handleCategoryChange: any;
}) {
  return (
    <aside className="w-[300px] portrait:w-full">
      <div className="mb-3 flex items-center justify-between text-xl font-semibold">
        <div>Category</div>
        <ChevronDown className="landscape:hidden" />
      </div>
      <ul className="flex flex-col gap-1 portrait:hidden">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className="w-full rounded-md bg-light px-3 py-1 text-start capitalize hover:bg-dark hover:text-light"
              onClick={() => handleCategoryChange(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
