import Header from "../components/header2";
import FPW from "../assets/img/Forgot password.png"
import footer from "../components/footer";
import { Password, Email, OTPInput } from "../components/inputFields";
import { PrimaryButton } from "../components/Button";
import googleLogo from "../assets/img/GoogleLogo.png"
import Footer from "../components/footer";
import { useState } from "react";
// import { SimpleInput, } from "../components/inputFields";
import {sendEmail,validateOTP,resetPw} from "../API/reset_pw";
import { WarningAlert, SuccessAlert } from "../components/Alerts";
import { useNavigate } from "react-router-dom";

export default () => {

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newpassword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showOTP, setShowOTP] = useState(false);
    const [showResetPW, setShowresetPW] = useState(false);
    const [showEmail, setShowEmail] = useState(true);
    
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedOtp, setTouchedOtp] = useState(false);
    const [touchednewPassword, setTouchednewPassword] = useState(false);
    const [touchedconfirmPassword, setTouchedconfirmPassword] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    const handleOnClose = () => { 
        setShowAlert(false);
    }

    const handleSendEmail = async (e) => {
        e.preventDefault();
        if (email) {
            const data = {
                email: email
            };

            try {
                const response = await sendEmail(data);
                // console.log(response);
                if (response.status === 'success') {
                    setAlertTitle('OTP has been sent');
                    // setAlertMessage(response.message);
                    setShowAlert(true);
                    setAlertType('success');
                    setTimeout(() => {
                        setShowOTP(true);
                        setShowAlert(false);
                        setShowEmail(false);
                    }, 2000); // Hide the alert after 3 seconds
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
        else {
            
            !email && setTouchedEmail(true);
            
        }
    }

    const handleValidateOTP = async (e) => {
        e.preventDefault();
        if (otp) {
            const data = {
                otp: otp
            };

            try {
                const response = await validateOTP(data);
                // console.log(response);
                if (response.status === 'success') {
                    setAlertTitle('Otp validated successfully');
                    // setAlertMessage(response.message);
                    setShowAlert(true);
                    setAlertType('success');
                    setTimeout(() => {
                        setShowresetPW(true);
                        setShowEmail(false);
                        setShowOTP(false);
                        setShowAlert(false);
                    }, 2000); // Hide the alert after 3 seconds
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
                    setShowEmail(false);
                }, 3000);
            }
        }
        else {

            !otp && setTouchedOtp(true);

        }
    }

    const handleOtpChange = (newOtp) => {
        setOtp(newOtp);
        setTouchedOtp(true);
    };

    const handleResetPassword = async (e) => { 
        e.preventDefault();
        if (newpassword && confirmPassword) {
            if (newpassword === confirmPassword) {
                const data = {
                    email: email,
                    otp: otp,
                    password: newpassword
                };
                console.log(data)
                try {
                    const response = await resetPw(data);
                    // console.log(response);
                    if (response.status === 'success') {
                        setAlertTitle('Password reset successfully');
                        // setAlertMessage(response.message);
                        setShowAlert(true);
                        setAlertType('success');
                        setTimeout(() => {
                            // setShowresetPW(true);
                            // setShowOTP(false);
                            navigate('/login');
                            setShowAlert(false);
                        }, 2000); // Hide the alert after 3 seconds
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
            else {
                setAlertTitle('Error');
                setAlertMessage('Passwords do not match');
                setShowAlert(true);
                setAlertType('error');
                setTimeout(() => {
                    setShowAlert(false);

                }, 3000);
            }
        }
        else {
            !newpassword && setTouchednewPassword(true);
            !confirmPassword && setTouchedconfirmPassword(true);
        }
    }

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
                            // onSubmit={handleSubmit}
                            className="space-y-5 flex flex-col w-full items-center"
                        >
                            {showEmail && <>
                                <div className="w-full">
                                    <Email
                                        pholder={"Email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={() => setTouchedEmail(true)}
                                    />
                                    {touchedEmail && !email && (
                                        <p className="text-warning font-thin text-xs">Email is required !</p>
                                    )}

                                </div>
                                <div >
                                    <PrimaryButton name={"Send OTP"} action={handleSendEmail} />
                                </div>
                            </>}
                            
                            {
                                showOTP && <>
                                    <div className="w-full">
                                        <OTPInput value={otp} onChange={handleOtpChange} />
                                        {touchedOtp && !otp && (
                                            <p className="text-warning font-thin text-xs">OTP is required !</p>
                                        )}
                                    </div>
                                    <div >
                                        <PrimaryButton name={"Verify OTP"} action={handleValidateOTP} />
                                    </div>
                                </>
                            }

                            {
                                showResetPW && <>
                                    <Password pholder={"New Password"} value={newpassword} onChange={(e) => setPassword(e.target.value)} onBlur={() => setTouchednewPassword(true)} />
                                    {touchednewPassword && !newpassword && (
                                        <p className="text-warning font-thin text-xs">New Password is required !</p>
                                    )}
                                    {touchednewPassword && newpassword && newpassword.length <= 6 && (
                                        <p className="text-warning font-thin text-xs">Password must be longer than 6 characters</p>
                                    )}

                                    <Password pholder={"Confirm Password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onBlur={() => setTouchedconfirmPassword(true)} />
                                    {touchedconfirmPassword && !confirmPassword && (
                                        <p className="text-warning font-thin text-xs">New Password is required !</p>
                                    )}
                                    {touchedconfirmPassword && confirmPassword && confirmPassword.length <= 6 && (
                                        <p className="text-warning font-thin text-xs">Password must be longer than 6 characters</p>
                                    )}
                                    <PrimaryButton name={"Reset Password"} action={handleResetPassword} />
                                </>
                            }

                            {/* <div className="w-full">
                                <SimpleInput pholder={"OTP"} value={otp} onChange={(e) => setOtp(e.target.value)} />
                                
                            </div> */}

                         



                            

                        </form>
                        {showAlert && alertType === 'error' && <WarningAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />}
                        {/* {showAlert && alertType === 'success' && <MassageBoxPop message={alertTitle} description={alertMessage} open={showAlert} onClose={handleOnClose} />} */}
                        {showAlert && alertType === 'success' && <SuccessAlert title={alertTitle}  onclose={handleOnClose} />}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}