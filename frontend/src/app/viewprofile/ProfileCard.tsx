// src/ProfileCard.tsx

import React from 'react';
import {CommitmentCard} from "@/app/viewprofile/CommitmentCard";
import {Profile} from "@/app/viewprofile/page";
import ProfileBanner from "@/app/viewprofile/ProfileBanner";


type ProfileProps = {
	pro: Profile
}

let profile: any = {
	profileId: '0195687b-bead-76eb-9385-0a2111533b1c',
	profileActivationToken: 'dnfiawhiuefbnwai',
	profileBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
	profileEmail: 'email@example.com',
	profileHash: 'asdfghjkl,mnbvfdrtyujnhbgvfcdsderftgyhujikjhgfdsfgthy',
	profileJoinDate: '03/03/2025',
	profileName: "James Bond",
	profilePictureUrl: 'https://placecats.com/millie/300/150',
	profileUsername: "jbond31",
}

export function ProfileCard(prop: ProfileProps) {
	let {pro: {profileName, profileUsername, profileBio, profilePictureUrl}} = prop
	let action = {
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
			" eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" +
			" minim veniam, quis nostrud exercitation ullamco.",
		count: 0,
	}
	return (
		<>
			<div className="w-full border flex flex-col pt-14 pb-10 border-gray-200 h-[935px] overflow-x-hidden overflow-y-auto md:px-9 shadow-sm rounded bg-white">
				{/* Header */}
				<ProfileBanner profileBanner={profile}/>
				{/* Profile Section */}
				<section className="text-center mb-6 p-4">
					<img src={profilePictureUrl ?? "/blank_profile.jpg"} alt="profile picture" className="w-48 h-48 mx-auto"/>
					<h2 className="mt-4 text-xl font-semibold">{profileUsername}</h2>
					<p className="mt-2 text-sm leading-7 text-gray-900">
						<span className="font-semibold">Bio:</span> {profileBio}
					</p>
				</section>

				{/* Daily Kindness Section */}
				<CommitmentCard act={action}/>
			</div>
		</>
	)
}

