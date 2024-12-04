import { useState, useEffect } from "react";

// NavLink Component (unchanged)
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

// Title Component (unchanged)
const Title = ({ children }) => (
    <h3 className="pb-3 px-4 font-bold text-gray-800 md:pr-8 text-2xl">
        {children}
    </h3>
);

// Styled ToggleButton Component
const ToggleButton = ({ label, isActive, onToggle }) => (
    <label className="flex justify-between items-center cursor-pointer w-full">
        {/* Text aligned to the left */}
        <span className="text-sm font-medium text-gray-900">{label}</span>

        {/* Hidden checkbox and toggle button */}
        <input
            type="checkbox"
            checked={isActive}
            onChange={onToggle}
            className="sr-only peer"
        />
        <div
            className={`relative w-11 h-6 rounded-full transition-colors ${
                isActive ? "bg-primary" : "bg-white border border-primary"
            } peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary`}
        >
            {/* Sliding toggle circle */}
            <div
                className={`absolute top-[1px] left-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform ${
                    isActive ? "translate-x-full" : "translate-x-0"
                }`}
            ></div>
        </div>
    </label>
);


// Sidebar Component
const Sidebar = ({ posts, filterPosts }) => {
    // States for filters
    const [recentPosts, setRecentPosts] = useState(false);
    const [trips, setTrips] = useState(false);
    const [followedPosts, setFollowedPosts] = useState(false);
    const [datePosted, setDatePosted] = useState("");
    const [postedBy, setpostedBy] = useState("");
    const [taggedLocation, setTaggedLocation] = useState("");

    // Apply filters when any filter state changes
    useEffect(() => {
        let filteredPosts = [...posts];

        if (recentPosts) {
            filteredPosts = filteredPosts.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
        }
        if (trips) {
            filteredPosts = filteredPosts.filter((post) => post.trip !== null);
        }
        if (followedPosts) {
            // Replace with your logic to identify followed users
            const followedUserIds = [61]; // Example user IDs
            filteredPosts = filteredPosts.filter((post) =>
                followedUserIds.includes(post.user.userId)
            );
        }
        if (datePosted) {
            filteredPosts = filteredPosts.filter(
                (post) =>
                    new Date(post.createdAt).toDateString() ===
                    new Date(datePosted).toDateString()
            );
        }
        if (postedBy) {
            filteredPosts = filteredPosts.filter(
                (post) =>
                    post.user.username
                        .toLowerCase()
                        .includes(postedBy.toLowerCase())
            );
        }
        if (taggedLocation) {
            // Add logic for location if available in posts
        }

        // Pass filtered posts back to parent
        filterPosts(filteredPosts);
    }, [recentPosts, trips, followedPosts, datePosted, postedBy, taggedLocation]);

    return (
        <nav className="fixed rounded-lg shadow-lg z-40 top-20 left-4 w-[300px] bottom-4 p-6 bg-white text-gray-800 space-y-8 overflow-auto max-w-sm">
            <div className="text-[0.9rem] space-y-6">
                <div>
                    <Title>Filters</Title>
                    <div className="px-0 md:px-2">
                        <ul className="space-y-4">
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
                                    onToggle={() =>
                                        setFollowedPosts(!followedPosts)
                                    }
                                />
                            </li>
                            <li>
                                <label className="block py-2 text-gray-800">
                                    Date Posted:
                                    <input
                                        type="date"
                                        value={datePosted}
                                        onChange={(e) =>
                                            setDatePosted(e.target.value)
                                        }
                                        className="block w-full mt-1 p-2 border border-primary rounded-md bg-gray-50"
                                    />
                                </label>
                            </li>
                            <li>
                                <label className="block py-2 text-gray-800">
                                    Posted By:
                                    <input
                                        type="text"
                                        value={postedBy}
                                        onChange={(e) =>
                                            setpostedBy(e.target.value)
                                        }
                                        className="block w-full mt-1 p-2 border border-primary rounded-md bg-gray-50"
                                    />
                                </label>
                            </li>
                            {/* <li>
                                <label className="block py-2 text-gray-800">
                                    Tagged Location:
                                    <input
                                        type="text"
                                        value={taggedLocation}
                                        onChange={(e) =>
                                            setTaggedLocation(e.target.value)
                                        }
                                        className="block w-full mt-1 p-2 border border-primary rounded-md bg-gray-50"
                                    />
                                </label>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom-5 fixed flex justify-center w-64">
                <p className="text-xs font-thin">© 2024 UCSC Undergraduates</p>
            </div>
        </nav>
    );
};


export default Sidebar;
