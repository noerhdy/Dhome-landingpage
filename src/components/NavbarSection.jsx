import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <div className="flex flex-col items-center overflow-hidden">
      <nav className="fixed top-0 z-50 w-full max-w-screen-xl px-6 py-2 ">
        <div className="relative py-2 rounded-md bg-neutral-900 lg:text-sm ">
          <div className="flex items-center justify-between px-4 md:px-16">
            {/* logo */}
            <a href="#header">
              <div className="px-2 text-base font-semibold tracking-wide rounded-md text-neutral-50">
                Furni
                <br />
                Craft
              </div>
            </a>

            <ul className="hidden space-x-16 lg:flex text-neutral-50">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    className="tracking-wider duration-300   hover:text-[#EF9B6D] "
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="items-center justify-center hidden lg:flex">
              <a href="#header" className="px-3 py-2 text-neutral-50">
                Cart
              </a>
            </div>
            <div className="flex-col justify-end lg:hidden md:flex ">
              <button onClick={toggleNavbar} style={{ color: "#FFF" }}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
            {mobileDrawerOpen && (
              <div className="absolute inset-x-0 py-4 rounded-b-lg shadow-lg top-16 bg-neutral-900 lg:hidden">
                <ul className="flex flex-col items-start px-4 py-6 space-y-8 text-neutral-50">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-base tracking-wider transition duration-300 hover:text-[#EF9B6D]  "
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
    </div>
  );
};

export default Navbar;
