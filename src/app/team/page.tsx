import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Programme Director",
    role: "Co-founder & CEO",
    bio: "Leads TRCC's overall strategy and oversees mangrove restoration, conservation, and community empowerment programs across the Niger Delta.",
  },
  {
    name: "Field Coordinator",
    role: "Conservation Operations",
    bio: "Coordinates on-the-ground tree planting events, site assessments, and community engagement across project locations.",
  },
  {
    name: "Community Liaison",
    role: "Education & Outreach",
    bio: "Manages relationships with rural communities, leading training sessions on sustainable agriculture and conservation practices.",
  },
  {
    name: "Biodiversity Lead",
    role: "Research & Monitoring",
    bio: "Oversees habitat restoration efforts and biodiversity monitoring for endangered species across TRCC project sites.",
  },
  {
    name: "Programme Manager",
    role: "Partnerships & Development",
    bio: "Builds and maintains partnerships with NGOs, government agencies, and corporate partners supporting TRCC's mission.",
  },
  {
    name: "Administrative Lead",
    role: "Operations & Finance",
    bio: "Manages day-to-day operations, ensuring resources are directed efficiently toward conservation and community programs.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="text-green-dark">

        {/* HERO */}
        <section
          className="px-[5%] py-36 flex flex-col items-center justify-center text-center relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/tree5.jpeg')" }}
        >
          <div className="absolute inset-0 bg-[#1a3a2a]/60" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-green-accent mb-4 block">
              Our People
            </span>
            <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.1] text-cream mb-6 tracking-tight">
              Meet Our Team
            </h1>
            <p className="text-cream/70 mx-auto text-lg leading-relaxed max-w-[520px]">
              The people behind TRCC's two decades of community-driven conservation work across the Niger Delta.
            </p>
          </div>
        </section>

        {/* TEAM GRID */}
        <section className="bg-white px-[5%] py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-green-light/15 bg-cream overflow-hidden hover:border-green-light transition-all duration-300"
                >
                  <div className="h-56 bg-gradient-to-br from-green-mid to-green-dark flex items-center justify-center">
                    <span className="text-white/20 text-5xl font-serif">
                      {member.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-green-dark mb-1">{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-green-light mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN THE TEAM */}
        <section className="bg-green-dark text-white px-[5%] py-24 text-center">
          <h2 className="font-serif text-4xl mb-4">Want to Work With Us?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            We're always looking for passionate people to join our conservation efforts, whether as staff, volunteers, or partners.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-green-light px-8 py-3 rounded-full text-sm hover:bg-green-bright transition no-underline"
            >
              Get in Touch
            </Link>
            <Link
              href="/volunteer"
              className="border border-white/30 px-8 py-3 rounded-full text-sm hover:bg-white/10 transition no-underline"
            >
              Volunteer
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}