import { bestSellers } from "../../data/content";
import SectionHeader from "../common/SectionHeader";
import ScrollCarousel from "../common/ScrollCarousel";

const BestSellerSection = () => (
  <section className="bg-white px-4 md:px-8 py-10 md:py-12 shadow-sm max-w-7xl mx-auto w-full">
    <SectionHeader eyebrow="Mix & Match" title="Best Sellers" align="center" />

    <ScrollCarousel>
      {bestSellers.map((item) => (
        <article
          key={item.title}
          className="
            snap-center shrink-0 
            basis-52 md:basis-64 
            overflow-hidden border border-black/5
            transition-transform duration-300 
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-64 md:h-96 w-full object-cover"
          />

          <div className="px-4 md:px-6 py-3 md:py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B3A4C]">
              {item.title}
            </p>
          </div>
        </article>
      ))}
    </ScrollCarousel>
  </section>
);

export default BestSellerSection;
