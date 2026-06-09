export default function AboutUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        lg:py-40
        bg-gradient-to-r
        from-[#4a001f]
        via-[#220010]
        to-black
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-pink-900/10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* White Line */}
        <div className="w-3 h-16 md:h-20 bg-white rounded-full mx-auto mb-10 md:mb-14"></div>

        {/* Heading */}
        <h2
          className="
            text-white
            font-black
            text-4xl
            md:text-6xl
            lg:text-7xl
            leading-tight
          "
        >
          About Stock & Store
        </h2>

        {/* Description */}
        <p
          className="
            mt-8
            text-zinc-300
            text-lg
            md:text-2xl
            leading-relaxed
            max-w-4xl
            mx-auto
          "
        >
          Italian luxury retail excellence since 2009. Bringing
          quality, style, and innovation to communities across
          Emilia-Romagna.
        </p>
      </div>

      
    </section>
  );
}