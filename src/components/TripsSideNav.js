import React, { useState, useEffect } from 'react';

const SideNav = () => {
    const [active, setActive] = useState('Dashboard');

    useEffect(() => {
        const savedActiveTab = localStorage.getItem('activeTab');
        if (savedActiveTab) {
            setActive(savedActiveTab);
        } else {
            setActive('Dashboard'); // Set a default active tab
        }
    }, []);

    const handleNavClick = (tabName, href, event) => {
        event.preventDefault(); // Prevent default anchor behavior
        setActive(tabName);
        localStorage.setItem('activeTab', tabName);
        window.location.href = href;
    };

    return (
        <div className="fixed rounded shadow z-40 top-20 left-1.5 w-full bottom-1.5 p-6 bg-white space-y-8 overflow-auto max-w-xs">
            <nav>
                <ul>
                    <li className={` ${active === 'Dashboard' ? 'bg-secondary rounded-xl' : ''}`}>
                        <a href="/trip_dashboard" className={`flex items-center ${active === 'Dashboard' ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={(e) => handleNavClick('Dashboard', '/trip_dashboard', e)}>
                            <span className="material-symbols-outlined">home</span>
                            Dashboard
                        </a>
                    </li>
                    <li className={` ${active === 'Plan Trip' ? 'bg-secondary rounded-xl' : ''}`}>
                        <a href="/plan_trip" className={`flex items-center ${active === 'Plan Trip' ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={(e) => handleNavClick('Plan Trip', '/plan_trip', e)}>
                            <span className="material-symbols-outlined">book</span>
                            Plan Trip
                        </a>
                    </li>
                    <li className={` ${active === 'Current Trip' ? 'bg-secondary rounded-xl' : ''}`}>
                        <a href="/current_trip" className={`flex items-center ${active === 'Current Trip' ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={(e) => handleNavClick('Current Trip', '/current_trip', e)}>
                            <span className="material-symbols-outlined">timer</span>
                            Current Trip
                        </a>
                    </li>
                    <li className={` ${active === 'Saved Trips' ? 'bg-secondary rounded-xl' : ''}`}>
                        <a href="/saved_trips" className={`flex items-center ${active === 'Saved Trips' ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={(e) => handleNavClick('Saved Trips', '/saved_trips', e)}>
                            <span className="material-symbols-outlined">bookmark</span>
                            Saved Trips
                        </a>
                    </li>
                    {/* <li className={` ${active === 'Favorite Places' ? 'bg-secondary rounded-xl' : ''}`}>
                        <a href="/favorite_places" className={`flex items-center ${active === 'Favorite Places' ? 'text-white' : 'text-black'} hover:text-blue-600 py-5 pl-2`} onClick={(e) => handleNavClick('Favorite Places', '/favorite_places', e)}>
                            <span className="material-symbols-outlined">favorite</span>
                            Favorite Places
                        </a>
                    </li> */}
                </ul>
            </nav>
            <div className="bottom-3 fixed flex justify-center w-64">
                <p className="text-xs font-thin">© 2024 UCSC Undergraduates</p>
            </div>
        </div>
    );
};

export default SideNav;
