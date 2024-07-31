// import logo from './logo.svg';
import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SpRedirectPage from "./Pages/SP common/SpRedirectPage";
import SetUpMarketPlace from "./Pages/SP common/SetUpMarketPlace";

import SubscriptionPlan from "./Pages/SP common/SubscriptionPlan";
import Chat from "./Pages/SP common/Chat";
import SpHotelProfileView from "./Pages/Hotel/SpHotelProfileView";
import EditMarketPlace from "./Pages/SP common/EditMarketPlace";
import SpRestaurantProfileView from "./Pages/Restaurant/SpRestaurantProfileView";
import SpEquipmentRentalProfileView from "./Pages/EquipmentRental/SpEquipmentRentalProfileView";

import SignUp from "./Pages/SignUp/signup";
import Login from "./Pages/login";
import Community from "./Pages/Community/landing";
// import LocationSelector from "./components/locationSelector";
import Resetpw from "./Pages/resetpw";

import Landing from "./Pages/landing";


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
                <Header />;<SpRedirectPage />
              </>
            }
          />
          <Route
            path="/set-market"
            element={
              <>
                <Header />;<SetUpMarketPlace />
              </>
            }
          />
          <Route
            path="/edit-market"
            element={
              <>
                <Header />;<EditMarketPlace />
              </>
            }
          />
          <Route
            path="/hotel-sp-view"
            element={
              <>
                <Header />;<SpHotelProfileView />
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
            path="/equip-sp-view"
            element={
              <>
                <Header />;<SpEquipmentRentalProfileView />
              </>
            }
          />
          <Route
            path="/subscription-plan"
            element={
              <>
                <Header />;<SubscriptionPlan />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header />;<Chat />
              </>
            }
          />

          {/* log in and signup */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset_password" element={<Resetpw />} />


          {/* Community */}
          <Route path="/community" element={<Community />} />
          <Route path="/landing" element={<Landing />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
