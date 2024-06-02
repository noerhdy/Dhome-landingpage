import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const text = "text-2xl md:text-4xl mx-1 md:mx-2";
  const dot = "text-2xl md:text-4xl mx-2 md:mx-2";
  return (
    <div className="rounded-md bg-neutral-950 cursor-default text-neutral-50 p-4">
      <Marquee autoFill>
        <div className="overflow-hidden">
          <span className={`${dot}`}> &#x2022;</span>
          <span className={`${text}`}>Affordable</span>
          <span className={`${dot}`}> &#x2022;</span>
          <span className={`${text}`}>Sustainably</span>
          <span className={`${dot}`}> &#x2022;</span>
          <span className={`${text}`}>Quality</span>
          <span className={`${dot}`}> &#x2022;</span>
          <span className={`${text}`}>Modern</span>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
