import { ArrowRight } from "lucide-react";

export default function PromoSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Card 1 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-pink-900
              bg-gradient-to-br
              from-[#3b001d]
              via-[#17000b]
              to-black
              p-8
              md:p-12
              min-h-[320px]
              transition-all
              duration-500
              hover:border-pink-500
              hover:shadow-[0_0_40px_rgba(255,0,128,0.20)]
            "
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-900/60 text-pink-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              New arrivals
            </div>

            {/* Title */}
            <h2 className="mt-8 text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Spring collection 2026
            </h2>

            {/* Description */}
            <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-lg">
              Discover the latest trends in Italian fashion.
              Fresh styles, premium quality.
            </p>

            {/* Button */}
            <button
              className="
                mt-8
                px-6
                py-3
                rounded-xl
                bg-pink-500
                text-white
                font-semibold
                flex
                items-center
                gap-3
                hover:bg-pink-600
                transition-all
              "
            >
              Shop now
              <ArrowRight size={18} />
            </button>

            {/* Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/10 blur-3xl rounded-full"></div>
          </div>

          {/* Card 2 */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-pink-900
              bg-gradient-to-br
              from-[#3b001d]
              via-[#17000b]
              to-black
              p-8
              md:p-12
              min-h-[320px]
              transition-all
              duration-500
              hover:border-pink-500
              hover:shadow-[0_0_40px_rgba(255,0,128,0.20)]
            "
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-900/60 text-pink-400 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              Limited time
            </div>

            {/* Title */}
            <h2 className="mt-8 text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Up to 40% off
              <br />
              selected items
            </h2>

            {/* Description */}
            <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-lg">
              Don't miss out on incredible savings across our
              entire range.
            </p>

            {/* Button */}
            <button
              className="
                mt-8
                px-6
                py-3
                rounded-xl
                bg-pink-500
                text-white
                font-semibold
                flex
                items-center
                gap-3
                hover:bg-pink-600
                transition-all
              "
            >
              View sale
              <ArrowRight size={18} />
            </button>

            {/* Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/10 blur-3xl rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}