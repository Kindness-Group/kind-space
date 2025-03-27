"use client";

import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import {getSession} from "@/utils/auth.utils";
import {redirect} from "next/navigation";
import {fetchProfileByProfileId} from "@/utils/models/profile/profile.action";

interface EditProfileProps {
    // You can add props here if needed
}

export default async function EditProfile({}: EditProfileProps) {
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const session = await getSession()

    if (!session) {
        redirect(`/sign-in`);
    }

    const profile = await fetchProfileByProfileId(session.profile.profileId)

    console.log(profile)

    // Handle image upload
    // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             setProfileImage(event.target?.result as string);
    //         };
    //         reader.readAsDataURL(e.target.files[0]);
    //     }
    // };

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gray-200 mr-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5L4.5 12L12 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <section id="banner" className="text-black m-16 flex items-center justify-center">
                    <img src="/heart-icon.png" className="w-12"/>
                    <h1 className="md:text-2xl text-xl text-center font-bold">Edit Profile</h1>
                </section>
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
                    // onChange={handleImageUpload}
                />
            </div>

            <div className="space-y-6">

                //edit profile form here

                <div className="flex justify-center mt-8">
                    <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                        <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Save</Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
