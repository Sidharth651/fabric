import SectionHeader from "../common/SectionHeader";

const CollectionGrid = ({ items, eyebrow, title }) => (
  <section className="bg-white px-4 md:px-8 py-10 md:py-12 shadow-sm max-w-7xl mx-auto w-full">
    <SectionHeader eyebrow={eyebrow} title={title} />

    <div className="mt-8 md:mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="
            snap-center shrink-0
            basis-48 md:basis-64
            overflow-hidden border border-black/5
            transition-transform duration-300
            hover:-translate-y-1 hover:shadow-md
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-56 md:h-72 w-full object-cover"
          />

          <div className="bg-white px-4 md:px-6 py-3 md:py-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B3A4C]">
              {item.title}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default CollectionGrid;
