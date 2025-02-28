// src/ProfileCard.tsx

import React from 'react';
import {DailyActCard} from "@/app/viewprofile/DailyActCard";
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
			<div className="w-full md:w-[95%] border border-gray-200 min-h-screen mx-auto md:px-9 shadow-md rounded-lg py-16 bg-white">
				{/* Header */}
				<header className="flex items-center justify-center space-x-2 mb-6">
					<span className="text-xl">❤️</span>
					<span className="text-lg font-medium">Hi {name}!</span>
				</header>

				{/* Profile Section */}
				<section className="text-center mb-6 p-4">
					<img src={profilePic} alt="profile picture" className="w-48 h-48 mx-auto"/>
					<h2 className="mt-4 text-xl font-semibold">{username}</h2>
					<p className="mt-2 text-sm text-gray-600">
						Bio: {bio}
					</p>
				</section>

				{/* Daily Kindness Section */}
				<DailyActCard act={action}/>
			</div>
		</>
	)
}

