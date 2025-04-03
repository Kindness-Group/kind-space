'use server'

import {Comment} from '@/utils/models/comment/comment.model'
import {getSession} from "@/utils/auth.utils";
import {CommentForm} from "@/app/postdetails/[actId]/comment-form";
import {EditCommentForm} from "@/app/postdetails/[actId]/edit-comment-form";

type CommentProps = {
	comment: Comment
}

export async function CommentCard (prop: CommentProps) {
	let {comment} = prop
	const session = await getSession()
	const profileUserName = session?.profile.profileUsername
	return (
		<>
			<div className="bg-white p-4 rounded-lg shadow">
				<div className="flex items-center mb-2">
					<img src="https://imageplaceholder.net/200" alt="User Avatar"
						  className="w-10 h-10 rounded-full mr-3"/>
					<div className="flex w-full justify-between">
						<div>
							<h3 className="font-semibold">{profileUserName}</h3>
							<p className="text-sm text-gray-500">{`Posted on ${comment.commentDateTime?.toDateString()}`}</p>
						</div>
						<EditCommentForm comment={comment} />
					</div>
				</div>
				<p className="text-gray-700">{comment.commentContent}</p>
			</div>
		</>
	)
}