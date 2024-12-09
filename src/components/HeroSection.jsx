import background from "../assets/img/bg.webp";

export const buttonH =
  "bg-neutral-900 py-3 px-8 font-semibold text-neutral-50 rounded-full ease-in-out duration-300 hover:bg-[#EF9B6D]";

const HeroSection = () => {
  return (
    <header
      id="header"
      className="relative flex flex-col justify-center pt-20 "
    >
      {/* Background Image */}
      <div className="relative w-full max-w-[1236px]   mx-auto">
        <img
          className="object-cover w-full h-[80vh] lg:h-[86vh] rounded-xl"
          src={background}
          alt="A beautiful interior space"
          draggable="false"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 text-center">
          {/* Heading */}
          <span className="space-y-4 text-5xl font-bold tracking-wide lg:text-8xl text-neutral-50">
            <h1>Your Space,</h1>
            <h1>Your Style</h1>
          </span>

          {/* Subtitle */}
          <p className="px-4 text-sm tracking-wide lg:text-base text-neutral-200">
            Find and make your interior really stand out from the box.
          </p>

          {/* Call-to-Action */}
          <a
            href="#"
            className={buttonH}
            aria-label="Shop Now to discover amazing interior designs"
          >
            Explore Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
