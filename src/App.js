// import logo from './logo.svg';
import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SpRedirectPage from "./components/SpRedirectPage";
import SetUpMarketPlace from "./components/SetUpMarketPlace";

import SubscriptionPlan from "./components/SubscriptionPlan";
import Chat from "./components/Chat";
import SpHotelProfileView from "./components/SpHotelProfileView";
import EditMarketPlace from "./components/EditMarketPlace";
import SpRestaurantProfileView from "./components/SpRestaurantProfileView";
import SpEquipmentRentalProfileView from "./components/SpEquipmentRentalProfileView";

import MarketPlaceProfileOwnView from "./components/MarketPlaceProfileOwnView";
import SignUp from "./Pages/SignUp/signup"
import Login from "./Pages/login"
import Community from "./Pages/Community/landing"



function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
    <div>

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpRedirectPage />} />
          <Route path="/set-market" element={<SetUpMarketPlace />} />
          <Route path="/edit-market" element={<EditMarketPlace />} />
          <Route path="/hotel-sp-view" element={<SpHotelProfileView />} />
          <Route path="/rest-sp-view" element={<SpRestaurantProfileView />} />
          <Route path="/equip-sp-view" element={< SpEquipmentRentalProfileView/>} />
          <Route path="/subscription-plan" element={<SubscriptionPlan />} />
          <Route path="/chat" element={<Chat />} />
 
// Add Header component  to all routes parts like this  and remove header component which is above BrowserRouter line
            
            
//           <Route path="/" element={<><Header />;<SpRedirectPage /></>} />
//           <Route path="/set-market" element={<><Header />;<SetUpMarketPlace /></>} />
//           <Route path="/profile-view-traveller" element={<><Header />;<MarketPlaceProfileOwnView /></>} />

          {/* log in and signup */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          

          {/* Community */}
          <Route path="/community" element={<Community/>} />

        </Routes>
      </BrowserRouter>




    </div>
  );
}

export default App;
