'use server'

import React from 'react';
import {ProfileCard} from '../ProfileCard';
import {ActCard} from "@/app/layout-components/ActCard";
import {fetchActsByActProfileId} from "@/utils/models/act/act.action";
import {fetchProfileByProfileUsername} from "@/utils/models/profile/profile.action";
import {PageProps} from "@/utils/interfaces/NextComponent";
import {ProfileBanner} from "@/app/viewprofile/ProfileBanner";

/**
 * The function:
 *
 * Is marked async to handle Promise-based operations
 * Takes a props parameter typed as PageProps<Promise<{profileUsername:string}>>
 * Extracts routing parameters by awaiting props.params
 * Stores the profileUsername from URL in a variable
 * This pattern is typical in Next.js server components for dynamic routes. The file is located in a path with [profileUsername], which creates a dynamic route segment that captures the username from the URL. This username is then used to fetch the specific profile data in the subsequent code.
 * @param props
 */
export default async function (props: PageProps<Promise<{profileUsername:string}>>) {
    const params = await props.params
    const profileUsername = params.profileUsername

    // Fetch the profile data using the profileUsername from the URL
    const profile = await fetchProfileByProfileUsername(profileUsername);

    const acts = await fetchActsByActProfileId(profile.profileId)

    return (
        <>
            <div className="bg-cover bg-center" style={{ backgroundImage: "url('/sunset2.png')" }}>
                <div className="bg-white mx-auto md:max-w-[44rem] lg:max-w-[55rem] min-h-screen">
                    {/* Profile Banner */}
                    <header className="flex items-center justify-center space-x-2 mb-6">
                        <div id="banner" className="text-black m-16 flex items-center justify-center">
                            <img src="/heart-icon.png" className="w-12" alt="heart icon" />
                            <h1 className="md:text-2xl text-xl text-center font-bold">{profileUsername}</h1>
                        </div>
                    </header>
                    {/* Profile Card */}
                    <ProfileCard profile={profile} />
                    {/* Display Act Cards */}
                    <div className="bg-white">
                        <h2 className="pt-4 text-xl font-semibold text-center">Your Posts</h2>
                        {acts.map((act, index) => (
                            <ActCard act={act} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}