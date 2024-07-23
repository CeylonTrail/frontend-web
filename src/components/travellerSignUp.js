import { SimpleInput, Password, Email } from "./inputFields";
import { PrimaryButton } from "./Button";
import googleLogo from "../assets/img/GoogleLogo.png"

export default () => {
    return (
        <>
            <form
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

                
            </div>
        </>
    )
}