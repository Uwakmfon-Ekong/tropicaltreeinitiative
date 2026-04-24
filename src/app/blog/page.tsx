export default function BlogPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="bg-cream text-green-dark px-[5%] py-32 text-center">
        <h1 className="font-serif text-[clamp(40px,6vw,72px)] leading-[1.1] font-semibold mb-6">
          Our Blog
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
          Stay updated with the latest news and insights from the Tropical Tree Initiative.
        </p>

        <a
          href="/blog"
          className="inline-block bg-green-dark text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Read More
        </a>
      </main>
    </>
  );
}
