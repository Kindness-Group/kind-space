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
			<div className="bg-gray-300 mx-auto md:max-w-[44rem] lg:max-w-[55rem] min-h-screen">
				<ProfileCard profile={profile} />
				{acts.map((act, index) => (
					<ActCard act={act} key={index} />
				))}
			</div>
		</>
	)
}