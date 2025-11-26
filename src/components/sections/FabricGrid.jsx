import { fabricTypes } from "../../data/content";
import SectionHeader from "../common/SectionHeader";

const FabricGrid = () => (
  <section className="bg-white px-4 md:px-8 py-10 md:py-12 shadow-sm max-w-7xl mx-auto w-full">
    <SectionHeader eyebrow="Shop by" title="Fabric type" />

    <div className="mt-8 md:mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {fabricTypes.map((fabric) => (
        <article
          key={fabric.title}
          className="
            snap-center shrink-0
            basis-48 md:basis-64
            overflow-hidden border border-black/5
            transition-transform duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <img
            src={fabric.image}
            alt={fabric.title}
            className="h-60 md:h-80 w-full object-cover"
          />

          <div className="bg-white px-4 md:px-6 py-3 md:py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B3A4C]">
              {fabric.title}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FabricGrid;
