import Header from "../../components/header2";
import Traveler from "../../assets/img/Traveller signup.svg"
import { useState } from "react";
import { PrimaryButton, } from "../../components/Button";
import TravellerSignUp from "./travellerSignUp";
import ServiceProviderSignUp from "./serviceProviderSignUp";

export default () => {
    const [isTravellerSignup, setIsTravellerSignup] = useState(true);

    const handleTravellerClick = () => {

        setIsTravellerSignup(true);
    };

    const handleServiceProviderClick = () => {

        setIsTravellerSignup(false);
    };
    return (
        <div className="w-full">
            <div className="bg-primaryDark1 h-5">
            </div>
            <Header type={"signup"} />
            <div className="flex">
                <div className="relative flex-1 hidden items-center justify-center   lg:flex h-full">
                    <div className="w-2/4 pt-14">
                        <img src={Traveler} />
                    </div>
                </div>
                <div className="flex-1 flex items-center  ">
                    <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">
                        <div className="">

                            <div className="mt-5 space-y-2">
                                <h3 className="text-primaryDark1 text-5xl font-bold ">Sign up</h3>
                                {/* <p className="">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p> */}
                            </div>
                        </div>
                        <PrimaryButton name={"Traveller"} action={handleTravellerClick} isActive={isTravellerSignup} />
                        <PrimaryButton name={"Service Provider"} action={handleServiceProviderClick} isActive={!isTravellerSignup} />
                        {isTravellerSignup ? <TravellerSignUp /> : <ServiceProviderSignUp />}




                    </div>
                </div>
            </div>
        </div>
    )
}