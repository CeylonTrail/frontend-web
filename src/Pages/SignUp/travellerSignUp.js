import { SimpleInput, Password, Email } from "../../components/inputFields";
import { PrimaryButton } from "../../components/Button";
import googleLogo from "../../assets/img/GoogleLogo.png"
import signup from "../../API/signup";
import { useState } from "react";
import { SuccessAlert,WarningAlert } from "../../components/Alerts";
import { useNavigate } from "react-router-dom";

export default () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [touchedFirstName, setTouchedFirstName] = useState(false);
    const [touchedLastName, setTouchedLastName] = useState(false);
    const [touchedUserName, setTouchedUserName] = useState(false);
    const [touchedEmail, setTouchedEmail] = useState(false);
    const [touchedPassword, setTouchedPassword] = useState(false);
    
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertType, setAlertType] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const data = {
            firstname: firstName,
            lastname: lastName,
            username: userName,
            email: email,
            password: password,
        };

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

    const handleOnClose = () => {
        
        setShowAlert(false);
        
    }


    return (
        <>
            <form
                onSubmit={handleSignUp}
                className="space-y-5 flex flex-col w-full items-center"
            >
                <div className="w-full flex flex-row gap-1">
                    <div className="flex flex-col justify-start items-start" >
                        <SimpleInput pholder={"First name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} onBlur={() => setTouchedFirstName(true)} />
                        {touchedFirstName && !firstName&&(
                            <p className="text-warning font-thin text-xs ">First name is required !</p>
                        )}
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <SimpleInput pholder={"Last name"} value={lastName} onChange={(e) => setLastName(e.target.value)} onBlur={() => setTouchedLastName(true)} />
                        {touchedLastName && !lastName && (
                            <p className="text-warning font-thin text-xs ">Last name is required!</p>
                        )}
                    </div>
                    
                    
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                    
                        <SimpleInput
                            pholder={"User name"}
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            onBlur={() => setTouchedUserName(true)}
                        />
                        {touchedUserName && !userName && (
                            <p className="text-warning font-thin text-xs ">User name is required!</p>
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
                        <p className="text-warning font-thin text-xs">Email is required !</p>
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
            {showAlert && alertType === 'success' && <SuccessAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />} 
            {showAlert && alertType === 'error' && <WarningAlert title={alertTitle} message={alertMessage} onclose={handleOnClose} />} 
          
        </>
    )
}