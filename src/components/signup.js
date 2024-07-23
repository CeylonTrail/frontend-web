import Header from "./header2";
import Traveler from "../assets/img/Traveller signup.svg"
import { useState } from "react";
import { PrimaryButton,SecondaryButton } from "./Button";
import TravellerSignUp from "./travellerSignUp";
import ServiceProviderSignUp from "./serviceProviderSignUp";

export default () => {
    const[isTravellerSignup, setIsTravellerSignup] = useState(true);

    const handleTravellerClick = () => {
        console.log ("traveller")
        setIsTravellerSignup(true);
    };

    const handleServiceProviderClick = () => {
        console.log ("service")
        setIsTravellerSignup(false);
    };
    return (
        <div className="w-full">
            <div className="bg-primaryDark1 h-5">
            </div>
            <Header />
            <div className="flex">
                <div className="relative flex-1 hidden items-center justify-center   lg:flex h-full">
                    <div className="w-2/4 pt-14">
                        <img src={Traveler } />
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
                        <PrimaryButton name={"Traveller"} action={handleTravellerClick} isActive={isTravellerSignup}/>
                        <PrimaryButton name={"Service Provider"} action={handleServiceProviderClick} isActive={!isTravellerSignup} />
                        {isTravellerSignup ? <TravellerSignUp /> : <ServiceProviderSignUp />}
                       
                        
                        {/* <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5 flex flex-col w-full items-center"
                        >
                            <div className="w-full flex f-row gap-1">
                                <SimpleInput pholder={"First name"} />
                                <SimpleInput pholder={"Last name"} />
                            </div>
                            <div className="w-full">
                                <Email pholder={"Email"} />
                            </div>
                            <div className="w-full">
                                <Password pholder={"Password"} />
                            </div>
                           
                            <div >
                                <PrimaryButton name={"Sign up"} />
                            </div>
                          
                        </form>
                        <div className="relative">
                            <span className="block w-full h-px bg-secondary"></span>
                            <p className="inline-block w-fit text-sm bg-SecondaryLight px-2 absolute -top-2 inset-x-0 mx-auto text-secondary">Or continue with</p>
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <button className="flex items-center justify-center px-4 py-2 border-2 border-primary rounded-full text-primary text-l font-semibold hover:bg-secondary hover:text-white transition-colors duration-300">
                                <img
                                    src={googleLogo}
                                    alt="Google Logo"
                                    className="w-6 h-6 mr-2"
                                />
                                Sign Up With Google
                            </button>

                          
                        </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}