import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/gallerygrid";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="text-green-dark">

        {/* HERO */}
        <section
          className="px-[5%] py-36 flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/trcc1.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/90" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">
              Media
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.1] text-cream mb-6 tracking-tight">
              Photo Gallery
            </h1>
            <p className="text-cream/70 mx-auto text-lg leading-relaxed max-w-[520px]">
              Moments from our mangrove restoration projects, community training sessions, and conservation work across Nigeria.
            </p>
          </div>
        </section>

        <GalleryGrid />

      </main>
      <Footer />
    </>
  );
}