const team = [
  { initials: "IN", name: "Mr. Ikpongke Nkanta", role: "Chief Executive Officer", color: "bg-green-light" },
  { initials: "NU", name: "Nse Ukpannah", role: "Secretary", color: "bg-earth" },
  { initials: "MU", name: "Martins Udoh", role: "Director of Operations", color: "bg-[#52796f]" },
];

const partners = ["FasterCapital", "We4All", "ACES", "Network for Social Change"];

export default function TeamAndPartners() {
  return (
    <>
      {/* TEAM */}
      <section id="team" className="bg-earth-light px-[5%] py-24">
        <div className="text-center mb-12">
          <span className="text-xs font-medium text-green-light uppercase tracking-[0.12em] mb-3 block">
            The People
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold leading-[1.15] text-green-dark">
            Our Leadership Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-[20px] p-8 text-center border border-green-light/15 hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className={`w-20 h-20 rounded-full ${m.color} flex items-center justify-center font-serif text-3xl font-semibold text-white mx-auto mb-4`}
              >
                {m.initials}
              </div>
              <h3 className="font-serif text-xl font-semibold text-green-dark mb-1">
                {m.name}
              </h3>
              <p className="text-[13px] text-green-light uppercase tracking-widest">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <div className="bg-cream px-[5%] py-14">
        <p className="text-center text-[11px] text-gray-400 uppercase tracking-[0.1em] mb-6">
          Our Partners & Collaborators
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {partners.map((p) => (
            <div
              key={p}
              className="bg-white border border-green-light/15 rounded-xl px-6 py-3 text-[13px] text-gray-500 font-medium tracking-wide"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
