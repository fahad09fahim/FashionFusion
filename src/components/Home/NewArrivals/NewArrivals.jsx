import textBg from "../../../assets/image/arrivals/Vector 8.svg";
import sample1 from "../../../assets/image/arrivals/sample1.png";
import sample2 from "../../../assets/image/arrivals/sample2.png";
import sample3 from "../../../assets/image/arrivals/sample3.png";
import { FaArrowRight } from "react-icons/fa";

const NewArrivals = () => {
  return (
    <div className="mx-8 md:mx-14 lg:mx-24 mt-9">
      <h2
        className="tex-xl md:text-4xl font-bold bg-no-repeat bg-right-bottom w-fit"
        style={{ backgroundImage: `url(${textBg})` }}
      >
        NEW ARRIVALS
      </h2>
      {/* card image code */}
      <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center md:justify-between gap-24">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={sample1} alt="sample1" className="object-cover transition-transform duration-500 transform-gpu hover:scale-110" />
          </figure>
          <div className="card-body">
            <div>
              <h1 className="text-xl font-semibold mb-2">Hoodies & Sweetshirt</h1>
              <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-950">
                Explore Now! <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={sample2} alt="sample2" className="object-cover transition-transform duration-500 transform-gpu hover:scale-110" />
          </figure>
          <div className="card-body">
     
            <div>
              <h1 className="text-xl font-semibold mb-2">Coats & Parkas</h1>
              <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-950">
                Explore Now! <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={sample3} alt="sample3" className="object-cover transition-transform duration-500 transform-gpu hover:scale-110" />
          </figure>
          <div className="card-body">
         
            <div>
              <h1 className="text-xl font-semibold mb-2">Tees & T-Shirt</h1>
              <button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-950">
                Explore Now! <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
