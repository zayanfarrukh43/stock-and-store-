import React from "react";
import {
  FaMapMarkerAlt,
  FaLocationArrow,
  FaClock,
} from "react-icons/fa";

export default function OurStores() {
  const stores = [
    {
      name: "Stock & Store ",
      address: "Bologna, Via Bruno Tosarelli 308, 40055 Villanova BO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via del Lavoro, 29/A, 40127 Bologna BO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Ferdinando Magellano, 1/C, 40017 San Giovanni in Persiceto BO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store",
      address: "Via Fondovalle, 41054 Casona MO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Ateo Bendini, 6, 40026 Imola BO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Emilia Est, 1071, 41018 Panaro MO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Tacito, 7b, 41123 Modena MO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Valle Isola, 1, 44022 Comacchio FE",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Vittorio Borghesi, 85, 47522 Cesena FC",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Stazione, 40, 41049 Sassuolo MO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Antonio Cavalieri Ducati, 5X, 40132 Bologna BO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Francesco Baracca, 5, 40133 Bologna BO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Salcetana, 77, 51031 Agliana PT",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store  ",
      address: "Via Leo Gramellini, 14, 47122 Forlì FC",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Eridania, 113/S, 45030 Santa Maria Maddalena RO",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Via Ausa, 170, 47853 Coriano RN",
      hours: "Mon - Sat: 8:30 AM – 8:00 PM",
    },
    {
      name: "Stock & Store ",
      address: "Viale Dante, 194, 47838 Riccione RN",
      hours: "Mon - Sat: 9:30 AM – 12:00 AM",
    },
    {
      name: "AJ outlet ",
      address: "Viale Milano, 60, 47838 Riccione RN",
      hours: "Mon - Sat: 9:30 AM – 12:00 AM",
    },
  ];

  return (
    <section className="bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-[#4d0024] flex items-center justify-center">
            <FaMapMarkerAlt className="text-pink-500 text-2xl" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Stores
          </h2>

          <p className="text-zinc-300 text-base md:text-lg max-w-3xl mx-auto">
            Visit us at one of our locations across Italy and experience
            premium shopping with Stock & Store.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[24px] border border-zinc-800 mb-12">
          <iframe
            title="stores-map"
            src="https://www.openstreetmap.org/export/embed.html"
            className="w-full h-[280px] md:h-[400px] lg:h-[450px]"
            loading="lazy"
          />
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="bg-[#050505] border border-zinc-800 rounded-[20px] overflow-hidden hover:border-pink-500 transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                alt={store.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-white text-xl font-bold mb-2">
                  {store.name}
                </h3>

                <p className="text-pink-500 text-sm font-medium mb-4">
                  Stock & Store Location
                </p>

                {/* Address */}
                <div className="flex items-start gap-3 mb-4">
                  <FaMapMarkerAlt className="text-pink-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {store.address}
                  </p>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3 mb-6">
                  <FaClock className="text-pink-500 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {store.hours}
                  </p>
                </div>

                {/* Button */}
                <button className="w-full bg-pink-600 hover:bg-pink-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                  <FaLocationArrow />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}