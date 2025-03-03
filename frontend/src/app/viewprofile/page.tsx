
import React from 'react';
import {ProfileCard} from './ProfileCard';
import {Banner} from "@/app/layout-components/Banner";
import {ActCard} from "@/app/layout-components/ActCard";
import {KindnessPostProps} from "@/app/kindness-feed/page";


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
	const sampleData: Array<KindnessPostProps> = [
		{
			username: "jbond31",
			location: "New York, USA",
			date: "2025-03-01",
			description: "Exploring the city!",
			likes: 120,
			comments: 15,
			proImage: "https://example.com/profiles/john_doe.jpg",
			postImage: "https://example.com/posts/city_view.jpg"
		},
		{
			username: "jbond31",
			location: "London, UK",
			date: "2025-03-02",
			description: "A beautiful day in the park.",
			likes: 200,
			comments: 30,
			proImage: "https://example.com/profiles/jane_smith.jpg",
			postImage: "https://example.com/posts/park.jpg"
		},
		{
			username: "jbond31",
			location: "Tokyo, Japan",
			date: "2025-03-03",
			description: "Delicious sushi dinner!",
			likes: 300,
			comments: 45,
			proImage: "https://example.com/profiles/alex_92.jpg",
			postImage: "https://example.com/posts/sushi.jpg"
		}
	];
	return (
		<>
			<Banner />
			<div className="bg-gray-300 mx-auto md:max-w-[44rem] lg:max-w-[55rem] min-h-screen">
				<ProfileCard pro={profile} />
				{/* Continue Here */}
				{sampleData.map((post, index) => (
					<ActCard kindPgProps={post} key={index} />
				))}
			</div>
		</>
	)
}
