/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { PrimaryButton as Button } from './Button';
import skelim from '../assets/img/picskel.png';
import { capitalizeWords } from '../Functions/FormatName';


export default ({ pic }) => {
    
    const followers=["Amal","Kamal","Nimal","Sunil","Manahari","Amal","Kamal","Nimal","Sunil","Manahari"];
    const handleEdit = () => { 
        window.location.href = "/edit_tr_profile";
    }
    return (
        <div className="bg-white p-4  rounded shadow-md mt-12 w-full max-h-[46rem]">
            <div className="flex flex-col items-center">
                <div className='flex flex-row'>
                    <div className="rounded-full flex items-center justify-center">

                        <img src={skelim} className="w-40 rounded-full" />
                    </div>
                    <div className='ml-4'>
                        <h2 className="text-2xl font-bold mt-2">{capitalizeWords(localStorage.getItem("firstname"))} {capitalizeWords(localStorage.getItem("lastname"))}</h2>
                        <div className="text-gray-500 flex flex-row text-center max-w-72 my-5">
                            <div className="border-r ">200 Posts</div>
                            <div className="border-r m-y-2">200 Followers</div>
                            <div className=" m-y-2">200 Following</div>
                        </div>
                        <div className="text-gray-500 text-xs">bio here bio bio</div>
                    </div>
                </div>
                
                
                <div className="flex space-x-2 mt-4 w-full">
                    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Waterfalls</span>
                    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Hiking</span>
                    <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Sea Sides</span>

                </div>
                <div className='flex justify-between w-full mt-2'>
                    <div className="mt-4 w-1/2">
                        <p className='text-xs'>Phone Number: 0762365456</p>
                        <p className='text-xs'>Email: traveller@gmail.com</p>
                    </div>
                    <Button name="Edit Profile" action={handleEdit} />
                </div>
                
            </div>
            <div className='mt-6'>
                <h3 className="text-xl font-bold mb-2">Followers</h3>
                <div className="overflow-auto h-64">
                    {followers.map((user, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    {/* Follower profile picture */}
                                    <span className="text-xl">{ 
                                        <img src={skelim} className="w-8 h-8 rounded-full" />
                                    }</span>
                                </div>
                                <span className="ml-2">{user}</span>
                            </div>
                            <button className="text-teal-500 hover:underline">Unfollow</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


