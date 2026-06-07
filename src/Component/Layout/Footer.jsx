import { Mail, MapPin, } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
           <div>
            <h1 className="font-black text-[20px] sm:text-[24px] leading-none">
              <span className="text-[#ff0080] text-[34px] sm:text-[40px]">
                S
              </span>
              TOCK &
              <span className="text-[#ff0080] text-[34px] sm:text-[40px]">
                {" "}
                S
              </span>
              TORE
            </h1>

            <p className="text-[9px] sm:text-[11px] font-bold tracking-[2px] mt-1">
              LA CASA DELLO STOCK
            </p>
          </div>

            <p className="mt-6 text-zinc-300 leading-relaxed">
              Experience the finest in Italian retail excellence.
              Quality, style, and innovation in every product.
            </p>

            <div className="mt-8 space-y-5">
              

              <div className="flex items-center gap-3">
                <Mail className="text-[#ff0080]" size={20} />
                <span className="text-zinc-300">
                  info@stockandstore.it
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="text-[#ff0080] mt-1"
                  size={20}
                />
                <span className="text-zinc-300">
                  Via Rizzoli 12,
                  <br />
                  40125 Bologna, Italy
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#ff0080] hover:text-[#ff0080] transition"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:border-[#ff0080] hover:text-[#ff0080] transition"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">
              Shop
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>
                <a href="#" className="hover:text-white">
                  All Products
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  New Arrivals
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Best Sellers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Our Stores
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold uppercase mb-6">
              Customer Service
            </h3>

            <ul className="space-y-4 text-zinc-300">
              <li>
                <a href="#" className="hover:text-white">
                  Shipping Info
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Returns
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Size Guide
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-center md:text-left">
            © 2025 Stock & Store. All rights reserved.
          </p>

          <div className="flex gap-6 text-zinc-300">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}