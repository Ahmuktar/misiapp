"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const SLIDESHOW_IMAGES = [
  "/assets/images/misi/EVOLVE1.jpg",
  "/assets/images/misi/EVOLVE2.jpg",
  "/assets/images/misi/EVOLVE3.jpg",
  "/assets/images/misi/EVOLVE5.jpg",
  "/assets/images/misi/EVOLVE6.jpg",
  "/assets/images/misi/EVOLVE8.jpg",
  "/assets/images/misi/EVOLVE10.jpg",
  "/assets/images/misi/MISI 3.jpg",
  "/assets/images/misi/MISI 6.jpg",
  "/assets/images/misi/MISI 10.jpg",
  "/assets/images/misi/MISI 14.jpg",
  "/assets/images/misi/MISI 17.jpg",
];

export default function Hero() {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Slideshow interval
    const slideshowInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);
    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative items-center justify-center flex h-[630px] w-full overflow-hidden bg-black"
    >
      {/* Loading Overlay */}
      {/* <div className="loading-overlay absolute inset-0 bg-black z-50" /> */}

      {/* Background Slideshow */}
      {SLIDESHOW_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`background-slide absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-60" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
            backgroundSize: "contain",
            backgroundPosition: "top center",
          }}
        />
      ))}

      {/* Video Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />

      {/* Content */}
      <div className="relative -mt-20 z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="">
          {/* Logo and Decorative Line */}
          <div className="" data-aos="fade-up">
            <img
              src="/assets/images/logo/logo.png"
              alt="logo"
              className="logo mx-auto w-60"
            />
          </div>

          {/* Main Title */}
          <div className="mt-10" data-aos="fade-left">
            <p className="hero-subtitle text-lg md:text-xl text-[#E6B94C] max-w-xl mx-auto font-light tracking-wider">
              Luxury • Fashion • Bespoke
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10" data-aos="fade-right">
            <button className="hero-button group relative overflow-hidden bg-transparent border-2 border-[#E6B94C] text-[#E6B94C] px-12 py-4 text-lg tracking-widest uppercase hover:text-black transition-colors duration-500">
              <span className="relative z-10">Discover Collection</span>
              <div className="absolute inset-0 bg-[#E6B94C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="scroll-indicator absolute bottom-0 flex flex-col items-center space-y-2"
        >
          <span className="text-[#E6B94C] text-sm tracking-widest">SCROLL</span>
          <ChevronDown className="w-6 h-6 text-[#E6B94C]" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-element absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-[#C6A87D] opacity-30" />
      <div className="decorative-element absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-[#C6A87D] opacity-30" />
      <div className="decorative-element absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-[#C6A87D] opacity-30" />
      <div className="decorative-element absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-[#C6A87D] opacity-90" />
    </div>
  );
}
