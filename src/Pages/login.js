/* eslint-disable import/no-anonymous-default-export */
import Header from "../components/header2";
import LoginImg from "../assets/img/login.svg";
import { Password, Email } from "../components/inputFields";
import { PrimaryButton } from "../components/Button";
import googleLogo from "../assets/img/GoogleLogo.png";
import Footer from "../components/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../API/login";
import { WarningAlert, SuccessAlert } from "../components/Alerts";
import { useNavigate } from "react-router-dom";


export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    const handleOnClose = () => {
        setShowAlert(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };

        try {
            const response = await login(data);

            if (response.status === 'success') {
                localStorage.setItem('token', response.token);
                localStorage.setItem('userName', response.userName);
                setAlertType('success');
                setAlertMessage('Login success');
                setAlertTitle('Success');
                setShowAlert(true);
                setTimeout(() => {
                    if (response.role === 'TRAVELLER') {
                        navigate('/community');
                    }
                    else if (response.role === 'ADMIN') {
                        navigate('/admin');
                    } else {
                        localStorage.setItem('serviceName', response.serviceName);
                        localStorage.setItem('serviceType', response.serviceType);
                        if (response.setupState){
                            if (response.serviceType === 'ACCOMMODATION') {
                                navigate('/hotel-sp-view')
                            } else if (response.serviceType === 'RESTAURANT') {
                                navigate('/rest-sp-view')
                            } else if (response.serviceType === 'EQUIPMENT') {
                                navigate('/equip-sp-view')
                            } else {
                                navigate('/hotel-sp-view')
                            }
                        } else {
                            navigate('/sp')
                        }
                    }
                    
                    setShowAlert(false);
                }, 2000);
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
            console.error(error);
            setAlertTitle('Error');
            setAlertMessage(error.message);
            setShowAlert(true);
            setAlertType('error');
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };

    return (
        <div className="w-full">
            <div className="bg-primaryDark1 h-5"></div>
            <Header type={"login"} />
            <div className="flex pb-8 mb-5">
                <div className="relative flex-1 hidden items-center justify-center lg:flex h-full">
                    <div className="w-2/4 pt-10">
                        <img src={LoginImg} />
                    </div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-md space-y-8 px-4 text-gray-600 sm:px-0">
                        <div>
                            <div className="mt-5 space-y-2">
                                <h3 className="text-primaryDark1 text-5xl font-bold ">Log In</h3>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-5 flex flex-col w-full items-center">
                            <div className="w-full">
                                <Email pholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => setTouchedEmail(true)} />
                                {touchedEmail && !email && (
                                    <p className="text-warning font-thin text-xs">Email is required!</p>
                                )}
                            </div>
                            <div className="w-full">
                                <Password pholder={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => setTouchedPassword(true)} />
                                {touchedPassword && !password && (
                                    <p className="text-warning font-thin text-xs">Password is required</p>
                                )}
                                <div className="w-full flex justify-end">
                                    <Link to="/reset_password" className="text-center text-primary hover:text-primaryDark1">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="w-full">
                                <input type="checkbox" id="remember-me-checkbox" className="border-primary" />
                                <label htmlFor="remember-me-checkbox" className="text-primary">Remember Me</label>
                            </div>
                            <div>
                                <PrimaryButton name={"Log In"} action={handleSubmit} />
                            </div>
                        </form>
                        <div className="relative">
                            <span className="block w-full h-px bg-secondary"></span>
                            <p className="inline-block w-fit text-sm bg-SecondaryLight px-2 absolute -top-2 inset-x-0 mx-auto text-secondary">Or continue with</p>
                        </div>
                        <div className="flex w-full items-center justify-center">
                            <button className="flex items-center justify-center px-4 py-2 border-2 border-primary rounded-full text-primary text-l font-semibold hover:bg-secondary hover:text-white transition-colors duration-300">
                                <img src={googleLogo} alt="Google Logo" className="w-6 h-6 mr-2" />
                                Log in With Google
                            </button>
                        </div>
                        <div className="w-full flex flex-row justify-center">
                            <p className="text-secondary font-thin">Don't have an account?</p>
                            <a href="/signup" className="font-medium text-secondary hover:text-primaryDark1">Sign Up</a>
                        </div>
                        {showAlert && alertType === 'error' && <WarningAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />}
                        {/* {showAlert && alertType === 'success' && <MassageBoxPop message={alertTitle} description={alertMessage} open={showAlert} onClose={handleOnClose} />} */}
                        {showAlert && alertType === 'success' && <SuccessAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};