import Header from "../components/header2";
import FPW from "../assets/img/Forgot password.png"
import footer from "../components/footer";
import { Password, Email } from "../components/inputFields";
import { PrimaryButton } from "../components/Button";
import googleLogo from "../assets/img/GoogleLogo.png"
import Footer from "../components/footer";
import { useState } from "react";
import { SimpleInput } from "../components/inputFields";

export default () => {

    const [email, setEmail] = useState("");
    const[otp,setOtp]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            otp
        }
        console.log(data);

    };

    return (
        <div className="w-full mb-5">
            <div className="bg-primaryDark1 h-5">
            </div>
            <Header type={"login"} />
            <div className="flex pb-14">
                <div className="relative flex-1 hidden items-center justify-center   lg:flex h-full">
                    <div className="w-2/4 pt-14">
                        <img src={FPW} />
                    </div>
                </div>
                <div className="flex-1 flex items-center  ">
                    <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">
                        <div className="">

                            <div className="mt-5 space-y-2">
                                <h3 className="text-primaryDark1 text-5xl font-bold ">Reset Password</h3>

                            </div>
                        </div>



                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 flex flex-col w-full items-center"
                        >

                            <div className="w-full">
                                <Email pholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className="w-full flex justify-end">
                                    <a href="#ndjsd" className="text-center text-primary hover:text-primaryDark1">Send OTP</a>
                                </div>

                            </div>

                            <div className="w-full">
                                <SimpleInput pholder={"OTP"} value={otp} onChange={(e) => setOtp(e.target.value)} />
                                
                            </div>

                         



                            <div >
                                <PrimaryButton name={"Reset Password"} />
                            </div>


                        </form>
                        {/* <div className="relative">
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
                                Log in With Google
                            </button>


                        </div>

                        <div className="w-full flex flex-row justify-center">
                            <p className="text-secondary font-thin">Don't have an account?</p> <a href="/signup" className="font-medium text-secondary  hover:text-primaryDark1">Sign Up</a>

                        </div> */}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}