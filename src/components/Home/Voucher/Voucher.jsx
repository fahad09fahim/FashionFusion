import mobileApp from "../../../assets/image/voucher/mobileApp.png";
import googlePlay from "../../../assets/image/voucher/googlePlay.png";
import appStore from "../../../assets/image/voucher/appStore.png";

const Voucher = () => {
    return (
        <div className="m-8 md:m-24 flex justify-center items-center gap-14 flex-col-reverse md:flex-row" >
            <div>
                <div className=" flex flex-col gap-10 mb-2">
                    <h1 className="text-2xl md:text-6xl font-medium">DOWNLOAD APP & <br />
GET THE VOUCHER!</h1>
<p>Get 30% off for first transaction using
Rondovision mobile app for now.</p>
                </div>
                <div className=" flex  gap-2">
                       <img className="w-1/2 md:w-full h-1/2 md:h-full" src={googlePlay} alt="" />
                       <img className="w-1/2 md:w-full h-1/2 md:h-full" src={appStore} alt="" />
                </div>
            </div>
            <div>
                 <img src={mobileApp} alt="" />
            </div>
        </div>
    );
};

export default Voucher;