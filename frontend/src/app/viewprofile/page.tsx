'use server'

import React from 'react';
import {ProfileCard} from './ProfileCard';
import {ActCard} from "@/app/layout-components/ActCard";
import {fetchActsByActProfileId} from "@/utils/models/act/act.action";
import {getSession} from "@/utils/auth.utils";
import {redirect} from "next/navigation";
import {fetchProfileByProfileId} from "@/utils/models/profile/profile.action";


export default async function () {
	const session = await getSession()
	const profileFromSession = session?.profile
	if (!profileFromSession) {
		redirect ('/kindness-feed');
	}

	const profile = await fetchProfileByProfileId(profileFromSession.profileId);

	const acts = await fetchActsByActProfileId(profileFromSession.profileId)
	return (
		<>
			<div className="bg-cover bg-center" style={{ backgroundImage: "url('/sunset2.png')" }}>
			<div className=" mx-auto md:max-w-[44rem] lg:max-w-[55rem] min-h-screen">
				<ProfileCard profile={profile} />
				<div className="bg-white">
					<h2 className="pt-4 text-xl font-semibold text-center">Your Posts</h2>
				{acts.map((act, index) => (
					<ActCard act={act} key={index} />
				))}
				</div>
			</div>
			</div>
		</>
	)
}