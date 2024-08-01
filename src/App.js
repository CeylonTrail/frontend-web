// import logo from './logo.svg';
import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SpRedirectPage from "./Pages/SP common/SpRedirectPage";
import SetUpMarketPlace from "./Pages/SP common/SetUpMarketPlace";

import SubscriptionPlan from "./Pages/SP common/SubscriptionPlan";
import Chat from "./Pages/SP common/Chat";
import SpHotelProfileView from "./Pages/Hotel/SpHotelProfileView";
import TrHotelProfileView from "./Pages/Hotel/TrHotelProfileView";
import EditMarketPlace from "./Pages/SP common/EditMarketPlace";
import SpRestaurantProfileView from "./Pages/Restaurant/SpRestaurantProfileView";
import TrRestaurantProfileView from "./Pages/Restaurant/TrRestaurantProfileView";
import SpEquipmentRentalProfileView from "./Pages/EquipmentRental/SpEquipmentRentalProfileView";
import TrEquipmentRentalProfileView from "./Pages/EquipmentRental/TrEquipmentRentalProfileView";
import MarketPlace from "./Pages/SP common/MarketPlace";
import SPReviews from "./Pages/SP common/SPReviews";
import SPViewReviews from "./Pages/SP common/SPViewReviews";
import SavedItemsPage from "./Pages/SP common/SavedItemsPage";

import SignUp from "./Pages/SignUp/signup";
import Login from "./Pages/login";
import Community from "./Pages/Community/landing";
// import LocationSelector from "./components/locationSelector";
import Resetpw from "./Pages/resetpw";
import TravellerProfile from "./Pages/Community/Profile"
import Landing from "./Pages/landing";


import MassageBoxPop from "./components/MassageBoxPop";


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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />
          <Route
            path="/sp"
            element={
              <>
                <SpRedirectPage />
              </>
            }
          />
          <Route
            path="/set-market"
            element={
              <>
                <SetUpMarketPlace />
              </>
            }
          />
          <Route
            path="/edit-market"
            element={
              <>
                <EditMarketPlace />
              </>
            }
          />
          <Route
            path="/hotel-sp-view"
            element={
              <>
                <SpHotelProfileView />
              </>
            }
          />
          <Route
            path="/hotel-tr-view"
            element={
              <>
                <TrHotelProfileView />
              </>
            }
          />
          <Route
            path="/rest-sp-view"
            element={
              <>
                <Header />;<SpRestaurantProfileView />
              </>
            }
          />
          <Route
            path="/rest-tr-view"
            element={
              <>
                <Header />;<TrRestaurantProfileView />
              </>
            }
          />
          <Route
            path="/equip-sp-view"
            element={
              <>
                <Header />;<SpEquipmentRentalProfileView />
              </>
            }
          />
          <Route
            path="/equip-tr-view"
            element={
              <>
                <Header />;<TrEquipmentRentalProfileView />
              </>
            }
          />
          <Route
            path="/subscription-plan"
            element={
              <>
                <SubscriptionPlan />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Chat />
              </>
            }
          />
          <Route
            path="/sp-review"
            element={
              <>
                <SPReviews />
              </>
            }
          />
          <Route
            path="/sp-view-review"
            element={
              <>
                <SPViewReviews />
              </>
            }
          />

          <Route
            path="/market"
            element={
              <>
                <MarketPlace />
              </>
            }
          />
          <Route
            path="/saved"
            element={
              <>
                <Header />;<SavedItemsPage />
              </>
            }
          />

          {/* log in and signup */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset_password" element={<Resetpw />} />

          {/* Community */}
          <Route path="/community" element={<Community />} />
          <Route
            path="/mbpop"
            element={
              <MassageBoxPop
                message={"shdbadh"}
                description={"hdfyauwheriuahwrihariuaiuwrfuiHWRF"}
              />
            }
          />

          <Route path="/profile" element={<TravellerProfile />} />

          {/* Home Page */}
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
