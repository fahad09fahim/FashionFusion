import banner from "../../../assets/image/banner.png";
import rec1 from '../../../assets/image/rec1.png';
import rec2 from '../../../assets/image/rec2.png';
const Banner = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row md:justify-between items-center mx-8 md:mx-16 lg:mx-24 mt-3 md:mt-6 lg:mt-9 bg-[#f4f6f558] rounded-3xl p-8 md:p-0 lg:p-24">
      <div className="text-center">
        <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-black">
          <span className="-rotate-1 inline-block px-7" style={{ backgroundImage: `url(${rec1})`}} >LET’S</span> <br />
          EXPLORE <br />
          <span className="-rotate-1 inline-block px-7" style={{ backgroundImage: `url(${rec2})`}} >UNIQUE </span> <br />
          CLOTHES.
        </h1>
        <p className="text-lg md:text-2xl my-1 md:my-3">Live for Influential and Innovative fashion!</p>
        <button className="bg-neutral-950 text-color2 px-2 md:px-5 py-1 md:py-3 rounded-lg font-semibold">shop now</button>
      </div>
      <div className="w-full md:w-1/2 ">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
