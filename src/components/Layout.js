import React from "react";
import Header from "./header";
// import Profile from "../../assets/img/picskel.png";

const Layout = ({ type, children }) => {
    return (
        <div className="flex flex-col">
            <Header type={type} funtion={() => { }} />
            <div className="flex flex-1 mt-20">{children}</div>
        </div>
    );
};

export default Layout;
