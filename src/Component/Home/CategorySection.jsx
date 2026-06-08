import {
  Shirt,
  ShoppingBag,
  Home,
  Watch,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Shirt,
    title: "Clothing",
    desc: "Latest fashion trends",
  },
  {
    icon: ShoppingBag,
    title: "Shoes",
    desc: "Step out in style",
  },
  {
    icon: Home,
    title: "Home essentials",
    desc: "Elevate your space",
  },
  {
    icon: Watch,
    title: "Accessories",
    desc: "Complete your look",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-28">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase">
            SHOP BY CATEGORY
          </h2>

          <p className="mt-4 lg:mt-6 text-zinc-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Find exactly what you're looking for in our carefully curated collections.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  h-[280px]
                  sm:h-[300px]
                  lg:h-[320px]
                  rounded-[24px]
                  border
                  border-zinc-800
                  bg-black
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  overflow-hidden
                  cursor-pointer
                  transition-all
                  duration-500
                  hover:border-pink-500
                  hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(255,0,128,0.25)]
                "
              >
                {/* Hover Background */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-pink-900/40
                    via-pink-950/20
                    to-transparent
                  "
                />

                {/* Content */}
                <div className="relative z-10 px-4">
                  <Icon
                    size={52}
                    className="
                      mx-auto
                      text-pink-500
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:drop-shadow-[0_0_12px_rgba(255,0,128,0.8)]
                    "
                  />

                  <h3
                    className="
                      mt-8
                      text-white
                      text-2xl
                      lg:text-3xl
                      font-bold
                      leading-tight
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-zinc-400 text-base lg:text-lg">
                    {item.desc}
                  </p>

                  {/* Explore Button */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-pink-500
                      font-semibold
                      opacity-0
                      translate-y-3
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    Explore
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}