import React from 'react';
import { PrimaryButton } from './Button';
import SelectLocation from './locationSelector';

const CurrentTrip = () => {
    return (
        <div className="w-[77%] fixed right-2 bg-white rounded p-6  h-[87.5vh] flex flex-row flex-1">
            <div className="w-full md:w-1/3">
                <div className=" p-4 mb-4">
                    <div className="flex  items-center border-b pb-2 mb-4">
                        <PrimaryButton name={"Day 1"} />
                        <PrimaryButton name={"Day 2"} />
                    </div>
                    <ul>
                        <li className="flex items-start mb-4">
                            <div className="w-4 h-4 bg-primary rounded-full mt-1 mr-4"></div>
                            <div>
                                <h3 className="font-semibold">Galle Fort</h3>
                                <p className="text-sm">Visit fort beach and museum</p>
                                <p className="text-sm text-gray-500">9 am - 12 pm</p>
                            </div>
                        </li>
                        <li className="flex items-start mb-4">
                            <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-4"></div>
                            <div>
                                <h3 className="font-semibold">Yummy Yard</h3>
                                <p className="text-sm">Have lunch</p>
                                <p className="text-sm text-gray-500">12 pm - 2 pm</p>
                            </div>
                        </li>
                        <li className="flex items-start mb-4">
                            <div className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-4"></div>
                            <div>
                                <h3 className="font-semibold">Mahamodara View Point</h3>
                                <p className="text-sm">2 pm - 5 pm</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="w-4 h-4 bg-gray-300 rounded-full mt-1 mr-4"></div>
                            <div>
                                <h3 className="font-semibold">Grand Galle</h3>
                                <p className="text-sm">Check in hotel</p>
                                <p className="text-sm text-gray-500">5 pm</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <div className=" p-4">
                    <SelectLocation />
                    {/* <div className="h-full w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62803.838266419204!2d79.88808353578547!3d6.037385293996556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17296c5c15dbd%3A0x3b6a8f52cd6bffda!2sGalle%20Fort!5e0!3m2!1sen!2slk!4v1627811468964!5m2!1sen!2slk"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Galle Map"
                        ></iframe>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CurrentTrip;
