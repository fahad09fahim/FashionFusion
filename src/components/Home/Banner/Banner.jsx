import banner from "../../../assets/image/banner.png";
import rec1 from '../../../assets/image/rec1.png';
import rec2 from '../../../assets/image/rec2.png';
const Banner = () => {
  return (
    <div className="flex justify-between items-center mx-24 mt-9 bg-[#F4F6F5] rounded-3xl p-24">
      <div>
        <h1 className="text-6xl font-bold text-black">
          <span className="" style={{ backgroundImage: `url(${rec1})`}} >LET’S</span> <br />
          EXPLORE <br />
          UNIQUE <br />
          CLOTHES.
        </h1>
        <p className="text-2xl my-3">Live for Influential and Innovative fashion!</p>
        <button className="bg-neutral-950 text-color2 px-5 py-3 rounded-lg font-semibold">shop now</button>
      </div>
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
