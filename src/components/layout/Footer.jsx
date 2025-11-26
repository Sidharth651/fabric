const Footer = () => (
  <footer className="mt-16 bg-[#2B3A4C] px-6 md:px-8 py-10 md:py-12 text-white">
    <div className="grid gap-10 md:gap-8 md:grid-cols-4">
      <div>
        <p className="text-sm md:text-base font-semibold tracking-[0.2em] md:tracking-[0.3em] text-[#E6B967]">
          FABLOE
        </p>
        <ul className="mt-4 space-y-2 text-xs md:text-sm text-white/80">
          <li className="hover:text-white transition">About Us</li>
          <li className="hover:text-white transition">Our Branches</li>
          <li className="hover:text-white transition">Contact Us</li>
        </ul>
      </div>

      <div>
        <p className="text-sm md:text-base font-semibold tracking-[0.2em] md:tracking-[0.3em] text-[#E6B967]">
          INFORMATION
        </p>
        <ul className="mt-4 space-y-2 text-xs md:text-sm text-white/80">
          <li className="hover:text-white transition">Privacy Policy</li>
          <li className="hover:text-white transition">Refund Policy</li>
          <li className="hover:text-white transition">Shipping Policy</li>
          <li className="hover:text-white transition">Terms of Service</li>
        </ul>
      </div>

      <div>
        <p className="text-sm md:text-base font-semibold tracking-[0.2em] md:tracking-[0.3em] text-[#E6B967]">
          ACCOUNT
        </p>
        <ul className="mt-4 space-y-2 text-xs md:text-sm text-white/80">
          <li className="hover:text-white transition">Track Order</li>
          <li className="hover:text-white transition">My Account</li>
          <li className="hover:text-white transition">Franchise Enquiry</li>
          <li className="hover:text-white transition">Book Video Call Slot</li>
        </ul>
      </div>

      <div>
        <p className="text-sm md:text-base font-semibold tracking-[0.2em] md:tracking-[0.3em] text-[#E6B967]">
          QUICK SUPPORT
        </p>
        <p className="mt-4 text-xs md:text-sm text-white/80">+91 9677290503</p>
        <p className="text-xs md:text-sm text-white/80">support@fabloe.in</p>
      </div>
    </div>

    <p className="mt-10 text-center text-[10px] md:text-xs text-white/50">
      © {new Date().getFullYear()} Fabloe. All rights reserved.
    </p>
  </footer>
);

export default Footer;
