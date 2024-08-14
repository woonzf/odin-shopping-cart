import { ChevronDown } from "lucide-react";
import { categories } from "../modules/categories";

export default function Category({
  handleCategoryChange,
}: {
  handleCategoryChange: any;
}) {
  return (
    <aside className="sticky top-12 w-[300px] self-start portrait:w-full portrait:bg-theme">
      <div className="flex items-center justify-between py-3 text-xl font-semibold">
        <div>Category</div>
        <ChevronDown className="landscape:hidden" />
      </div>
      <ul className="flex flex-col gap-1 portrait:hidden">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className="w-full bg-light px-3 py-1 text-start capitalize hover:bg-dark hover:text-light"
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
