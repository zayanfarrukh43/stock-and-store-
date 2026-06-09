import { useState } from "react";
import {
  Globe,
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "SHOP", path: "/shop" },
  { name: "OUR STORES", path: "/stores" },
  { name: "ABOUT", path: "/aboutus" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="h-[90px] px-5 lg:px-12 xl:px-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-[3px] h-[55px] bg-[#00D26A]" />

          <div>
            <h1 className="font-black text-[20px] sm:text-[24px] leading-none">
              <span className="text-[#ff0080] text-[34px] sm:text-[40px]">S</span>
              TOCK &
              <span className="text-[#ff0080] text-[34px] sm:text-[40px]"> S</span>
              TORE
            </h1>

            <p className="text-[9px] sm:text-[11px] font-bold tracking-[2px] mt-1">
              LA CASA DELLO STOCK
            </p>
          </div>

          <div className="w-[3px] h-[55px] bg-[#ff2d55]" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[14px] font-extrabold tracking-wide hover:text-[#ff0080] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <span className="font-bold text-sm">EN</span>
          </div>

          <Search size={20} />
          <User size={20} />
          <Heart size={20} />
          <ShoppingCart size={20} />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-[#111] border-t border-zinc-800">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="px-5 py-4 font-bold border-b border-zinc-800 hover:bg-zinc-900"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-5 px-5 py-4">
            <Globe size={18} />
            <span className="font-bold">EN</span>
            <Search size={18} />
            <User size={18} />
            <Heart size={18} />
            <ShoppingCart size={18} />
          </div>
        </nav>
      </div>
    </header>
  );
}