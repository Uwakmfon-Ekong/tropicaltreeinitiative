"use client";
import Image from "next/image";

const partners = [
  {
    name: "TRCC",
    logo: "/tropslogo.png",
    url: "https://tropicalcentre.org/",
  },
  {
    name: "UNEP",
    logo: "/cleanairlogo.png",
    url: "https://clean-air-tree.pxxl.pro/",
  },
 {
    name: "TRCC",
    logo: "/tropslogo.png",
    url: "https://tropicalcentre.org/",
  },
  {
    name: "UNEP",
    logo: "/cleanairlogo.png",
    url: "https://clean-air-tree.pxxl.pro/",
  },
  {
    name: "TRCC",
    logo: "/tropslogo.png",
    url: "https://tropicalcentre.org/",
  },
  
];

export default function Partners() {
  return (
    <section className="bg-cream py-24 px-[5%] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="text-xs font-medium text-green-light uppercase tracking-[0.12em] block mb-3">
          Our Partners
        </span>
        {/* <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-semibold text-green-dark mb-3">
          Working Together for Impact
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We collaborate with global and local organizations driving
          environmental sustainability and climate action.
        </p> */}
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-16 animate-scroll whitespace-nowrap w-max">
          {[...partners, ...partners].map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-40 h-24  rounded-xl hover:shadow-md transition-all"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={120}
                height={60}
                className="object-cover  transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}