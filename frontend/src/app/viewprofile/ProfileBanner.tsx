'use server'

import React from "react";

import {getSession} from "@/utils/auth.utils";
import {Profile} from "@/utils/models/profile/profile.model";

type Props = {
    profile: Profile;
}


export async function ProfileBanner(props: Props) {
    const {profile: {profileName}} = props;
    return (
    <>
        <header className="flex items-center justify-center space-x-2 mb-6">
            <div id="banner" className="text-black m-16 flex items-center justify-center">
                <img src="/heart-icon-cropped.png" className="w-12" alt="heart icon" />
                <h1 className="md:text-2xl text-xl text-center font-bold">Hi {profileName}!</h1>
            </div>
        </header>
    </>
    )
}