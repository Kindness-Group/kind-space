import React from "react";
import {Profile} from "@/app/viewprofile/page";

type ProfileBannerProps = {
    profileBanner: Profile;
}


export default function ProfileBanner(props: ProfileBannerProps) {
    let {profileBanner} = props
    let profileName = profileBanner.profileName;
    return (
    <>
        <header className="flex items-center justify-center space-x-2 mb-6">
            <div id="banner" className="text-black m-16 flex items-center justify-center">
                <img src="/heart-icon.png" className="w-12"/>
                <h1 className="md:text-2xl text-xl text-center font-bold">Hi {profileName}!</h1>
            </div>
        </header>
    </>
    )
}