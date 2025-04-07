'use server'

import {Button} from "flowbite-react";
import {Suggestion} from "@/utils/models/suggestion/suggestion.model";
import {Profile} from "@/utils/models/profile/profile.model";
import {CreateCommitment} from "@/app/kindness-suggestions/CreateCommitment";
import {fetchCommitmentsByCommitmentSuggestionId} from "@/utils/models/commitment/commitment.action";
import {unstable_noStore} from "next/cache";

type SuggestionCardProps = {
    suggestion?: Suggestion
    profile?: Profile
}

export async function SuggestionCard(props: SuggestionCardProps) {
    let {suggestion, profile} = props;
    if (suggestion === undefined) {
        return <></>
    }
    let content = suggestion.suggestionContent;

    const commitmentsCreated = await fetchCommitmentsByCommitmentSuggestionId(suggestion.suggestionId);
    const numberOfCommitmentsCreated = commitmentsCreated?.length

    return (
        <>
            <section className="text-gray-900 p-16 flex flex-col relative w-full md:h-[65vh] h-[75vh]">
                <div className="items-center justify-center ">
                <div className="absolute inset-0 bg-cover bg-center w-full h-full border border-1 border-black"
                     style={{backgroundImage: "url('/coffee.png')"}}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/50">
                    </div>
                    {/*style={{backgroundImage: "url('/give-heart2.png')"}}>*/}
                    {/*<div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40">*/}
                    {/*</div>*/}
                </div>
                <div className="relative z-10 text-gray-900 flex flex-col items-center justify-center text-center w-full">
                    <h1 className="md:text-4xl text-2xl font-bold">Today's Act of Kindness</h1>
                    <p className="text-xl md:text-2xl py-10 m-2 md:m-20 md:p-10">{content}</p>
                    <div className="flex items-center justify-center gap-x-[10%] mt:4 whitespace-nowrap">
                        {profile && <CreateCommitment profile={profile} suggestionId={suggestion.suggestionId} />}

                    </div>
                </div>
                </div>
                <div className='relative flex md:items-end md:justify-end justify-center md:mt-auto mt-4 mr-8 md:text-xl'>
                    <img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
                    <p> <span className="font-bold">{ numberOfCommitmentsCreated + 456}</span> People plan to do this!</p>
                </div>
            </section>
        </>
    )
}