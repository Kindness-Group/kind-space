'use server'

import {Act} from "@/utils/models/act/act.model";
import {fetchProfileByProfileId} from "@/utils/models/profile/profile.action";
import {fetchLikesByLikeActId, fetchLikesByLikeProfileId, postLike} from "@/utils/models/like/like.action";
import {fetchCommentsByCommentActId} from "@/utils/models/comment/comment.action";
import {CreateLike} from "@/app/layout-components/CreateLike";
import React from "react";
import {Dropdown, DropdownItem} from "flowbite-react";


type ActProps = {
	act: Act;
	isLiked?: boolean;
}

// This is a server component
// It fetches the profile of the act and the likes and comments for the act
// and passes them to the ActCard component for rendering
// It also handles the session and checks if the user has liked any acts
// It uses the fetchAllActs and fetchLikesByLikeProfileId functions to get the data
// It uses the ActCard component to render each act
// It uses the getSession function to get the session data


export async function ActCard (props: ActProps) {
	let {isLiked, act: {actId, actProfileId, actContent, actDateTime, actImageUrl, actAddress}} = props;
	const profile = await fetchProfileByProfileId(actProfileId)
	const likes = await fetchLikesByLikeActId(actId)
	const numberOfLikes = likes?.length
	const comments = await fetchCommentsByCommentActId(actId)
	const numberOfComments = comments?.length


	return (
		<>
		<section className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded shadow mx-auto max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md mt-20">
			<div className="bg-white ">

			<section>
				{actImageUrl && (<img src={actImageUrl} alt="kind image" className="w-[95%] mx-auto"/>)}
				<header className="p-4">
					<img src={profile.profilePictureUrl ?? "/blank_profile.jpg"} alt="profile pic" className="float-left rounded-full w-14 h-14 m-1 mr-3"/>
					<div className="flex justify-between space-x-3">
						<h3 className="text-lg font-bold"><a href={`../viewprofile/${profile.profileUsername}`}>{profile.profileUsername}</a></h3>
						<Dropdown label={""} inline>
							<DropdownItem>
								<a href={`/kind-act-post/${actId}`}>edit post</a>
								{/*<DeleteButton actId={actId} />*/}
							</DropdownItem>
						</Dropdown>
					</div>
					<p className="text-sm text-gray-600">{actAddress} - {actDateTime?.toDateString()}</p>
				</header>

				<p className="bg-gray-100 mx-auto text-base text-gray-900 w-[95%] p-4 my-4">{actContent}</p>
			</section>

			<footer className="px-6 pb-6 flex justify-between">
				<div className="flex gap-10">
					<div className="flex">
						<a href={`/postdetails/${actId}`} className="self-end mr-3"><img src="/comment_message_communication_icon.png" alt="chat bubble" className="w-9"/></a>
						<a href={`/postdetails/${actId}`} className="uppercase font-bold self-center text-sm text-gray-600 hover:underline">Comments ({numberOfComments})</a>
					</div>
				</div>
				<div className="flex space-x-3 items-center">
					<CreateLike actId={actId} profileId={actProfileId}/>
					<img src={isLiked ? "https://img.icons8.com/flat_round/30/000000/hearts.png" : "/heart-icon-cropped.png"} alt="Liked or Unliked" className="w-5 h-5" />

					<p className="text-sm text-gray-900"><span className="font-bold"> {numberOfLikes} </span> People loved this Post!</p>
				</div>
			</footer>
			</div>
		</section>
		</>
	)
}