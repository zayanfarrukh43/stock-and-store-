import React from "react";
import {
  FaInstagram,
  FaFacebookF,
//   FaLinkedinIn,
  FaTiktok
} from "react-icons/fa";

export default function ContactFormSection() {
  return (
    <section className="bg-black py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Side - Form */}
          <div className="bg-[#050505] border border-zinc-800 rounded-[24px] p-6 md:p-8 lg:p-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-10">
              Send us a message
            </h2>

            <form className="space-y-7">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-14 px-4 rounded-xl bg-black border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full h-14 px-4 rounded-xl bg-black border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full h-14 px-4 rounded-xl bg-black border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full p-4 rounded-xl bg-black border border-zinc-800 text-white placeholder:text-zinc-500 resize-none focus:outline-none focus:border-pink-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Map */}
            <div className="overflow-hidden rounded-[24px] border border-zinc-800">
              <iframe
                title="location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.34%2C44.47%2C11.36%2C44.49&layer=mapnik"
                className="w-full h-[300px] md:h-[400px] lg:h-[420px]"
                loading="lazy"
              />
            </div>

            {/* Follow Us Card */}
            <div className="bg-[#050505] border border-zinc-800 rounded-[24px] p-6 md:p-8">
              <h3 className="text-white text-3xl font-bold mb-6">
                Follow us
              </h3>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8">
                Stay connected with Stock & Store on social media for the
                latest updates, offers, and style inspiration.
              </p>

              <div className="flex flex-wrap gap-4">

                {/* Instagram */}
                <a
                  href="#"
                  className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                >
                  <FaInstagram size={22} />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                >
                  <FaFacebookF size={22} />
                </a>

                {/* TikTok */}
                <a
                  href="#"
                  className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                >
                  <FaTiktok size={22} />
                </a>

                {/* LinkedIn */}
                {/* <a
                  href="#"
                  className="w-14 h-14 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                >
                  <FaLinkedinIn size={22} />
                </a> */}

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}