// import logo from './logo.svg';
import "./assets/styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import SpRedirectPage from "./components/SpRedirectPage";
import SetUpMarketPlace from "./components/SetUpMarketPlace";
import MarketPlaceProfileOwnView from "./components/MarketPlaceProfileOwnView";
import Signin from "./components/signin"


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
          <Route path="/profile-view-traveller" element={<MarketPlaceProfileOwnView />}
          />
        </Routes>
      </BrowserRouter>

      {/* <Signin /> */}

    </div>
  );
}

export default App;
