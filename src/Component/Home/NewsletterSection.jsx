import { Mail } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="bg-black py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            overflow-hidden
            border
            border-zinc-800
            rounded-[24px]
            lg:rounded-[32px]
            px-6
            sm:px-8
            md:px-12
            lg:px-20
            py-12
            md:py-16
            lg:py-20
            text-center
          "
        >
          {/* Pink Glow Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-pink-500/5 blur-[120px]" />
          </div>

          {/* Icon */}
          <div className="relative z-10 flex justify-center">
            <div
              className="
                w-16 h-16
                md:w-20 md:h-20
                rounded-full
                bg-pink-900/40
                flex items-center justify-center
              "
            >
              <Mail
                size={30}
                className="text-pink-500"
              />
            </div>
          </div>

          {/* Heading */}
          <h2
            className="
              relative z-10
              mt-6 md:mt-8
              text-white
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
            "
          >
            Stay in the loop
          </h2>

          {/* Description */}
          <p
            className="
              relative z-10
              mt-4 md:mt-6
              text-zinc-400
              text-base
              md:text-lg
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Subscribe to our newsletter for exclusive offers,
            new arrivals, and style inspiration.
          </p>

          {/* Form */}
          <div className="relative z-10 mt-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-4">
              
              {/* Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  md:flex-1
                  h-[60px]
                  px-6
                  rounded-2xl
                  bg-black
                  border
                  border-zinc-800
                  text-white
                  text-lg
                  placeholder:text-zinc-500
                  outline-none
                  transition-all
                  duration-300
                  focus:border-pink-500
                  focus:shadow-[0_0_20px_rgba(255,0,128,0.2)]
                "
              />

              {/* Button */}
              <button
                className="
                  w-full
                  md:w-auto
                  min-w-[180px]
                  h-[60px]
                  px-8
                  rounded-2xl
                  bg-pink-500
                  text-white
                  font-semibold
                  text-lg
                  transition-all
                  duration-300
                  hover:bg-pink-600
                  hover:shadow-[0_0_25px_rgba(255,0,128,0.35)]
                "
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <p
            className="
              relative z-10
              mt-6
              text-sm
              text-zinc-500
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            By subscribing, you agree to our Privacy Policy and
            consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}