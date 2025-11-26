import AnnouncementBar from "./components/layout/AnnouncementBar";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import HeroCarousel from "./components/sections/HeroCarousel";
// import Marquee from "./components/sections/Marquee";
import BestSellerSection from "./components/sections/BestSellerSection";
import FabricGrid from "./components/sections/FabricGrid";
import CollectionGrid from "./components/sections/CollectionGrid";
import NewArrivals from "./components/sections/NewArrivals";
import { collections } from "./data/content";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111]">
      <AnnouncementBar />
      {/* <Marquee /> */}
      <Header />

      <main className="w-full flex flex-col gap-y-10 md:gap-y-16 pb-12 md:pb-16 pt-4 md:pt-6">
        <HeroCarousel />
        <NewArrivals />
        <BestSellerSection />
        <FabricGrid />
        <CollectionGrid
          eyebrow="Shop by"
          title="Collection"
          items={collections}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
