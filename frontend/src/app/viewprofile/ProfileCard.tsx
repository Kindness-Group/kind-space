// src/ProfileCard.tsx

import React from 'react';
import {CommitmentCard} from "@/app/viewprofile/CommitmentCard";
import {Profile} from "@/app/viewprofile/page";

type ProfileProps = {
	pro: Profile
}
export function ProfileCard(prop: ProfileProps) {
	let {pro: {name, username, bio, profilePic}} = prop
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

				<header className="flex items-center justify-center space-x-2 mb-6">
					<div id="banner" className="text-black m-16 flex items-center justify-center">
						<img src="/heart-icon.png" className="w-12"/>
						<h1 className="md:text-2xl text-xl text-center font-bold">Hi {name}!</h1>
					</div>

				</header>

				{/* Profile Section */}
				<section className="text-center mb-6 p-4">
					<img src={profilePic} alt="profile picture" className="w-48 h-48 mx-auto"/>
					<h2 className="mt-4 text-xl font-semibold">{username}</h2>
					<p className="mt-2 text-sm leading-7 text-gray-900">
						<span className="font-semibold">Bio:</span> {bio}
					</p>
				</section>

				{/* Daily Kindness Section */}
				<CommitmentCard act={action}/>
			</div>
		</>
	)
}

