'use server'

import React from 'react';
import {CommitmentCard} from "@/app/viewprofile/CommitmentCard";
import {Profile} from "@/utils/models/profile/profile.model";
import {getSession} from "@/utils/auth.utils";
import {ProfileBanner} from "@/app/viewprofile/ProfileBanner";
import {fetchCommitmentsByCommitmentProfileId} from "@/utils/models/commitment/commitment.action";

type Props = {
	profile: Profile;
}

/**
 * Renders a profile card with user information and commitments
 *
 * This component displays a user's profile information including their
 * profile picture, username, and bio. It also shows their commitments
 * if they have any, or a message encouraging them to make commitments
 * if they don't have any.
 *
 * @param {Props} props - Component props
 * @param {Profile} props.profile - The user profile data to display
 * @returns {Promise<JSX.Element>} The rendered profile card component
 */
export async function ProfileCard(props: Props) {
	const profile = props.profile
	const commitments = await fetchCommitmentsByCommitmentProfileId(profile.profileId)

	return (
		<>
			<div className="w-full border flex flex-col pt-14 pb-10 border-gray-200 h-auto max-h-[935px] overflow-x-hidden overflow-y-auto md:px-9 shadow-sm rounded">
				{/* Profile Section */}
				<section className="text-center mb-6 p-4">
					<img src={profile?.profilePictureUrl ?? "/blank_profile.jpg"} alt="profile picture" className="w-48 h-48 mx-auto"/>
					<h2 className="mt-4 text-xl font-semibold">{profile?.profileUsername}</h2>
					<p className="mt-2 text-sm leading-7 text-gray-900">
						<span className="font-semibold">Bio:</span> {profile?.profileBio}
					</p>
				</section>
				{/* Daily Kindness Section */}
				{commitments.length > 1 ?
					<div className="w-full border flex flex-col pt-14 pb-10 border-gray-200 h-[935px] overflow-x-hidden overflow-y-auto md:px-9 shadow-sm rounded">
						{(commitments.map((commitment, index) => (
					<CommitmentCard commitment={commitment} key={index} />)))}
					</div>
					: (<p>You think you're all bad or what? You don't have any commitments, click to view today's
						<a href="../kindness-suggestions" className="hover:text-yellow-400 font-bold text-purple-800 justify-center"> Act of Kindness Suggestions</a>
					</p>)
				}

			</div>
		</>
	)
}

// isLiked ? "https://img.icons8.com/flat_round/30/000000/hearts.png" : "/heart-icon-cropped.png"
