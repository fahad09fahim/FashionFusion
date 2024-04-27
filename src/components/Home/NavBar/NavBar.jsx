import logo from "../../../assets/logo/Vector.svg"

const NavBar = () => {
    const navList=<>
    <li>CATALOGUE</li>
    <li>FASHION</li>
    <li>FAVOURITE</li>
    <li>LIFESTYLE</li>
    </>
    return (
     <nav className="mx-24 mt-9">
        <div className="flex justify-between items-center">
        <div className="flex">
            <img src={logo} alt="" />
          <h1 className="text-3xl font-bold text-black cursor-pointer">FashionFusion</h1>
        </div>
        <div className="flex gap-11 text-lg items-center">
           <ul className="flex justify-between gap-10 cursor-pointer text-lg font-semibold">{navList}</ul> 
            <button className="bg-neutral-950 text-color2 px-5 py-3 rounded-lg font-semibold">SIGN UP</button>
        </div>
     </div>
     </nav>
    );
};

export default NavBar;