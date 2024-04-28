const Community = () => {
  return (
    <div className="bg-color1 text-center py-20 flex flex-col justify-center items-center gap-10">
      <div>
        <h1 className="text-4xl text-color2 font-semibold my-4">JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h1>
        <p className="text-color2 text-xl">Type your email down below and be young wild generation</p>
      </div>
      <div className="join p-1 bg-color2">
        <input className="input input-bordered join-item" placeholder="Email" />
        <button className="btn join-item rounded bg-neutral-950 text-color2 hover:text-neutral-950  ">
         Send
        </button>
      </div>
    </div>
  );
};

export default Community;
