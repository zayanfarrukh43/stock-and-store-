import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
              alt="Stock & Store"
              className="
                w-full
                h-[300px]
                sm:h-[450px]
                lg:h-[550px]
                object-cover
                rounded-[24px]
              "
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Why choose Stock & Store
            </h2>

            <div className="space-y-8 text-zinc-300 text-lg md:text-xl leading-relaxed">
              <p>
                With over 21 years of experience in Italian retail, we
                understand what our customers need. Our extensive network of
                18 stores ensures you're never far from quality products and
                expert service.
              </p>

              <p>
                We maintain strong relationships with Italian manufacturers
                and artisans, allowing us to offer authentic products at
                competitive prices. Our team is trained to provide
                personalized recommendations and ensure your shopping
                experience is exceptional.
              </p>

              <p>
                Whether you're looking for the latest fashion trends,
                comfortable footwear, stylish home essentials, or unique
                lifestyle products, Stock & Store is your trusted destination
                for quality and value.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}