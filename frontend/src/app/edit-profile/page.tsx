"use client";

import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

interface EditProfileProps {
    // You can add props here if needed
}

export default function EditProfile({}: EditProfileProps) {
    const [profileImage, setProfileImage] = useState<string | null>(null);

    // Handle image upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProfileImage(event.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5L4.5 12L12 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h1 className="text-3xl font-bold">Edit Profile</h1>
            </div>

            <div className="flex flex-col items-center mb-8">
                <div
                    className="w-64 h-64 bg-gray-200 flex items-center justify-center mb-4 cursor-pointer"
                    onClick={() => document.getElementById('profile-upload')?.click()}
                >
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="text-center text-gray-500">
                            <p>Add Profile Picture</p>
                            <p>Here</p>
                        </div>
                    )}
                </div>
                <input
                    id="profile-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </div>

            <div className="space-y-6">
                <div className="flex items-center">
                    <Label htmlFor="name" className="w-32 text-lg font-medium">Name:</Label>
                    <TextInput
                        id="name"
                        placeholder="Enter Full Name"
                        className="flex-1"
                        type="text"
                    />
                </div>

                <div className="flex items-center">
                    <Label htmlFor="username" className="w-32 text-lg font-medium">Username:</Label>
                    <TextInput
                        id="username"
                        placeholder="Enter Username"
                        className="flex-1"
                        type="text"
                    />
                </div>

                <div className="flex items-center">
                    <Label htmlFor="email" className="w-32 text-lg font-medium">Email:</Label>
                    <TextInput
                        id="email"
                        placeholder="Enter Email"
                        className="flex-1"
                        type="email"
                    />
                </div>

                <div className="flex items-center">
                    <Label htmlFor="password" className="w-32 text-lg font-medium">Password:</Label>
                    <TextInput
                        id="password"
                        placeholder="Enter Password"
                        className="flex-1"
                        type="password"
                    />
                </div>

                <div className="flex">
                    <Label htmlFor="bio" className="w-32 text-lg font-medium">Bio:</Label>
                    <Textarea
                        id="bio"
                        placeholder="Tell us a little about you!"
                        className="flex-1"
                        rows={6}
                    />
                </div>

                <div className="flex justify-center mt-8">
                    <Button color="dark" className="px-12">
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}
