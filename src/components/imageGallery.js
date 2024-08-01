import React from 'react';

const ImageGallery = () => {
    return (
        <div className="container mx-auto px-5 py-2 flex flex-col items-center">
            <div className="-m-1 flex flex-col sm:flex-wrap md:-m-2 w-full">
                <div className="flex flex-col items-start justify-center py-4 md:py-8 w-full">
                    <p className="font-bold text-xl">Collections</p>
                    <div className="space-x-4 overflow-x-auto flex flex-row w-full">
                        {Array(7).fill(0).map((_, index) => (
                            <button key={index}>
                                <img
                                    src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
                                    alt="collection"
                                    className="min-w-44 h-44 shadow rounded"
                                />
                                <span>All</span>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="flex w-1/2 flex-wrap flex-row flex-row-reverse">
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
                            />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                                src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
                            />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                                src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
