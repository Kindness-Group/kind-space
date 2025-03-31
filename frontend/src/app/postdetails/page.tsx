'use server'
import {CommentCard} from "@/app/postdetails/CommentCard";
import {ActCard} from "@/app/layout-components/ActCard";

import {CommentForm} from "@/app/postdetails/comment-form";
import {getSession} from "@/utils/auth.utils";
import {PageProps} from "@/utils/interfaces/NextComponent";


export type Comment = {
	commentId: string,
	commentActId: string,
	commentProfileId: string,
	commentContent: string,
	commentDateTime: Date,
	commentProfileUserName: string,
}

export default async function (props: PageProps<{actId:string}>) {
	const actId = props.params.actId;
	const session= await getSession()
	const commentProfileId = session?.profile.profileId


	return (
		<>
			<section id="replace-banner" className="text-black m-16 flex items-center justify-center">
				<img src="/heart-icon.png" className="w-12"/>
				<h1 className="md:text-2xl text-xl text-center font-bold">View Comments</h1>
			</section>
			<ActCard act={post} key={index}/>
			{/* Comments Section */}
			<section className="bg-gray-100 py-8 mx-auto max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-4">Comments</h2>
					<div className="space-y-4">
						{comments.map((comment, index) => (
							<CommentCard content={comment} key={index} />
						))}
					</div>
					{(commentProfileId && commentActId) && <CommentForm commentActId={commentActId} commentProfileId={commentProfileId}/>}

				</div>
			</section>
		</>
	)
}