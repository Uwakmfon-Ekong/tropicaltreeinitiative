export default function ProjectsPage() {
  return (
    <>
      <main className="bg-cream text-green-dark px-[5%] py-32 text-center">
        <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.1] font-semibold mb-6">
          Our Projects
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
          Discover the impactful projects we're working on to restore ecosystems and promote sustainable practices.
        </p>

        <a
          href="/projects"
          className="inline-block bg-green-dark text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Learn More
        </a>
      </main>
    </>
  );
}
