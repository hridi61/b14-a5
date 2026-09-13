import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4">
          <a href="#technologies" className="px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-orange-400">
            Explore Technologies
          </a>
          <a href="#about" className="px-6 py-3 rounded-lg font-semibold border border-gray-300 text-gray-700">
            Learn More
          </a>
        </div>
      </div>
      <img src={heroImage} alt="Development stack illustration" className="w-full max-w-md mx-auto" />
    </section>
  );
}

export default Hero;