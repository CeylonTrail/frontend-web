// import logo from './logo.svg';
import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SpRedirectPage from "./components/SpRedirectPage";
import SetUpMarketPlace from "./components/SetUpMarketPlace";
import MarketPlaceProfileOwnView from "./components/MarketPlaceProfileOwnView";
import Signin from "./components/signin"
import SubscriptionPlan from "./components/SubscriptionPlan";
import Chat from "./components/Chat";
import SpHotelProfileView from "./components/SpHotelProfileView";
import EditMarketPlace from "./components/EditMarketPlace";
import SpRestaurantProfileView from "./components/SpRestaurantProfileView";


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
          <Route
            path="/profile-view-traveller"
            element={<MarketPlaceProfileOwnView />}
          />
          <Route path="/hotel-sp-view" element={<SpHotelProfileView />} />
          <Route path="/rest-sp-view" element={<SpRestaurantProfileView />} />
          <Route path="/subscription-plan" element={<SubscriptionPlan />} />
          <Route path="/chat" element={<Chat />} />
        
        </Routes>
      </BrowserRouter>

      {/* <Signin /> */}
    </div>
  );
}

export default App;
