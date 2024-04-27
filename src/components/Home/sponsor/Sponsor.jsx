import Marquee from "react-fast-marquee";
import amazon from "../../../assets/image/amazon.png";
import hm from "../../../assets/image/hm.png";
import levis from "../../../assets/image/levis.png";
import shopify from "../../../assets/image/shopify.png";
import lacoste from "../../../assets/image/lacoste.png";
import obey from "../../../assets/image/obey.png";
const Sponsor = () => {
  return (
    <div className="">
      <Marquee pauseOnHover={true} className="my-14 bg-color1 p-6 flex items-center">
       <img className="w-auto h-auto pr-12" src={amazon} alt="" />
       <img  className="w-auto h-auto pr-12" src={hm} alt="" />
       <img  className="w-auto h-auto pr-12" src={levis} alt="" />
       <img  className="w-auto h-auto pr-12" src={shopify} alt="" />
       <img  className="w-auto h-auto pr-12" src={obey} alt="" />
       <img  className="w-auto h-auto pr-12" src={lacoste} alt="" />
      </Marquee>
    </div>
  );
};

export default Sponsor;
