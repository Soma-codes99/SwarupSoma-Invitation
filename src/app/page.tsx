import HeroCardSlider from "@/components/HeroCardSlider";
import IntroStory from "@/components/IntroStory";
import Events from "@/components/Events";
import Details from "@/components/Details";
import People from "@/components/People";
import Footer from "@/components/Footer";
import PetalCanvas from "@/components/PetalCanvas";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative bg-[#830508]">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Cherry Red Wallpaper Background Layer - Static Viewport */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transform-gpu will-change-transform"
        style={{ backgroundImage: "url('/cherry-red-wallpaper.jpg')" }}
      />
      {/* Soft Vignette to enrich the royal atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(75,3,6,0.5)_100%)]" />

      {/* Global Floating Rose, Marigold & Gold Dust Petals */}
      <PetalCanvas isFixed className="fixed inset-0 pointer-events-none z-20 w-screen h-screen" />

      {/* Hero Section Full-Screen Vertical Card Slider */}
      <HeroCardSlider>
        <IntroStory />
        <Events />
        <Details />
        <People />
        <Footer />
      </HeroCardSlider>
    </main>
  );
}
