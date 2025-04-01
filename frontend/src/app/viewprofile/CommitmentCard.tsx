'use server'

import React from "react";
import {Button} from "flowbite-react";
import {Commitment} from "@/utils/models/commitment/commitment.model";
import {fetchSuggestionBySuggestionId} from "@/utils/models/suggestion/suggestion.action";


type Props = {
 commitment: Commitment
}

export async function CommitmentCard(props: Props) {
	let {commitment: {commitmentSuggestionId}} = props
	// now get the suggestion using commitmentSuggestionId
	const suggestion = await fetchSuggestionBySuggestionId(commitmentSuggestionId);

	return (

		<section className="relative flex flex-col bg-gray-100 px-4 pt-[3rem] rounded-lg h-[23rem] bg-cover bg-center bg-[url('/coffee.png')]">
			<div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/55"></div>
			<div className="z-10 flex flex-col w-[90%]">

				<h3 className="text-lg font-semibold mb-4">Your Daily Act of Kindness</h3>
				<p className="text-sm leading-7 text-gray-900 mb-5">
					{suggestion.suggestionContent}
				</p>
				<div className="flex space-x-8 mb-1">
					<div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
						{/* TO-DO: make button work with backend to have commitmentCompleted be true when button is
						 clicked */}
						<Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Done!</Button>
					</div>

				</div>
			</div>
			<div className="relative flex md:mt-auto mb-4 px-8">
				<img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
				<p className="text-sm text-gray-900">
					You’ve Completed {count} Daily Acts of Kindness!
				</p>

			</div>
		</section>
	)
}