const SectionHeader = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignment =
    align === "center"
      ? "text-center items-center mx-auto"
      : "text-left items-start";

  return (
    <div className={`flex flex-col w-full mb-8 md:mb-12 ${alignment}`}>
      {eyebrow && (
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#6C757D]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A] leading-snug">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-2 text-sm md:text-base text-[#4A5568] leading-relaxed ${
            align === "center" ? "max-w-xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
