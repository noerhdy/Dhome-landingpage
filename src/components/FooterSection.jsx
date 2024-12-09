import { dataAbout, dataCategories } from "../constants";

const FooterSection = () => {
  const textP =
    "text-xs text-neutral-500 font-normal tracking-wide py-1 cursor-pointer hover:text-neutral-100 md:text-sm";

  return (
    <footer id="contact" className="w-full pb-6 bg-neutral-900 rounded-t-2xl">
      <div className="flex flex-col-reverse items-center justify-between px-12 pt-6 md:pt-12 md:flex-row ">
        {/* Logo Section */}
        <div className="flex flex-col w-full py-2 font-bold tracking-wide text-8xl text-neutral-700">
          <h1>Furni</h1>
          <h1>Craft</h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-row justify-between w-full py-2 md:w-1/4 md:items-start ">
          {/* Shop Links */}
          <div className="flex flex-col">
            <span className="font-semibold text-neutral-50">Shop</span>
            {dataCategories.map((item, i) => (
              <p key={i} className={textP}>
                {item.title}
              </p>
            ))}
          </div>

          {/* About Links */}
          <div className="flex flex-col">
            <span className="font-semibold text-neutral-50">About</span>
            {dataAbout.map((item, i) => (
              <p key={i} className={textP}>
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
