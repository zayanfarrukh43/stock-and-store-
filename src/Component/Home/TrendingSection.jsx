import {
  Heart,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Classic Cap",
    description: "Premium quality product",
    price: "€18.00",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
  },
  {
    id: 2,
    title: "Face Serum",
    description: "Premium quality product",
    price: "€51.00",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
  },
  {
    id: 3,
    title: "Handmade Vase",
    description: "Premium quality product",
    price: "€25.00",
    image:
      "https://images.unsplash.com/photo-1612196808214-b7e239e5d1a4?w=800",
  },
  {
    id: 4,
    title: "Hand Soap",
    description: "Premium quality product",
    price: "€10.00",
    image:
      "https://images.unsplash.com/photo-1607006483225-49cf5c1f5f9e?w=800",
  },
];

export default function TrendingSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase">
              Trending Now
            </h2>

            <p className="mt-3 text-zinc-400 text-base md:text-lg">
              Discover what's popular this season
            </p>
          </div>

          <button
            className="
              self-start lg:self-auto
              px-6 py-3
              rounded-xl
              border border-pink-500
              text-pink-500
              font-semibold
              flex items-center gap-2
              hover:bg-pink-500
              hover:text-white
              transition-all duration-300
            "
          >
            View all products
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Products */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="
                group
                bg-black
                border
                border-zinc-800
                rounded-3xl
                overflow-hidden
                transition-all
                duration-500
                hover:border-pink-500
                hover:-translate-y-2
                hover:shadow-[0_0_25px_rgba(255,0,128,0.25)]
              "
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[220px] md:h-[250px] w-full object-cover"
                />

                {/* Wishlist */}
                <button
                  className="
                    absolute
                    top-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    bg-black/80
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Heart size={20} className="text-white" />
                </button>

                {/* Price */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    px-4
                    py-1.5
                    rounded-full
                    bg-black
                    text-pink-500
                    font-bold
                    text-base
                  "
                >
                  {product.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white text-lg md:text-xl font-bold">
                  {product.title}
                </h3>

                <p className="mt-1 text-zinc-400 text-sm md:text-base">
                  {product.description}
                </p>

                <button
                  className="
                    mt-5
                    w-full
                    bg-pink-500
                    hover:bg-pink-600
                    py-3
                    rounded-xl
                    text-white
                    font-semibold
                    text-sm md:text-base
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-all
                  "
                >
                  <ShoppingCart size={18} />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}