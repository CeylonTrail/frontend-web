import React, { useState, useRef } from 'react';
import { SimpleInput, Password, Email, DropdownInput } from './inputFields'; // adjust the import path accordingly
import { PrimaryButton } from './Button';

const UserProfileForm = () => {
    const [formData, setFormData] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        bio: '',
        phoneNumber: '',
        interests: [],
        profileImage: null,
    });

    const handleSave = () => { 
        // Add the logic to save the
    }
    const handleClose = () => { 
        window.location.href = "/profile";
    }

    const interestOptions = [
        'Hiking and Nature',
        'Waterfalls',
        'Wildlife and National Parks',
        'Religious Sites',
        'Tea Plantations and Scenic Train Rides',
        'Historical and Cultural Sites',
        'Beaches and Coastal Areas',
        'Cultural Experiences and Festivals',
        'Museums',
    ];

    const fileInputRef = useRef(null);

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleInterestsChange = (selectedInterest) => {
        setFormData((prevData) => {
            if (prevData.interests.includes(selectedInterest)) {
                return { ...prevData, interests: prevData.interests.filter((i) => i !== selectedInterest) };
            } else {
                return { ...prevData, interests: [...prevData.interests, selectedInterest] };
            }
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4 flex items-center">
                <div className=" w-36 h-36 mr-4">
                    {formData.profileImage ? (
                        <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-600">No Image</span>
                        </div>
                    )}
                </div>
                <button
                    className="px-4 py-2 bg-gray-300 rounded-md text-gray-700"
                    onClick={triggerFileInput}
                >
                    {formData.profileImage ? "Change Profile Image" : "Upload Profile Image"}
                </button>

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                />
            </div>
            <div className="mb-4">
                <SimpleInput pholder="User name" value={formData.userName} onChange={handleChange('userName')} />
            </div>
            <div className="mb-4">
                <SimpleInput pholder="First name" value={formData.firstName} onChange={handleChange('firstName')} />
            </div>
            <div className="mb-4">
                <SimpleInput pholder="Last name" value={formData.lastName} onChange={handleChange('lastName')} />
            </div>
            <div className="mb-4">
                <Email pholder="Email" value={formData.email} onChange={handleChange('email')} />
            </div>
            <div className="mb-4">
                <Password pholder="Password" value={formData.password} onChange={handleChange('password')} />
            </div>
            <div className="mb-4">
                <textarea
                    placeholder="Bio"
                    className="w-full h-32 border-2 border-secondary rounded-md px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-SecondaryLight"
                    value={formData.bio}
                    onChange={handleChange('bio')}
                />
            </div>
            <div className="mb-4">
                <SimpleInput pholder="Phone Number" value={formData.phoneNumber} onChange={handleChange('phoneNumber')} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Interests:</label>
                <div className="flex flex-wrap gap-2 mt-2">
                    {interestOptions.map((interest, index) => (
                        <button
                            key={index}
                            onClick={() => handleInterestsChange(interest)}
                            className={`px-3 py-1 rounded-full text-sm ${formData.interests.includes(interest) ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-4">
                <PrimaryButton  name={"Cancel"} isActive={true} action={handleClose}/>
                <PrimaryButton name={"Save"} isActive={false} action={handleSave} />

            </div>
        </div>
    );
};

export default UserProfileForm;
