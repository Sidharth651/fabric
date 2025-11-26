import { navLinks } from "../../data/content";

const Header = () => (
  <header className="bg-white w-full">
    <div className="flex flex-col w-full transition-all duration-300">
      {/* Brand */}
      <div className="flex items-center justify-center py-3 w-full">
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-[#2B3A4C]">
          Om <span className="text-[#E6B967]">Enterprise</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav
        className="
    w-full
    flex flex-wrap justify-center
    gap-3
    px-4 py-2
    text-xs uppercase tracking-wide text-[#2B3A4C]

    md:flex-nowrap md:overflow-x-auto md:scroll-smooth
    md:gap-6 md:px-6 md:py-3 md:text-sm md:tracking-widest
  "
      >
        {navLinks.map((link) => (
          <button
            key={link}
            className="
              whitespace-nowrap
              px-3 py-1.5 md:px-2 md:py-1
              font-medium
              transition-colors duration-200
              hover:text-[#E6B967]
            "
          >
            {link}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
