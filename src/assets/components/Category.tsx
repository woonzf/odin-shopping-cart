import { ChevronDown } from "lucide-react";
import { categories } from "../modules/categories";

export default function Category({
  handleCategoryChange,
  category,
}: {
  handleCategoryChange: any;
  category: category;
}) {
  function toggleCategory() {
    const list: any = document.querySelector("#category-list");
    const chevron: any = document.querySelector("#category-chevron");
    if (list) list.classList.toggle("open");
    if (chevron) chevron.classList.toggle("open");
  }

  function handleListClick(category: category) {
    toggleCategory();
    handleCategoryChange(category);
  }

  return (
    <aside className="sticky top-12 w-[300px] self-start portrait:w-full portrait:bg-theme">
      <div
        className="flex items-center justify-between py-3 text-xl font-semibold"
        onClick={toggleCategory}
      >
        <div>Category</div>
        <div className="capitalize landscape:hidden">{category.name}</div>
        <ChevronDown className="landscape:hidden" id="category-chevron" />
      </div>
      <ul className="flex flex-col gap-1 overflow-hidden" id="category-list">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className="w-full bg-light px-3 py-1 text-start capitalize hover:bg-dark hover:text-light"
              onClick={() => handleListClick(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
