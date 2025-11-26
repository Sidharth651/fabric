import { useEffect, useRef, useState } from "react";

const ScrollCarousel = ({ children }) => {
  const ref = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!ref.current) return;
      const { scrollWidth, clientWidth } = ref.current;
      setShowArrows(scrollWidth > clientWidth + 5);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [children]);

  const scroll = (direction) => {
    if (!ref.current) return;
    const offset = ref.current.clientWidth * 0.8;
    ref.current.scrollBy({ left: direction * offset, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        className={`absolute left-3 md:left-2 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/90 text-2xl md:text-xl text-[#1A2234] shadow-xl transition-all hover:bg-white
          ${
            showArrows
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => scroll(-1)}
      >
        ‹
      </button>

      {/* Scroll Area */}
      <div
        ref={ref}
        className="
          flex gap-4 md:gap-6
          overflow-x-auto scroll-smooth snap-x snap-mandatory
          pb-4 pl-px pr-16
          hide-scrollbar
          touch-pan-x
        "
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button
        className={`absolute right-3 md:right-2 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/90 text-2xl md:text-xl text-[#1A2234] shadow-xl transition-all hover:bg-white
          ${
            showArrows
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  );
};

export default ScrollCarousel;
