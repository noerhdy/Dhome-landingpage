import { dataCategories } from "../constants";

const CategoriesSection = () => {
  const boxStyle = "relative rounded-2xl overflow-hidden group ";

  return (
    <>
      <div
        id="categories"
        className="pt-20 mx-0 text-4xl font-semibold tracking-wide cursor-default md:mx-40"
      >
        Categories
      </div>
      <div className="categories grid grid-cols-1 auto-rows-[250px]  gap-5 pt-10 md:pt-20 pb-24 mx-0 md:grid-cols-2 md:mx-40 md:auto-rows-[350px]">
        {dataCategories.map((item, i) => (
          <div key={i} className={`${boxStyle}`}>
            <img
              className="object-cover duration-300 ease-in-out group img brightness-50 hover:scale-110 hover:filter-none "
              src={item.image}
            ></img>
            <div className="absolute bottom-0 left-0 px-10 py-5 rounded-tr-xl bg-blur text-slate-50 group-hover:bg-neutral-50 group-hover:text-slate-950 pe-20">
              <h2 className="font-normal tracking-wide">{item.title}</h2>
              <h2 className="font-light">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesSection;
