import React from "react";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import ContactFormSection from "../Component/Contact/ContactFormSection";

export default function ContactUs() {
  return (
    <section className="bg-black min-h-screen">
      
      {/* Top Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">

          {/* Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#5a0026] flex items-center justify-center">
              <MessageSquare
                size={28}
                className="text-pink-500 md:w-[34px] md:h-[34px]"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Get in touch
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Have a question or need assistance? We're here to help.
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">

            {/* Email */}
            <div className="bg-[#050505] border border-zinc-800 rounded-2xl p-5 md:p-6 hover:border-pink-500 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#5a0026] flex items-center justify-center mb-4">
                <Mail
                  size={22}
                  className="text-pink-500 md:w-6 md:h-6"
                />
              </div>

              <h3 className="text-zinc-400 uppercase tracking-wide font-bold text-sm md:text-base mb-2">
                Email
              </h3>

              <p className="text-white text-sm sm:text-base md:text-lg break-all">
                info@stockandstore.it
              </p>
            </div>

            {/* Address */}
            <div className="bg-[#050505] border border-zinc-800 rounded-2xl p-5 md:p-6 hover:border-pink-500 transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#5a0026] flex items-center justify-center mb-4">
                <MapPin
                  size={22}
                  className="text-pink-500 md:w-6 md:h-6"
                />
              </div>

              <h3 className="text-zinc-400 uppercase tracking-wide font-bold text-sm md:text-base mb-2">
                Address
              </h3>

              <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
                Via Bruno Tosarelli 308
                <br />
                40055 Villanova BO
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <ContactFormSection />
      </div>

    </section>
  );
}