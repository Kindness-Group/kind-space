import {Comment} from '@/app/postdetails/page'

type CommentProps = {
	content: Comment
}

export function CommentCard (prop: CommentProps) {
	let {content: {commentContent, commentDateTime, commentProfileUserName}} = prop
	return (
		<>
			<div className="bg-white p-4 rounded-lg shadow">
				<div className="flex items-center mb-2">
					<img src="https://imageplaceholder.net/200" alt="User Avatar"
						  className="w-10 h-10 rounded-full mr-3"/>
					<div>
						<h3 className="font-semibold">{commentProfileUserName}</h3>
						<p className="text-sm text-gray-500">{`Posted on ${commentDateTime.toDateString()}`}</p>
					</div>
				</div>
				<p className="text-gray-700">{commentContent}</p>
			</div>
		</>
	)
}