'use server'

import {Comment} from '@/utils/models/comment/comment.model'
import {getSession} from "@/utils/auth.utils";

type CommentProps = {
	content: Comment
}

export async function CommentCard (prop: CommentProps) {
	let {content: {commentContent, commentDateTime, commentId}} = prop
	const session = await getSession()
	const profileUserName = session?.profile.profileUsername
	return (
		<>
			<div className="bg-white p-4 rounded-lg shadow">
				<div className="flex items-center mb-2">
					<img src="https://imageplaceholder.net/200" alt="User Avatar"
						  className="w-10 h-10 rounded-full mr-3"/>
					<div>
						<h3 className="font-semibold">{profileUserName}</h3>
						<p className="text-sm text-gray-500">{`Posted on ${commentDateTime?.toDateString()}`}</p>
						{/*<a href={`../[commentId]/${commentId}`}>edit post</a>*/}
					</div>
				</div>
				<p className="text-gray-700">{commentContent}</p>
			</div>
		</>
	)
}