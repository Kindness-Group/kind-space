"use server";

import {getSession} from "@/utils/auth.utils";
import {redirect} from "next/navigation";
import {fetchProfileByProfileId} from "@/utils/models/profile/profile.action";
import {EditProfileForm} from "@/app/edit-profile/edit-profile-form";

interface EditProfileProps {
    // You can add props here if needed
}

export default async function EditProfile({}: EditProfileProps) {
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

            <div className="space-y-6">
                <EditProfileForm profile={profile} />
            </div>

        </div>
    );
}
