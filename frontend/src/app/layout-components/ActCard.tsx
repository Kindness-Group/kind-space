import React from "react";
import {KindnessPostProps} from "@/app/kindness-feed/page";


type Props = {
	kindPgProps: KindnessPostProps;
}

export function ActCard (props: Props) {
	let {kindPgProps: {username, location, date, description, likes, comments, proImage, postImage}} = props;

	return (
		<section className="bg-white rounded shadow mx-auto max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md mt-20">
			<header className="p-4">
				<img src={proImage} alt="profile pic" className="float-left rounded-full w-14 h-14 m-1 mr-3"/>
				<h3 className="text-lg font-bold">{username}</h3>
				<p className="text-sm text-gray-600">{location} - {date}</p>
			</header>

			<section>
				<img src={postImage} alt="kind image" className="w-[95%] mx-auto"/>
				<p className="bg-gray-100 mx-auto text-base text-gray-900 w-[95%] p-4 my-4">{description}</p>
			</section>

			<footer className="px-6 pb-6 flex justify-between">
				<div className="flex gap-10">
					<div className="flex items-center">
						<a href="#" className="mr-3"><img
							src="https://img.icons8.com/flat_round/30/000000/hearts.png" alt="heart image"/></a>
						<a href="#" className="uppercase font-bold text-sm text-gray-600 hover:underline">Love</a>
					</div>
					<div className="flex">
						<a href="#" className="self-end mr-3"><img
							src="/comment_message_communication_icon.png" alt="chat bubble" className="w-9"/></a>
						<a href="#" className="uppercase font-bold self-center text-sm text-gray-600 hover:underline">Comments ({comments})</a>
					</div>
				</div>
				<div className="flex space-x-3 items-center">
					<img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
					<p className="text-sm text-gray-900">
						<span className="font-bold">{likes}</span> People loved this Post!
					</p>
				</div>
			</footer>
		</section>
	)
}