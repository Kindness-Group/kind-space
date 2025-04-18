'use server'

import React from "react";
import {Button} from "flowbite-react";
import {Commitment} from "@/utils/models/commitment/commitment.model";
import {fetchSuggestionBySuggestionId} from "@/utils/models/suggestion/suggestion.action";
import {CommitmentCompleted} from "@/app/viewprofile/CommitmentCompleted";
import {fetchCommitmentsByCommitmentProfileId} from "@/utils/models/commitment/commitment.action";


type Props = {
 commitment: Commitment
}

/**
 * CommitmentCard component displays a commitment card with details of a daily act of kindness.
 *
 * This component fetches and displays:
 * - The suggestion content associated with the commitment
 * - Commitment completion status
 * - Total number of completed commitments for the profile
 *
 * @param props - Component properties
 * @param props.commitment - The commitment object to display
 * @returns A styled card showing commitment details and completion status
 */
export async function CommitmentCard(props: Props) {
	let {commitment} = props
	// Fetch the suggestion content based on the commitment's suggestion ID
	const suggestion = await fetchSuggestionBySuggestionId(commitment.commitmentSuggestionId);
	const commitments = await fetchCommitmentsByCommitmentProfileId(commitment.commitmentProfileId)
	// Filter the commitments to find the completed ones
	const completedCommitments = commitments.filter(commitment => {
		return commitment.commitmentCompleted
	})

	// Get the number of completed commitments
	const numberCompletedCommitments = completedCommitments?.length

	return (

		<section className="relative flex flex-col bg-gray-100 px-4 pt-[3rem] rounded-lg h-[23rem] bg-cover bg-center bg-[url('/coffee.png')]">
			<div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/55"></div>
			<div className="z-10 flex flex-col w-[90%]">

				<h3 className="text-lg font-semibold mb-4">Your Daily Act of Kindness</h3>
				<p className="text-sm leading-7 text-gray-900 mb-5">
					{suggestion.suggestionContent}
				</p>
				<div className="flex space-x-8 mb-1">
					<CommitmentCompleted commitment={commitment} />
				</div>
			</div>
			<div className="relative flex md:mt-auto mb-4 px-8">
				<img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
				<p className="text-sm text-gray-900">
					You've Completed <span className="font-bold">{numberCompletedCommitments}</span> Daily Acts of Kindness!
				</p>

			</div>
		</section>
	)
}