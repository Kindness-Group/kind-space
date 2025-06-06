"use server";

import React from 'react';
import {Button} from "flowbite-react";
import {ActCard} from "@/app/layout-components/ActCard";
import {fetchAllActs} from "@/utils/models/act/act.action";
import {fetchLikesByLikeProfileId} from "@/utils/models/like/like.action";
import {getSession} from "@/utils/auth.utils";
import {Like} from "@/utils/models/like/like.model";
import {unstable_noStore} from 'next/cache'


// This is a server component
// It fetches all acts and their likes from the server
// and passes them to the ActCard component for rendering
// It also handles the session and checks if the user has liked any acts
// It uses the fetchAllActs and fetchLikesByLikeProfileId functions to get the data
// It uses the ActCard component to render each act
// It uses the getSession function to get the session data


export default async function page() {
    unstable_noStore()
    const acts = await fetchAllActs()
    const session=await getSession()
    const profileId =session?.profile.profileId
    let likedActs: {[key:string]:Like}= {}


    if (profileId){
        likedActs=await fetchLikesByLikeProfileId(profileId);
    }

    return (
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('/sunset2.png')" }}>
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <section id="banner" className="text-black mt-16 mb-4 flex items-center justify-center">
                    <img src="/heart-icon-cropped.png" className="w-12" alt="heart-icon" />
                    <h1 className="md:text-2xl text-xl text-center font-bold">Kindness Feed</h1>
                </section>
                <p className="text-xl">Spreading Kindness One Post at Time</p>
            </div>

            <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                    <a href="./kind-act-post">
                    <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Share New Kind Act</Button>
                    </a>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                {acts.map((post, index) => (
                    <ActCard act={post} key={index}
                     isLiked={likedActs[post.actId] !== undefined}/>

                ))}
            </div>
        </div>
        </div>
    );
}
