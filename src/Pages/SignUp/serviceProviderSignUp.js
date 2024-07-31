import React, { useState, useRef, useEffect } from "react";
import { SimpleInput, Password, Email, DropdownInput } from "../../components/inputFields";
import { PrimaryButton } from "../../components/Button";
import SelectLocation from "../../components/locationSelector";
import signup from "../../API/signuoSP";
import { useNavigate } from "react-router-dom";
import { SuccessAlert, WarningAlert } from "../../components/Alerts";

export default () => {
    const shopTypes = ["Restaurant", "Accommodation", "Equipment Vendor", "Other"];

    // const [showSecondSection, setShowSecondSection] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    // const [lat, setLat] = useState(null);
    // const [lng, setLng] = useState(null);

    const [touchedFirstName, setTouchedFirstName] = useState(false);
    const [touchedUserName, setTouchedUserName] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedShopName, setTouchedShopName] = useState(false);
    const [touchedShopType, setTouchedShopType] = useState(false);
    // const [touchedLocation, setTouchedLocation] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    const handleShopType = (shopType) => {
        if (shopType === "Restaurant") {
            return "RESTAURANT";
        } else if (shopType === "Accommodation") {
            return "ACCOMMODATION";
        } else if (shopType === "Equipment Vendor") {
            return "EQUIPMENT";
        } else {
            return "OTHER";
        }
    }

    // const handleLocationChange = (lat, lng) => {
    //     setLat(lat);
    //     setLng(lng);
    //     setTouchedLocation(true);
    // };

    // const handleSecondSection = (e) => {
    //     e.preventDefault();
    //     if (!firstName || !userName || !email || !password) {
    //         setTouchedFirstName(true);
    //         setTouchedUserName(true);
    //         setTouchedEmail(true);
    //         setTouchedPassword(true);
    //     } else {
    //         setShowSecondSection(true);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!shopName || !shopType || !firstName  || !email || !password ||!userName) {
            !shopName && setTouchedShopName(true);
            !shopType && setTouchedShopType(true);
            !firstName && setTouchedFirstName(true);
            !email && setTouchedEmail(true);
            !password && setTouchedPassword(true);
            !userName && setTouchedUserName(true);
        } else {
            // const formattedShopType = handleShopType(shopType);
            const data = {
                "username": userName,
                "email":email,
                "password": password,
                "firstname": firstName,
                "lastname": lastName || "",
                "serviceName": shopName,
                "serviceType": handleShopType(shopType)
                
            };
            console.log(data);
            try {
                const response = await signup(data);
                console.log(response);
                if (response.status === 'success') {
                    setAlertTitle('Success');
                    setAlertMessage(response.message);
                    setShowAlert(true);
                    setAlertType('success');
                    setTimeout(() => {
                        setShowAlert(false);
                        navigate('/login');
                    }, 3000); // Hide the alert after 3 seconds
                } else {
                    setAlertTitle('Error');


                    setAlertMessage(response.message);
                    setShowAlert(true);
                    setAlertType('error');
                    setTimeout(() => {
                        setShowAlert(false);

                    }, 3000);
                }
            } catch (error) {
                // console.error(error);
                setAlertTitle('Error');
                setAlertMessage(error.message);
                setShowAlert(true);
                setAlertType('error');
                setTimeout(() => {
                    setShowAlert(false);

                }, 3000);
            }
        }
    };

    const handleOnClose = () => {

        setShowAlert(false);

    }


    return (
        <>
            <form
                
                className="space-y-5 flex flex-col w-full items-center "
            >
               
                    <div className="space-y-5 flex flex-col w-full items-center">
                   
                    <div className="w-full flex flex-col justify-start items-start">
                        <SimpleInput
                            pholder={"Shop Name"}
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                            onBlur={() => setTouchedShopName(true)}
                        />
                        {touchedShopName && !shopName && (
                            <p className="text-warning font-thin text-xs">Shop name is required!</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col justify-start items-start">
                        <DropdownInput
                            optionList={shopTypes}
                            placeholder={"Shop Types"}
                            value={shopType}
                            onChange={(e) => {
                                setShopType(e.target.value);
                                setTouchedShopType(true);
                            }}
                        />
                        {touchedShopType && !shopType && (
                            <p className="text-warning font-thin text-xs">Shop type is required!</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col justify-start items-start">
                        <SimpleInput
                            pholder={"User name"}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            onBlur={() => setTouchedUserName(true)}
                        />
                        {touchedUserName && !userName && (
                            <p className="text-warning font-thin text-xs">User name is required!</p>
                        )}
                    </div>

                    <div className="w-full  flex flex-col justify-start items-start">
                        <Email
                            pholder={"Email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setTouchedEmail(true)}
                        />
                        {touchedEmail && !email && (
                            <p className="text-warning font-thin text-xs">Email is required!</p>
                        )}
                    </div>
                    <div className="w-full  flex flex-col justify-start items-start">
                        <Password
                            pholder={"Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => setTouchedPassword(true)}
                        />
                        {touchedPassword && !password && (
                            <p className="text-warning font-thin text-xs">Password is required</p>
                        )}
                    </div>
                    <div className="w-full  flex flex-col justify-start items-start">
                        <h1 className="text-lg font-semibold text-primaryDark1">Owners Details</h1>
                        <div className="w-full flex flex-row gap-1">
                            <div className="flex flex-col justify-start items-start">
                                <SimpleInput
                                    pholder={"First name"}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    onBlur={() => setTouchedFirstName(true)}
                                />
                                {touchedFirstName && !firstName && (
                                    <p className="text-warning font-thin text-xs">First name is required!</p>
                                )}
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <SimpleInput
                                    pholder={"Last name (Optional)"}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    
                        
                        <div>
                        <PrimaryButton name={"Sign up"} action={handleSubmit} />
                        </div>
                    </div>
               

                {/* {showSecondSection && (
                    <div className="space-y-5 flex flex-col w-full items-center">
                        <h1 className="text-2xl font-semibold text-primaryDark1">Service Details</h1>
                        
                        <div className="w-full h-64">
                            <h3 className="text-2xl font-medium text-primaryDark1 text-base">Select Location</h3>
                            <SelectLocation onLocationChange={handleLocationChange} />
                            {touchedLocation && (!lat || !lng) && (
                                <p className="text-warning font-thin text-xs">Location is required!</p>
                            )}
                        </div>
                        <div className="w-full flex f-row gap-1 justify-center pt-12">
                            <PrimaryButton name={"< Back"} action={() => setShowSecondSection(false)} isActive={"false"} />
                            
                        </div>
                    </div>
                )} */}
            </form>

            {showAlert && alertType === 'success' && <SuccessAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />}
            {showAlert && alertType === 'success' && <SuccessAlert title={"Confirm Email"} message={"We have sent an email to confirm your account"} onclose={handleOnClose} />}

            {showAlert && alertType === 'error' && <WarningAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />} 
        </>
    );
};
