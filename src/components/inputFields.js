import React from 'react';
import { useState,useEffect,useRef } from "react";

const SimpleInput = ({ pholder, value, onChange, onBlur }) => {
    return (
        <div className="w-full flex items-center">
            <input
                type="text"
                className="w-full h-10 border-2 border-secondary rounded-md px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-SecondaryLight"
                placeholder={pholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};

const Password = ({ pholder, value, onChange, onBlur }) => {
    const [isPasswordHidden, setPasswordHidden] = useState(true);

    return (
        <div className='w-full'>
            <div className="w-full relative mt-2">
                <button
                    type="button" // Change button type to "button"
                    className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                    onClick={() => setPasswordHidden(!isPasswordHidden)}
                >
                    {
                        isPasswordHidden ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        )
                    }
                </button>
                <input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder={pholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="w-full h-10 border-2 border-secondary rounded-md px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-SecondaryLight"
                />
            </div>
        </div>
    )
};


const Email = ({ pholder, value, onChange, onBlur }) => {
    return (
        <div className="w-full flex items-center">
            <input
                type="email"
                className="w-full h-10 border-2 border-secondary rounded-md px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-SecondaryLight"
                placeholder={pholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
};


const DropdownInput = ({ optionList, placeholder, value, onChange }) => {
    const selectRef = useRef(null);

    useEffect(() => {
        const handleSelectChange = () => {
            if (selectRef.current.value === "") {
                selectRef.current.classList.add('text-gray-400');
                selectRef.current.classList.remove('text-black');
            } else {
                selectRef.current.classList.remove('text-gray-400');
                selectRef.current.classList.add('text-black');
            }
        };

        const selectElement = selectRef.current;
        selectElement.addEventListener('change', handleSelectChange);

        // Initial call to set the correct color
        handleSelectChange();

        return () => {
            selectElement.removeEventListener('change', handleSelectChange);
        };
    }, []);

    return (
        <div className="relative w-full">
            <select
                ref={selectRef}
                value={value}
                onChange={onChange}
                className="appearance-none w-full py-2 px-3 border-2 border-secondary bg-SecondaryLight text-[#374151] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="" disabled hidden>{placeholder}</option>
                {optionList.map((item, index) => (
                    <option key={index} value={item} className="text-black">{item}</option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
        </div>
    );
};

export  {SimpleInput,Password,Email,DropdownInput};
