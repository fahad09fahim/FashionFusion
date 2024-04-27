import offerTemplate from "../../../assets/image/offerTemplate.png";

const Offer = () => {
  return (
    <div className="bg-color1 flex justify-center my-24 items-center">
      <div>
        <img src={offerTemplate} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-8xl font-medium"><span className="bg-color2 px-4  -rotate-1 inline-block ">PAYDAY</span> <br /> 
            SALE NOW</h1>
        <p className="text-2xl">
          Spend minimal $100 get 30% off <br /> voucher code for your next purchase
        </p>
        <p className="font-bold">1 June - 10 June 2024</p>
        <p>*Terms & Conditions apply</p>
<div>
<button className="bg-neutral-950 text-color2 px-5 py-3 rounded-lg font-semibold">Shop Now</button>
</div>
    
      </div>
    </div>
  );
};

export default Offer;
