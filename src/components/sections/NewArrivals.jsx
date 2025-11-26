import { arrivals } from "../../data/content";
import SectionHeader from "../common/SectionHeader";
import ScrollCarousel from "../common/ScrollCarousel";

const NewArrivals = () => (
  <section
    className="
      bg-white px-4 md:px-8 py-10 md:py-12 shadow-sm 
      max-w-7xl w-full
      mx-4 sm:mx-6 lg:mx-auto
      rounded-2xl md:rounded-3xl
    "
  >
    <SectionHeader
      eyebrow="New Arrivals"
      title="Freshly woven stories"
      align="center"
    />

    <ScrollCarousel>
      {arrivals.map((item, idx) => (
        <article
          key={`${item.title}-${idx}`}
          className="
            snap-center shrink-0 
            basis-52 md:basis-64
            overflow-hidden 
            border border-black/5 
            transition-transform duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-64 md:h-96 w-full object-cover"
          />

          <div className="space-y-1 px-4 md:px-6 py-3 md:py-4">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-black/50">
              Suit sets
            </p>
            <p className="text-sm font-semibold text-[#111111]">{item.title}</p>
            <p className="text-sm text-[#2B3A4C]">{item.price}</p>
          </div>
        </article>
      ))}
    </ScrollCarousel>
  </section>
);

export default NewArrivals;
