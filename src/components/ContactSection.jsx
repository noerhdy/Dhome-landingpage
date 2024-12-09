import cp from "../assets/img/cp.webp";
import { buttonH } from "./HeroSection";

const ContactSection = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center w-full py-10 md:flex-row md:py-20 "
    >
      <div className="container overflow-hidden  max-w-[600px] h-1/2 md:h-[auto] md:w-[800px] rounded-2xl">
        <img className="object-cover bg-center aspect-square" src={cp} />
      </div>
      <div className="flex flex-col items-start w-full md:items-center ">
        <div className="flex flex-col items-start py-4 space-y-4 ">
          <span className="text-4xl font-semibold tracking-wide ">
            <h1>We are crafting</h1>
            <h1>what you want</h1>
          </span>
          <p className="pb-8 text-base md:text-xl">
            We are creating beautiful, unique designs <br /> and furniture that
            will perfectly match your <br />
            vision for your home
          </p>
          <div className="flex items-start w-full ">
            <a
              href="#"
              className={`${buttonH}`}
              onClick={() =>
                handleClick(
                  "https://dribbble.com/shots/25299776-FurniCraft-Modern-Furniture-Landing-Page"
                )
              }
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
