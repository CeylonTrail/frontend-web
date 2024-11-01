import { useState ,useEffect} from "react";


// NavLink component
const NavLink = ({ ...props }) => {
    const { children, href = "", className = "", active = "" } = props;

    const [pathname, setPathname] = useState("/");

    const isActive = pathname === href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [props]);

    return (
        <a href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </a>
    );
};

// Title component
const Title = ({ children }) => (
    <h3 className='pb-3 px-4 font-bold text-gray-800 md:pr-8 text-2xl'>
        {children}
    </h3>
);

// ToggleButton component
const ToggleButton = ({ label, isActive, onToggle }) => (
    <label className="inline-flex items-center cursor-pointer">
        <input
            type="checkbox"
            checked={isActive}
            onChange={onToggle}
            className="sr-only peer"
        />
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {label}
        </span>
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        
    </label>
);


// Sidebar component
const Sidebar = () => {
    const [recentPosts, setRecentPosts] = useState(false);
    const [trips, setTrips] = useState(false);
    const [followedPosts, setFollowedPosts] = useState(false);
    const [datePosted, setDatePosted] = useState("");
    const [postedFrom, setPostedFrom] = useState("");
    const [taggedLocation, setTaggedLocation] = useState("");

    return (
        <nav
            className="fixed rounded shadow z-40 top-20 left-1.5 w-full bottom-1.5 p-6 bg-white space-y-8 overflow-auto max-w-sm">
            <div className='text-[0.9rem] space-y-6'>
                <div>
                    <Title>Filters</Title>
                    <div className='text-gray-600  px-0 md:px-6'>
                        <ul className="space-y-2">
                            <li>
                                <ToggleButton
                                    label="Recent Posts"
                                    isActive={recentPosts}
                                    onToggle={() => setRecentPosts(!recentPosts)}
                                />
                            </li>
                            <li>
                                <ToggleButton
                                    label="Trips"
                                    isActive={trips}
                                    onToggle={() => setTrips(!trips)}
                                />
                            </li>
                            <li>
                                <ToggleButton
                                    label="Followed Posts"
                                    isActive={followedPosts}
                                    onToggle={() => setFollowedPosts(!followedPosts)}
                                />
                            </li>
                            <li>
                                <label className="block py-2 px-0 text-gray-600">
                                    Date Posted:
                                    <input
                                        type="date"
                                        value={datePosted}
                                        onChange={(e) => setDatePosted(e.target.value)}
                                        className="block w-full mt-1 border-gray-300 rounded-md"
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="block py-2 px-0 text-gray-600">
                                    Posted From:
                                    <input
                                        type="text"
                                        value={postedFrom}
                                        onChange={(e) => setPostedFrom(e.target.value)}
                                        className="block w-full mt-1 border-gray-300 rounded-md"
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="block py-2 px-0 text-gray-600">
                                    Tagged Location:
                                    <input
                                        type="text"
                                        value={taggedLocation}
                                        onChange={(e) => setTaggedLocation(e.target.value)}
                                        className="block w-full mt-1 border-gray-300 rounded-md"
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-3 fixed flex justify-center w-64">
                <p className="text-xs font-thin">© 2024 UCSC Undergraduates</p>
            </div>
        </nav>
    );
};

export default Sidebar;
