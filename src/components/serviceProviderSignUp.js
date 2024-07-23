import { SimpleInput, Password, Email ,DropdownInput} from "./inputFields";
import { PrimaryButton } from "./Button";
import googleLogo from "../assets/img/GoogleLogo.png"


export default () => {
    const shopTypes = ["Restaurant", "Hotel", "Tour Guide", "Transport", "Event Planner", "Other"];
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
                    <DropdownInput optionList={shopTypes} placeholder={"ShopTypes"} />
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