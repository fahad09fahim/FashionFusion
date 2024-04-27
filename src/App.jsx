import Banner from "./components/Home/Banner/Banner"
import NavBar from "./components/Home/NavBar/NavBar"
import NewArrivals from "./components/Home/NewArrivals/NewArrivals"
import Offer from "./components/Home/OfferPage/Offer"
import Voucher from "./components/Home/Voucher/Voucher"
import Youngs from "./components/Home/Youngs/Youngs"
import Sponsor from "./components/Home/sponsor/Sponsor"

function App() {


  return (
    <>
      <NavBar/>
      <Banner/>
      <Sponsor/>
      <NewArrivals/>
      <Offer/>
      <Youngs/>
      <Voucher/>
    </>
  )
}

export default App
