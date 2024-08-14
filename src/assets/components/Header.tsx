import { ShoppingBag } from "lucide-react";

export default function Header({ cartAmount }: { cartAmount: number }) {
  return (
    <header className="sticky top-0 z-[99] flex h-12 items-center bg-dark text-light">
      <div className="w-xl mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-extrabold">MIZU</div>
        <div className="flex gap-5">
          <div>Guest</div>
          <button className="relative">
            <ShoppingBag size={24} />
            <div className="absolute -bottom-2 -right-2 flex aspect-square h-5 items-center justify-center rounded-full bg-orange-100 pt-[1px] text-dark">
              {cartAmount}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
