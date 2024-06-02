import { dataAbout, dataCategories } from "../constants";

const FooterSection = () => {
  const textP =
    "text-xs text-neutral-500 font-normal tracking-wide py-1 cursor-pointer hover:text-neutral-100 md:text-sm";
  return (
    <div className=" w-full flex justify-center flex-col items-center bg-neutral-900 rounded-t-2xl pt-5 md:flex-row">
      <div className="w-full flex text-neutral-50 justify-center items-center md:items-center py-2 flex-row md:flex-col">
        <h1 className="text-1xl font-semibold tracking-wide cursor-default md:text-2xl md:pe-4 pe-4 border-r-2 border-neutral-500 md:border-none">
          Dhome
        </h1>
        <h1 className="text-1xl font-light text-neutral-600 tracking-wider cursor-default md:text-2xl ps-4 md:ps-0 ">
          &#169; 2024 NN
        </h1>
      </div>
      <div className="hidden w-full py-2  mx-0 gap-20 lg:flex md:bg-neutral-700 bg-neutral-900 rounded-t-2xl justify-center items-start md:mx-5">
        <div className=" font-semibold  flex-col tracking-wide py-4 md:py-2 md:flex-row">
          <span className="font-semibold cursor-default ">Shop</span>
          {dataCategories.map((item, i) => (
            <p key={i} className={`${textP}`}>
              {item.title}
            </p>
          ))}
        </div>
        <div className=" flex-col tracking-wide py-2">
          <span className="font-semibold cursor-default">About</span>
          {dataAbout.map((item, i) => (
            <p key={i} className={`${textP}`}>
              {item.label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
