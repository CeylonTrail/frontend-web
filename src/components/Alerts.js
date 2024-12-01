import { useEffect } from "react";

const SuccessAlert = ({ title, message, onclose }) => {
    useEffect(() => {
        const timer = setTimeout(onclose, 2000); // Set timeout for 2 seconds
        return () => clearTimeout(timer); // Clear timeout if the component unmounts
    }, [onclose]);

    return (
        <div className="fixed top-4 right-4 mt-12 mx-4 px-4 rounded-md border-l-4 border-primaryDark2 bg-primary/75 shadow-md transition-transform duration-300 transform translate-y-0 z-50">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 rounded-full text-primaryDark2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-primaryDark2 font-semibold">{title}</span>
                        <p className="text-primaryDark2 mt-1">{message}</p>
                    </div>
                </div>
                <button className="self-start text-primaryDark2" onClick={onclose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const WarningAlert = ({ title, message, onclose }) => {
    useEffect(() => {
        const timer = setTimeout(onclose, 2000); // Set timeout for 2 seconds
        return () => clearTimeout(timer); // Clear timeout if the component unmounts
    }, [onclose]);

    return (
        <div className="fixed top-4 right-4 mt-12 mx-4 px-4 rounded-md border-l-4 border-warning bg-warningLight/75 shadow-md transition-transform duration-300 transform translate-y-0 z-50">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 rounded-full text-black"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-black font-semibold">{title}</span>
                        <p className="text-black mt-1">{message}</p>
                    </div>
                </div>
                <button className="self-start text-black" onClick={onclose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export { SuccessAlert, WarningAlert };
