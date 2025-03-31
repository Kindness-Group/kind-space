'use server'

import React from 'react';
import {CommitmentCard} from "@/app/viewprofile/CommitmentCard";
import {Profile} from "@/utils/models/profile/profile.model";
// import ProfileBanner from "@/app/viewprofile/ProfileBanner";
import {getSession} from "@/utils/auth.utils";
import {ProfileBanner} from "@/app/viewprofile/ProfileBanner";

type Props = {
	profile: Profile;
}

export async function ProfileCard(props: Props) {
	const profile = props.profile

	return (
		<>
			<div className="w-full border flex flex-col pt-14 pb-10 border-gray-200 h-[935px] overflow-x-hidden overflow-y-auto md:px-9 shadow-sm rounded bg-white">
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
				{/*<CommitmentCard act={action}/>*/}
			</div>
		</>
	)
}

