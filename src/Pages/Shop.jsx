import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const products = [
  {
    name: "Classic Cap",
    price: "€18.00",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
  },
  {
    name: "Face Serum",
    price: "€51.00",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
  },
  {
    name: "Handmade Vase",
    price: "€25.00",
    image: "https://images.unsplash.com/photo-1612196808214-b7e239e5fdd5?w=500",
  },
  {
    name: "Hand Soap",
    price: "€10.00",
    image: "https://images.unsplash.com/photo-1584305574647-acf8069a3d90?w=500",
  },
  {
    name: "Set of Plates",
    price: "€30.00",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
  },
  {
    name: "Sunglasses",
    price: "€45.00",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
  {
    name: "Wooden Chair",
    price: "€132.00",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
  },
  {
    name: "Wool Sweater",
    price: "€50.00",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
  },
];

export default function ShopCollection() {
  return (
    <section className="bg-black py-12 md:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-2">
          Shop our collection
        </h2>

        <p className="text-zinc-400 mb-10">
          Discover premium products from Italy's finest retail selection.
        </p>

        <div className="grid lg:grid-cols-[220px_1fr] gap-6">
          
          {/* Filters */}
          <aside className="bg-[#050505] border border-zinc-800 rounded-2xl p-4 h-fit">
            <h3 className="text-white font-bold mb-5">Filters</h3>

            <div className="mb-6">
              <label className="block text-white text-sm mb-2">
                Sort by
              </label>

              <select className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-white text-sm">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>

            <div className="mb-6">
              <h4 className="text-white text-sm font-semibold mb-3">
                Categories
              </h4>

              {[
                "All products",
                "Clothing",
                "Shoes",
                "Home essentials",
                "Lifestyle",
                "Accessories",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-zinc-300 text-sm mb-2"
                >
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-3">
                Price range
              </h4>

              {[
                "Under €50",
                "€50 - €100",
                "€100 - €200",
                "Over €200",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-zinc-300 text-sm mb-2"
                >
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </aside>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#050505] border border-zinc-800 rounded-2xl overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />

                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 flex items-center justify-center">
                    <FaHeart className="text-white text-sm" />
                  </button>

                  <div className="absolute bottom-3 right-3 bg-black text-pink-500 text-xs font-bold px-3 py-1 rounded-full">
                    {product.price}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-bold">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-4">
                    Premium quality product
                  </p>

                  <button className="w-full bg-pink-600 hover:bg-pink-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition">
                    <FaShoppingCart />
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}