import background from "../assets/img/bglv.webp";

export const buttonH =
  "bg-neutral-900 py-2 px-4 font-medium text-neutral-50  rounded-full ease-in-out duration-300 hover:bg-orange-500 hover:text-neutral-50";
const HeroSection = () => {
  return (
    <header>
      <div className="relative mx-5 md:mx-24">
        <div
          className=" rounded-md h-screen overflow-hidden bg-no-repeat bg-cover  "
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <div className="w-full top-0 flex justify-center absolute">
          <div className="flex flex-col justify-center items-center">
            <h1 className="mt-40 lg:mt-40 text-6xl font-semibold sm:text-8xl text-center tracking-wide  text-neutral-50 ">
              Craft Your <br></br>Dreams
            </h1>
            <span className="my-5 lg:my-5 text-center text-xs sm:text-base tracking-wide text-neutral-50 ">
              find and make your interior really stand out from the box
            </span>
            <div className="lg:flex justify-center items-center mb-10">
              <a href="#" className={`${buttonH}`}>
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
