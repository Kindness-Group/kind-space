'use server'

import React from 'react';
import {CommitmentCard} from "@/app/viewprofile/CommitmentCard";
import {Profile} from "@/utils/models/profile/profile.model";
// import ProfileBanner from "@/app/viewprofile/ProfileBanner";
import {getSession} from "@/utils/auth.utils";
import {ProfileBanner} from "@/app/viewprofile/ProfileBanner";
import {fetchCommitmentsByCommitmentProfileId} from "@/utils/models/commitment/commitment.action";

type Props = {
	profile: Profile;
}

export async function ProfileCard(props: Props) {
	const profile = props.profile
	// here we want to get the suggestion based off of the commitmentSuggestionId
	// to know what suggestionIds to use, we must get the commitments based on the commitmentProfileId --> get
	// commitments
	const commitments = await fetchCommitmentsByCommitmentProfileId(profile.profileId)
	/*
	get individual commitments to display with CommitmentCard component
	pass commitments with .map and let them render on CommitmentCard.tsx
	*/

	return (
		<>
			<div className="w-full border flex flex-col pt-14 pb-10 border-gray-200 h-[935px] overflow-x-hidden overflow-y-auto md:px-9 shadow-sm rounded">
				{/* Header */}
				<ProfileBanner profile={profile}/>
				{/* Profile Section */}
				<section className="text-center mb-6 p-4">
					<img src={profile?.profilePictureUrl ?? "/blank_profile.jpg"} alt="profile picture" className="w-48 h-48 mx-auto"/>
					<h2 className="mt-4 text-xl font-semibold">{profile?.profileUsername}</h2>
					<p className="mt-2 text-sm leading-7 text-gray-900">
						<span className="font-semibold">Bio:</span> {profile?.profileBio}
					</p>
				</section>
				{/* Daily Kindness Section */}
				{commitments.map((commitment, index) => (
					<CommitmentCard commitment={commitment} key={index} />
				))}
			</div>
		</>
	)
}

