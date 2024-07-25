// import logo from './logo.svg';
import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SpRedirectPage from "./components/SpRedirectPage";
import SetUpMarketPlace from "./components/SetUpMarketPlace";
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


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header />;<SpRedirectPage /></>} />
          <Route path="/set-market" element={<><Header />;<SetUpMarketPlace /></>} />
          <Route path="/profile-view-traveller" element={<><Header />;<MarketPlaceProfileOwnView /></>} />

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
