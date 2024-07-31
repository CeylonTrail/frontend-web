import Header from "../components/header2";
import Footer from "../components/footer";
import heroImg from "../assets/img/home page 2.png";
import { Parallax } from 'react-parallax';
import { PrimaryButton } from "../components/Button";
import { useNavigate } from "react-router-dom";
import trailLogo from "../assets/img/trailLogo.png";
import community from "../assets/img/Traveller Community new.png";
import traveller from "../assets/img/Travelers.svg";
import seller from "../assets/img/Pricing.svg";
import Feature1 from "../assets/img/HPfeture1.png";
import Feature2 from "../assets/img/HPfeture2.svg";
import Feature3 from "../assets/img/Traveller signup.svg";
import Feature4 from "../assets/img/HPfeture4.svg";
import Feature5 from "../assets/img/HPfeture5.svg";
import GetApp from "../assets/img/Get App.png";
import { Element } from 'react-scroll';

const MainContent = () => {
    const navigate = useNavigate();

    const handlePlanTrip = () => {
        navigate('/signup');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <Header place={"landing"} />
            <div className="bg-SecondaryLight">
                <Element name="home">
                    <Parallax bgImage={heroImg} strength={500} className="h-screen">
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                <h1 className="text-4xl md:text-6xl font-thin text-primaryDark2">Explore Beauty of Sri Lanka with</h1>
                                <h2 className="text75xl md:text-9xl font-bold text-primary mt-4">CeylonTrail</h2>
                                <div className="mt-8 flex space-x-4 justify-center">
                                    <PrimaryButton name="Plan Trip" action={handlePlanTrip} />
                                    <PrimaryButton name="Get App" />
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </Element>

                <Element name="about">
                    <section className="flex flex-row items-center mx-auto max-w-screen-md py-16 bg-SecondaryLight" id="about">
                        <img src={trailLogo} alt="Plan with Trail" className="w-48" />
                        <div className="flex flex-col justify-start">
                            <h2 className="mt-8 text-3xl font-bold text-primary">Plan with Trail</h2>
                            <p className="mt-4 text-lg text-gray">Trail is the AI-assistant of CeylonTrail. You can plan trips and get assistance of Trail by chatting or using voice commands.</p>
                        </div>
                    </section>
                </Element>

                <Element name="community">
                    <section className="flex flex-row items-center mx-auto max-w-screen-md py-16 bg-SecondaryLight gap-1">
                        <div className="flex flex-col">
                            <h2 className="mt-8 text-3xl text-end font-bold text-primary">Share Your Experience in Community</h2>
                            <p className="mt-4 text-lg text-end text-gray">CeylonTrail has a large community base. Experienced travel enthusiasts often share their experiences.</p>
                        </div>
                        <img src={community} alt="Community" className="w-60 shadow" />
                    </section>
                </Element>

                {/* Join With Us Section */}
                <section className="flex flex-col items-center py-16 bg-white">
                    <h2 className="text-3xl font-bold text-center text-primary">Join With Us As</h2>
                    <div className="flex flex-wrap justify-center mt-8">
                        
                        <div className="p-4 m-4   flex flex-col items-center ">
                            <img src={traveller} alt="Traveller" className="h-96" />
                            <h3 className="text-2xl font-bold text-center text-primary">Traveller</h3>
                            <p className="mt-4 text-center text-gray w-4/5 ">Plan trips, share experiences, explore travel enthusiast community with CeylonTrail.</p>
                        </div>
                        <div className="p-4 m-4   flex flex-col items-center ">
                            <img src={seller} alt="Traveller" className="h-96" />
                            <h3 className="text-2xl font-bold text-center text-primary">Service Providers</h3>
                            <p className="mt-4 text-center text-gray w-4/5 ">Promote & enhance travel-related business by advertising & seeking community trends.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <PrimaryButton name={"Sign Up"} action={handlePlanTrip} />
                        <PrimaryButton name ={"Login"} action={handleLogin}/>
                    </div>
                </section>

                {/* All in One Place Section */}
                <section className="flex flex-col items-center py-16 bg-SecondaryLight max-w-screen-xl mx-auto" >
                    <h2 className="text-3xl font-bold text-center text-primary">All in One Place</h2>
                    <div className="flex flex-row flex-wrap flex-1 justify-center gap-8 mt-8 md:grid-cols-3">
                        <div className="flex flex-col items-center p-4 max-w-96">
                            <img src={Feature1} alt="Plan Trip" className="h-24" />
                            <h3 className="mt-4 text-2xl font-bold text-center text-primary">Plan Trip</h3>
                            <p className="mt-2 text-center text-gray">Plan with voice, AI and customize as your preference.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 max-w-96">
                            <img src={Feature2} alt="Explore Community" className="h-32" />
                            <h3 className="mt-4 text-2xl font-bold text-center text-primary">Explore Community</h3>
                            <p className="mt-2 text-center text-gray">Engage with travel enthusiasts and use shared trip plans.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 max-w-96">
                            <img src={Feature3} alt="Add Travel Buddies" className="h-32" />
                            <h3 className="mt-4 text-2xl font-bold text-center text-primary">Add Travel Buddies</h3>
                            <p className="mt-2 text-center text-gray">Add your friends to your trips.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 max-w-96">
                            <img src={Feature4} alt="Track Budget" className=" h-32" />
                            <h3 className="mt-4 text-2xl font-bold text-center text-primary">Track Budget</h3>
                            <p className="mt-2 text-center text-gray">Keep track of trip expenses.</p>
                        </div>
                        <div className="flex flex-col items-center p-4 max-w-96">
                            <img src={Feature5} alt="Connect with Sellers" className=" h-32" />
                            <h3 className="mt-4 text-2xl font-bold text-center text-primary">Connect with Sellers</h3>
                            <p className="mt-2 text-center text-gray">Connect with restaurants, hotels, and essential equipment providers during the trip.</p>
                        </div>
                    </div>
                </section>

                {/* Mobile App Section */}
                <section className="flex flex-col items-center  bg-SecondaryLight">
                    <img src={GetApp} alt="Get App" className="w-full" />
                    {/* <h2 className="text-3xl font-bold text-center text-primary">Get CeylonTrail Mobile App & Enhance Your Experience</h2>
                    <div className="flex flex-wrap justify-center mt-8">
                        <img src="/path_to_app_image.jpg" alt="Mobile App" className="w-48 h-96" />
                        <img src="/path_to_app_image.jpg" alt="Mobile App" className="w-48 h-96" />
                    </div>
                    <div className="mt-8">
                        <button className="px-6 py-2 text-white bg-black rounded hover:bg-gray">Get it on Google Play</button>
                    </div> */}
                </section>
            </div>
            <Footer/>
        </>
        
    );
}

export default MainContent;
