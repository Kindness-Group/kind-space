'use server'

import {Button} from "flowbite-react";
import {Suggestion} from "@/utils/models/suggestion/suggestion.model";
import {Profile} from "@/utils/models/profile/profile.model";
import {CreateCommitment} from "@/app/kindness-suggestions/CreateCommitment";
import {fetchCommitmentsByCommitmentSuggestionId} from "@/utils/models/commitment/commitment.action";
import {CommitmentCompleted} from "@/app/viewprofile/CommitmentCompleted";
import React from "react";

type MoreSuggestionProps = {
    suggestion: Suggestion
    profile?: Profile
}


export async function MoreSuggestionCard(props: MoreSuggestionProps) {

    let {suggestion, profile} = props;
    const commitmentsCreated = await fetchCommitmentsByCommitmentSuggestionId(suggestion.suggestionId);
    const numberOfCommitmentsCreated = commitmentsCreated?.length


    return (
        <section>
            <div className="relative md:w-[45vh] md:h-[45vh] w-[62vh] h-[62vh] mb-16">
        <div className="text-gray-900 p-16 flex flex-col items-center justify-center h-full">
            <div className="absolute inset-0 bg-cover bg-center w-full h-full"
                 style={{backgroundImage: "url('/giving-flower.png')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/50">
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                <h1 className="md:text-4xl text-2xl font-bold">Act of Kindness</h1>
                <p className="text-lg md:text-xl p-4">{suggestion.suggestionContent}</p>
            </div>
        </div>
            </div>

        <div id="below-image" className="position:relative flex flex-col items-center justify-center w-full mt-[2vh] mb-[12vh]">
            <div className="flex items-center justify-center my-4">
                <img src="/heart-icon-cropped.png" className="w-5" alt="heart icon"/>
                <p><span className="font-bold">{ numberOfCommitmentsCreated }</span> People plan to do this!</p>
            </div>
            <div className="flex items-center justify-center gap-x-[10%] whitespace-nowrap mb-16">
                <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                    {profile &&
                    <CreateCommitment profile={profile} suggestionId={suggestion.suggestionId}/>}
                </div>


            </div>
        </div>

        </section>
    )
}