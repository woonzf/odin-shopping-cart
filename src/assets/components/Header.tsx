import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function Header({
  isLogin,
  cartAmount,
}: {
  isLogin: boolean;
  cartAmount: number;
}) {
  return (
    <header className="fixed w-full bg-black bg-opacity-50 text-white">
      <div className="w-xl mx-auto flex h-12 items-center justify-between p-3">
        <div className="text-2xl font-extrabold">MIZU</div>
        <div className="flex gap-5">
          <div>
            {isLogin === true ? <>Username</> : <Link to="login">Log in</Link>}
          </div>
          <button className="relative">
            <ShoppingBag size={24} />
            <div className="absolute -bottom-2 -right-2 flex aspect-square h-5 items-center justify-center rounded-full bg-orange-100 pt-[1px] text-black">
              {cartAmount}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
