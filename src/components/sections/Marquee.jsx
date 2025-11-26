import { marqueeCopy } from "../../data/content";

const Marquee = () => (
  <section className="overflow-hidden  border border-black/10 bg-[#F5F5F5] py-3">
    <div className="animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.2em] text-[#2B3A4C]">
      {`${marqueeCopy}   `.repeat(4)}
    </div>
  </section>
);

export default Marquee;
