import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-2  ">
      <div className="py-2 mx-5 relative backdrop-blur-lg bg-neutral-900 lg:text-sm rounded-md md:mx-24">
        <div className="flex justify-between items-center">
          <span className=" text-base font-semibold ml-4 text-neutral-50 md:bg-neutral-900 bg-orange-500 px-16 rounded-md md:justify-start tracking-wide cursor-default md:ml-8">
            Dhome
          </span>
          <ul className="hidden lg:flex space-x-16  text-neutral-50 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:font-bold ease duration-300 tracking-wider hover:text-orange-500 "
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className=" mr-5 md:mr-24 hidden lg:flex justify-center items-center">
            <a href="#" className="py-2 px-3 text-neutral-50">
              Cart
            </a>
          </div>
          <div className=" lg:hidden md:flex flex-col justify-end mr-5  md:mr-24 ">
            <button onClick={toggleNavbar} style={{ color: "#FFF" }}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed top-9 z-10 rounded-2xl   bg-neutral-900  w-full p-10 flex flex-col justify-center items-center lg:hidden">
              <ul className=" text-neutral-50 ">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:font-bold ease-in-out duration-300 tracking-wider py-4 hover:text-orange-500"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
