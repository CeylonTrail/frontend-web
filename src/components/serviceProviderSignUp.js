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
                <div className="w-full flex f-row gap-1">
                    <SimpleInput pholder={"Shop name"} />
                    <SimpleInput pholder={"Shop Type"} />
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
           
            
        </>
    )
}