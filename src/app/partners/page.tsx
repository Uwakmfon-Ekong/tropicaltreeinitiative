import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const partners = [
  { name: "TRCC", logo: "/tropslogo.png", url: "https://tropicalcentre.org/" },
  {
    name: "Clean Air Trees",
    logo: "/cleanairlogo.png",
    url: "https://clean-air-tree.pxxl.pro/",
  },
  {
    name: "CO2 Balance",
    logo: "/co2balancelogo.avif",
    url: "https://co2balance.com/",
  },
  {
    name: "Global Landcare",
    logo: "/globallandcarelogo.webp",
    url: "https://globallandcare.org/",
  },
  { name: "SDG Program", logo: "/sdgeflogo.png", url: "https://sgp.undp.org/" },
  {
    name: "Pittsburgh Zoo",
    logo: "/pzalogo.svg",
    url: "https://www.pittsburghzoo.org/",
  },
  { name: "PRCF", logo: "/prcf.jpeg", url: "https://prcfoundation.org/" },
  {
    name: "First Climate",
    logo: "/firstclimate.png",
    url: "https://www.firstclimate.com/en/",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        {/* HERO */}
        <section
          className="bg-cover bg-center bg-no-repeat py-24 px-6 text-center relative"
          style={{ backgroundImage: "url('/tree5.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/60" />
          <div className="relative z-10 pt-10">
            <span className="text-xs font-semibold text-[#a5d6a7] uppercase tracking-widest block mb-3">
              Our Network
            </span>
            <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
              Partners & Collaborators
            </h1>
            <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
              TRCC works alongside a growing network of global and local
              partners committed to environmental conservation, sustainable
              development, and community empowerment.
            </p>
          </div>
        </section>

        {/* PARTNERS GRID */}
        <section className="bg-[#f1f8e9] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-[#40916c] uppercase tracking-widest block mb-2">
                Who We Work With
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">
                Our Global Partners
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Together with our partners we are building a greener, more
                sustainable future for communities across Nigeria and beyond.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-[#c8e6c9] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-[#40916c] hover:-translate-y-1 hover:shadow-md transition-all duration-200 no-underline group"
                >
                  <div className="w-full h-16 relative flex items-center justify-center">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <p className="text-xs font-semibold text-[#1a3a2a] uppercase tracking-widest text-center">
                    {p.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* BECOME A PARTNER */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-[#40916c] uppercase tracking-widest block mb-3">
                Work With Us
              </span>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-5 leading-snug">
                Become a Partner
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We are always looking to collaborate with organisations,
                businesses, schools, and individuals who share our commitment to
                environmental conservation and sustainable development.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you want to fund a project, provide technical support,
                or simply spread the word — there is a place for you in the TRCC
                network.
              </p>
              <Link
                href="/contact"
                className="bg-[#1a3a2a] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#2d6a4f] transition-colors no-underline inline-block"
              >
                Get in Touch
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "NGOs & Nonprofits",
                  desc: "Collaborate on conservation and community programs across Nigeria.",
                },
                {
                  title: "Businesses",
                  desc: "Offset your carbon footprint through tree planting and green initiatives.",
                },
                {
                  title: "Schools & Universities",
                  desc: "Partner on environmental education and research programs.",
                },
                {
                  title: "Government Agencies",
                  desc: "Work together on policy, reforestation, and sustainable development goals.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#f1f8e9] border border-[#c8e6c9] rounded-2xl p-5 hover:border-[#40916c] transition-colors"
                >
                  <div className="w-8 h-1.5 rounded-full bg-[#40916c] mb-3" />
                  <h3 className="text-sm font-bold text-[#1a3a2a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1a3a2a] py-20 px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Together We Can Do More
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8 leading-relaxed">
            Join our growing network of partners and help us restore Nigeria's
            forests, protect biodiversity, and build sustainable communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#40916c] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#52b788] transition-colors no-underline"
            >
              Partner With Us
            </Link>
            <Link
              href="/donate"
              className="border-2 border-white/50 text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Donate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
