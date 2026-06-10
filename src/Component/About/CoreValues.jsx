import React from "react";
import { Award, Sparkles, Heart, Leaf } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Quality",
      icon: Award,
      description:
        "We source only the finest products from trusted Italian manufacturers and artisans.",
    },
    {
      title: "Style",
      icon: Sparkles,
      description:
        "Our curated selection reflects the latest trends while honoring timeless Italian design.",
    },
    {
      title: "Innovation",
      icon: Heart,
      description:
        "We continuously evolve our offerings to meet the changing needs of modern consumers.",
    },
    {
      title: "Sustainability",
      icon: Leaf,
      description:
        "We are committed to responsible sourcing and reducing our environmental impact.",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-28 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our core values
          </h2>

          <p className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
            These principles guide everything we do, from product selection to
            customer service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  value-card
                  bg-[#050505]
                  rounded-[24px]
                  p-8
                  min-h-[320px]
                  border
                  border-zinc-800
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#5a0026] flex items-center justify-center mb-8">
                  <Icon size={36} className="text-pink-500" />
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl font-bold mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hover Border Blink Animation */}
      <style>
        {`
          .value-card:hover {
            animation: blinkBorder 0.8s infinite alternate;
          }

          @keyframes blinkBorder {
            0% {
              border-color: #ff0080;
              box-shadow: 0 0 8px rgba(255, 0, 128, 0.4);
            }

            50% {
              border-color: #ff4da6;
              box-shadow: 0 0 20px rgba(255, 0, 128, 0.8);
            }

            100% {
              border-color: #ff0080;
              box-shadow: 0 0 35px rgba(255, 0, 128, 1);
            }
          }
        `}
      </style>
    </section>
  );
}