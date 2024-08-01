import React, { useState, useEffect } from "react";
import { SimpleInput, Password, Email, DropdownInput } from "../../components/inputFields";
import { PrimaryButton } from "../../components/Button";
import signup from "../../API/signuoSP";
import { useNavigate } from "react-router-dom";
import { SuccessAlert, WarningAlert } from "../../components/Alerts";
import MassageBoxPop from "../../components/MassageBoxPop";

export default () => {
    const shopTypes = ["Restaurant", "Accommodation", "Equipment Vendor", "Other"];

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [shopName, setShopName] = useState("");
    const [shopType, setShopType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const [touchedFirstName, setTouchedFirstName] = useState(false);
    const [touchedUserName, setTouchedUserName] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);
    const [touchedShopName, setTouchedShopName] = useState(false);
    const [touchedShopType, setTouchedShopType] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (showAlert && alertType === 'success') {
            const timer = setTimeout(() => {
                setShowAlert(false);
                navigate('/login');
            }, 5000); // Redirect after 3 seconds

            return () => clearTimeout(timer); // Clear timeout if component unmounts
        }
    }, [showAlert, alertType, navigate]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!shopName || !shopType || !firstName || !email || !password || !userName) {
            !shopName && setTouchedShopName(true);
            !shopType && setTouchedShopType(true);
            !firstName && setTouchedFirstName(true);
            !email && setTouchedEmail(true);
            !password && setTouchedPassword(true);
            !userName && setTouchedUserName(true);
        } else {
            const data = {
                "username": userName,
                "email": email,
                "password": password,
                "firstname": firstName,
                "lastname": lastName || "",
                "serviceName": shopName,
                "serviceType": handleShopType(shopType)
            };

            try {
                const response = await signup(data);
                console.log(response);
                if (response.status === 'success') {
                    setAlertTitle('Success');
                    setAlertMessage('We have sent you an email to validate your account.');
                    setShowAlert(true);
                    setAlertType('success');
                } else {
                    setAlertTitle('Error');
                    setAlertMessage(response.message);
                    setShowAlert(true);
                    setAlertType('error');
                }
            } catch (error) {
                setAlertTitle('Error');
                setAlertMessage(error.message);
                setShowAlert(true);
                setAlertType('error');
            }
        }
    };

    const handleOnClose = () => {
        setShowAlert(false);
    }

    const handleOnCloseSuccess = () => {
        setShowAlert(false);
        navigate('/login');
    }

    return (
        <>
            <form className="space-y-5 flex flex-col w-full items-center">
                <div className="space-y-5 flex flex-col w-full items-center">
                    <div className="w-full flex flex-col justify-start items-start">
                        <SimpleInput
                            pholder={"Service Name"}
                            value={shopName}
                            onChange={(e) => setShopName(e.target.value)}
                            onBlur={() => setTouchedShopName(true)}
                        />
                        {touchedShopName && !shopName && (
                            <p className="text-warning font-thin text-xs">Service name is required!</p>
                        )}
                    </div>
                    <div className="w-full flex flex-col justify-start items-start">
                        <DropdownInput
                            optionList={shopTypes}
                            placeholder={"Service Types"}
                            value={shopType}
                            onChange={(e) => {
                                setShopType(e.target.value);
                                setTouchedShopType(true);
                            }}
                        />
                        {touchedShopType && !shopType && (
                            <p className="text-warning font-thin text-xs">Service type is required!</p>
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
                        {touchedPassword && password && password.length <= 6 && (
                            <p className="text-warning font-thin text-xs">Password must be longer than 6 characters</p>
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
            </form>

            {showAlert && alertType === 'success' && <MassageBoxPop message={alertTitle} description={"We have sent you an email to validate your account"} open={showAlert} onClose={handleOnCloseSuccess} />}


            {showAlert && alertType === 'error' && (
                <WarningAlert
                    title={alertTitle}
                    message={alertMessage}
                    onclose={handleOnClose}
                />
            )}
        </>
    );
};
