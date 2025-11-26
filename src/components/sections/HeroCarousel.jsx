import { useEffect, useState } from "react";
import { heroSlides } from "../../data/content";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const goTo = (direction) => {
    setIndex(
      (prev) => (prev + direction + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="relative overflow-hidden w-full">
      {/* Left Arrow */}
      <button
        className="
          absolute left-3 md:left-4 
          top-1/2 z-20 -translate-y-1/2 
          flex h-9 w-9 md:h-11 md:w-11
          items-center justify-center 
          rounded-full bg-white/85 text-xl md:text-2xl text-[#1A2234] 
          shadow-lg transition hover:bg-white
        "
        onClick={() => goTo(-1)}
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        className="
          absolute right-3 md:right-4 
          top-1/2 z-20 -translate-y-1/2 
          flex h-9 w-9 md:h-11 md:w-11
          items-center justify-center 
          rounded-full bg-white/85 text-xl md:text-2xl text-[#1A2234]
          shadow-lg transition hover:bg-white
        "
        onClick={() => goTo(1)}
      >
        ›
      </button>

      {/* Slides */}
      <div
        className="
          relative 
          h-[280px]        /* mobile */
          sm:h-[360px]     /* large mobile */
          md:h-[520px]     /* tablets */
          lg:h-[640px]     /* small desktop */
          xl:h-[760px]     /* large desktop */
          w-full
        "
      >
        {heroSlides.map((slide, idx) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.headline}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:gap-3">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`
              h-2 w-2 md:h-3 md:w-3 rounded-full transition 
              ${idx === index ? "bg-white" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
