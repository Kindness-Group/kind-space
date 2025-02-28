
import React from 'react';
import {ProfileCard} from './ProfileCard';


export type Profile = {
	name: string,
	username: string,
	bio: string,
	profilePic: string
}
export type DailyAct = {
	description: string,
	count: number,
}
export default function () {
	let profile: Profile = {
		name: "James Bond",
		username: "jbond31",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." +
			" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." +
			" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
		profilePic: "https://imageplaceholder.net/200"
	}
	return (
		<div className="bg-gray-300 mx-auto md:max-w-[35rem] lg:max-w-[48rem] min-h-fit flex items-center justify-center">
			<ProfileCard pro={profile} />
		</div>
	)
}
