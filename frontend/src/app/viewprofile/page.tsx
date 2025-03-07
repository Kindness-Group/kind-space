
import React from 'react';
import {ProfileCard} from './ProfileCard';
import {ActCard} from "@/app/layout-components/ActCard";
import {KindnessPostProps} from "@/app/kindness-feed/page";


export type Profile = {
	profileId: string,
		profileActivationToken: string,
		profileBio: string,
		profileEmail: string,
		profileHash: string,
		profileJoinDate: string,
		profileName: string,
		profilePictureUrl: string,
		profileUsername: string,
}

export type DailyAct = {
	description: string,
	count: number,
}
export default function () {
	let profile: Profile = {
		profileName: "James Bond",
		profileUsername: "jbond31",
		profileBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." +
			" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." +
			" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
		profilePictureUrl: "https://imageplaceholder.net/200"
	}
	const acts: Array<KindnessPostProps> = [
		{
			actId: '01956880-ef3d-7a51-8064-68da52150696',
			actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
			actContent: 'Placeholder act content',
			actDateTime: '03/03/2025',
			actImageUrl: 'https://placecats.com/neo_2/300/200',
			actLat: '-30.94784',
			actLng: '19.36249',
			actAddress: '2301 Zero St, Abq, NM',
		},
		{
			actId: '01956880-ef3d-7a51-8064-68da52150724',
			actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
			actContent: 'Placeholder content number 2',
			actDateTime: '03/05/2025',
			actImageUrl: 'https://placecats.com/neo_banana/300/200',
			actLat: '-30.94794',
			actLng: '19.36949',
			actAddress: '2344 Blahblah St, Abq, NM',
		},
		{
			actId: '01956880-ef3d-7a51-8064-68da78150724',
			actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
			actContent: 'Placeholder content number 3',
			actDateTime: '03/04/2025',
			actImageUrl: 'https://placecats.com/bella/300/200',
			actLat: '-30.94714',
			actLng: '19.32949',
			actAddress: '1234 Example St, Abq, NM',
		}
	];
	return (
		<>
			<div className="bg-gray-300 mx-auto md:max-w-[44rem] lg:max-w-[55rem] min-h-screen">
				<ProfileCard pro={profile} />
				{/* Continue Here */}
				{acts.map((act, index) => (
					<ActCard act={act} profile={profile} key={index} />
				))}
			</div>
		</>
	)
}