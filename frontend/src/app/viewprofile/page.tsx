
import React from 'react';
import {ProfileCard} from './ProfileCard';
import {ActCard} from "@/app/layout-components/ActCard";
import {Act} from "@/app/kindness-feed/page";


export type Profile = {
	profileId: string,
	profileActivationToken: string,
	profileBio: string,
	profileEmail: string,
	profileHash: string,
	profileJoinDate: Date,
	profileName: string,
	profilePictureUrl: string | null,
	profileUsername: string,
}

export type DailyAct = {
	description: string,
	count: number,
}
export default function () {
	let profile: Profile = {
		profileId: "01956e77-4d8b-73fa-9c27-0bddfed787ce",
		profileActivationToken: "krpoorfdiqrnodivnnsvbubxrqavnbap",
		profileBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
		profileEmail: "jbond7@agentmail.com",
		profileHash: "5556c2aad06dcb30c3d4213588a51cfb",
		profileJoinDate: new Date(),
		profileName: "James Bond",
		profilePictureUrl: null,
		profileUsername: "jbond31",
	}
	const acts: Array<Act> = [
		{
			actId: '01956880-ef3d-7a51-8064-68da52150696',
			actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
			actContent: 'Placeholder act content',
			actDateTime: new Date(2025, 3, 3, 13, 0, 0),
			actImageUrl: 'https://placecats.com/neo_2/300/200',
			actLat: '-30.94784',
			actLng: '19.36249',
			actAddress: '2301 Zero St, Abq, NM',
			actProfileUsername: 'jbond31',
			actProfilePicUrl: null,
			actLikeLikes: 0,
			actCommentComments: 3
		},
		{
			actId: '01956880-ef3d-7a51-8064-68da52150724',
			actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
			actContent: 'Placeholder content number 2',
			actDateTime: new Date(2025, 3, 5, 12, 0, 0),
			actImageUrl: 'https://placecats.com/neo_banana/300/200',
			actLat: '-30.94794',
			actLng: '19.36949',
			actAddress: '2344 Blahblah St, Abq, NM',
			actProfileUsername: 'jbond31',
			actProfilePicUrl: null,
			actLikeLikes: 4,
			actCommentComments: 0
		},
		{
			actId: '01956880-ef3d-7a51-8064-68da78150724',
			actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
			actContent: 'Placeholder content number 3',
			actDateTime: new Date(2025, 3, 4, 14, 0, 0),
			actImageUrl: 'https://placecats.com/bella/300/200',
			actLat: '-30.94714',
			actLng: '19.32949',
			actAddress: '1234 Example St, Abq, NM',
			actProfileUsername: 'jbond31',
			actProfilePicUrl: null,
			actLikeLikes: 5,
			actCommentComments: 2
		}
	];
	return (
		<>
			<div className="bg-gray-300 mx-auto md:max-w-[44rem] lg:max-w-[55rem] min-h-screen">
				<ProfileCard pro={profile} />
				{acts.map((act, index) => (
					<ActCard act={act} key={index} />
				))}
			</div>
		</>
	)
}