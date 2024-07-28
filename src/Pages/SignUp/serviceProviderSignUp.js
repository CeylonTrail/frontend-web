import React, { useState } from "react";
import { SimpleInput, Password, Email, DropdownInput } from "../../components/inputFields";
import { PrimaryButton } from "../../components/Button";
import SelectLocation from "../../components/locationSelector";

export default () => {
    const shopTypes = ["Restaurant", "Hotel", "Tour Guide", "Transport", "Event Planner", "Other"];

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    const handleLocationChange = (lat, lng) => {
        setLat(lat);
        setLng(lng);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            shopName,
            shopType,
            email,
            password,
            lat,
            lng
        };
        console.log(data);
        // Handle form submission, e.g., send data to the server
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="space-y-5 flex flex-col w-full items-center"
            >
                <div className="w-full flex f-row gap-1">
                    <SimpleInput pholder={"First name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <SimpleInput pholder={"Last name"} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="w-full flex f-row gap-1">
                    <SimpleInput pholder={"Shop name"} value={shopName} onChange={(e) => setShopName(e.target.value)} />
                    <DropdownInput optionList={shopTypes} placeholder={"ShopTypes"} value={shopType} onChange={(e) => setShopType(e.target.value)} />
                </div>
                <div className="w-full">
                    <Email pholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="w-full">
                    <Password pholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <SelectLocation onLocationChange={handleLocationChange} />
                </div>
                <div>
                    <PrimaryButton name={"Sign up"} />
                </div>
            </form>
        </>
    );
};
