import cp from "../assets/img/cp.webp";
import { buttonH } from "./HeroSection";

const ContactSection = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center py-10 md:flex-row md:py-20">
      <div className="container overflow-hidden mx-5 w-[300px] h-[auto] md:w-[800px] rounded-2xl md:mx-0">
        <img className="bg-cover " src={cp}></img>
      </div>
      <div className="w-full  mx-5 md:ps-40 ps-0 flex flex-col justify-center  items-start">
        <h1 className="text-4xl font-semibold tracking-wide py-2 pt-4 md:pt-2">
          We are crafting
          <br />
          what you want
        </h1>
        <p className="text-base  py-4 md:text-xl">
          We are creating beautiful, unique designs <br /> and furniture that
          will perfectly match your <br />
          vision for your home
        </p>
        <div className="lg:flex justify-center items-center mb-5 md:mb-10">
          <a href="#" className={`${buttonH}`}>
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
