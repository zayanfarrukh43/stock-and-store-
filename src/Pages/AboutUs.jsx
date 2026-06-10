import React from "react";
import CoreValues from "../Component/About/CoreValues";
import WhyChooseUs from "../Component/About/WhyChooseUs";

export default function AboutUs() {
    return (
        <section
            className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#4a001f]
        via-[#220010]
        to-black
      "
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-pink-900/10"></div>

            {/* Hero Section */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 lg:py-36 text-center">
                {/* White Line */}
                <div className="w-2 md:w-3 h-14 md:h-20 bg-white rounded-full mx-auto mb-8 md:mb-14"></div>

                {/* Heading */}
                <h2 className="text-white font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                    About Stock & Store
                </h2>

                {/* Description */}
                <p className="mt-6 md:mt-8 text-zinc-300 text-base sm:text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto">
                    Italian luxury retail excellence since 2009. Bringing quality,
                    style, and innovation to communities across Emilia-Romagna.
                </p>
            </div>

            {/* Story Section */}
            <section className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 md:mb-10">
                            Our Story
                        </h2>

                        <div className="space-y-6 md:space-y-8 text-gray-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                Founded in Bologna in 2009, Stock & Store began as a single
                                boutique with a vision to bring the finest Italian products to
                                local communities. Over the years, we have grown into a trusted
                                retail chain with 18 locations across Northern Italy.
                            </p>

                            <p>
                                Our success is built on a simple philosophy: offer exceptional
                                quality, maintain competitive prices, and provide outstanding
                                customer service. Every product in our stores is carefully
                                selected to meet our high standards.
                            </p>

                            <p>
                                Today, Stock & Store serves thousands of customers daily,
                                offering everything from fashion and footwear to home essentials
                                and lifestyle products. We remain committed to our founding
                                principles while embracing innovation and sustainability.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                            alt="Stock & Store"
                            className="
                w-full
                h-[300px]
                sm:h-[400px]
                md:h-[500px]
                lg:h-[650px]
                xl:h-[760px]
                object-cover
                rounded-2xl
                lg:rounded-[24px]
                shadow-2xl
              "
                        />
                    </div>

                </div>

            </section>

            {/* Core Values Section */}
            <CoreValues />
            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </section>
    );
}