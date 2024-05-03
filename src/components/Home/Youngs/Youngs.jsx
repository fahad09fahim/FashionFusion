import { FaArrowRight } from "react-icons/fa";
import youngs1 from "../../../assets/image/youngs/youngs1.png";
import youngs2 from "../../../assets/image/youngs/youngs2.png";

const Youngs = () => {
  return (
    <div className="m-8 md:m-24 ">
      <h1 className="text-xl md:text-5xl font-medium  ">Young’s Favourite</h1>
      <div className=" flex flex-col md:flex-row justify-center items-start mt-7 gap-8">
        
        <div>
          <img
            src={youngs1}
            alt=""
            className="object-cover transition-transform duration-500  scale-90 transform-gpu hover:scale-95"
          />
         <div className="ml-11 font-medium">
         <p>Trending on instagram</p>
          <button className="flex justify-center items-center gap-2 ">
            Explore Now <FaArrowRight />
          </button>
         </div>
        </div>
        <div>
          <img
            src={youngs2}
            alt=""
            className="object-cover transition-transform duration-500 scale-90 transform-gpu hover:scale-95"
          />
         <div  className="ml-11 font-medium">
         <p>All Under $40</p>
          <button className="flex justify-center items-center gap-2 ">
    
            Explore Now <FaArrowRight />
          </button>
        </div>
         </div>
      </div>
    </div>
  );
};

export default Youngs;
