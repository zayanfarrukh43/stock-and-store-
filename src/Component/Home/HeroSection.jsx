import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Pink Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-950/90 via-black/60 to-transparent"></div>

      {/* Pink Glow */}
      <div className="absolute left-0 top-0 h-full w-[250px] sm:w-[400px] lg:w-[600px] bg-pink-500/10 blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center min-h-[90vh] lg:min-h-screen">
        <div className="max-w-3xl text-center lg:text-left">

          {/* Decorative White Line */}
          <div className="w-2 h-12 sm:h-16 md:h-20 bg-white rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

          {/* Heading */}
          <h1 className="text-white font-black uppercase leading-none tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
              STOCK&
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px]">
              STORE
            </span>
          </h1>

          {/* Subtitle */}
          <h2
            className="mt-4 sm:mt-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-pink-500"
            style={{
              textShadow:
                "0 0 10px rgba(255,0,128,.8), 0 0 30px rgba(255,0,128,.5)",
            }}
          >
            LA CASA DELLO STOCK
          </h2>

          {/* Description */}
          <p className="mt-5 sm:mt-8 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 text-zinc-200">
            Experience premium quality and timeless style.
            Discover our curated collection of fashion,
            footwear, home essentials
          </p>

          {/* Button */}
          <button
            className="
              mt-8
              sm:mt-10
              px-6
              sm:px-8
              lg:px-10
              py-3
              sm:py-4
              rounded-xl
              lg:rounded-2xl
              bg-pink-600
              hover:bg-pink-500
              text-white
              font-bold
              text-sm
              sm:text-base
              lg:text-lg
              flex
              items-center
              gap-2
              sm:gap-3
              transition-all
              duration-300
              hover:scale-105
              mx-auto
              lg:mx-0
              cursor-pointer
            "
            style={{
              boxShadow:
                "0 0 20px rgba(255,0,128,.6), 0 0 50px rgba(255,0,128,.4)",
            }}
          >
            Explore Collection
            <ArrowRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}