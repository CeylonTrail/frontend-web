import Header from "../components/header2";
import Traveler from "../assets/img/Traveller signup.svg"

import { Password, Email } from "../components/inputFields";
import { PrimaryButton } from "../components/Button";
import googleLogo from "../assets/img/GoogleLogo.png"

export default () => {

    return (
        <div className="w-full">
            <div className="bg-primaryDark1 h-5">
            </div>
            <Header type={"login"} />
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
                                <h3 className="text-primaryDark1 text-5xl font-bold ">Log In</h3>
                                {/* <p className="">Already have an account? <a href="javascript:void(0)" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a></p> */}
                            </div>
                        </div>



                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5 flex flex-col w-full items-center"
                        >

                            <div className="w-full">
                                <Email pholder={"Email"} />
                            </div>
                            <div className="w-full">
                                <Password pholder={"Password"} />
                                <div className="w-full flex justify-end">
                                    <a href="/signup" className="text-center text-primary hover:text-primaryDark1">Forgot password?</a>
                                </div>

                            </div>

                            <div className="w-full">
                                <input type="checkbox" id="remember-me-checkbox" className="border-primary" />
                                <label form="remember-me-checkbox" className="text-primary">Remember Me</label>
                            </div>


                            {/* <div className="flex items-center justify-between text-sm w-full">
                                <div className="flex items-center gap-x-3">
                                    <input type="checkbox"  className="checkbox-item peer hidden" />
                                    <label
                                        htmlFor="remember-me-checkbox"
                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    >
                                    </label>
                                    <span>Remember me</span>
                                </div>
                               
                            </div> */}

                            <div >
                                <PrimaryButton name={"Log In"} />
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
                                Log in With Google
                            </button>


                        </div>

                        <div className="w-full flex flex-row justify-center">
                            <p className="text-secondary font-thin">Don't have an account?</p> <a href="/signup" className="font-medium text-secondary  hover:text-primaryDark1">Sign Up</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}