import {Comment} from "@/app/postdetails/Comment";
import {ActCard} from "@/app/layout-components/ActCard";
import {KindnessPostProps} from "@/app/kindness-feed/page";

export type Content = {
	name: string,
	message: string,
	date: Date,
}

export default function () {
	let comments: Content[] = [
		{name: "Joe Smith", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor" +
				" incididunt ut labore et dolore magna aliqua.", date: new Date()},
		{name: "John Doe", message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" +
				" ex ea commodo consequat.", date: new Date()},
		{name: "Jerry Sanchez", message: "Excepturi sint occaecati cupiditate non provident, similique sunt in culpa" +
				" qui officia deserunt mollit anim id est laborum.", date: new Date()},
	];
	let post: KindnessPostProps =  {
		username: "Username",
		location: "Location",
		date: "Date",
		description: "Kind act description goes here...",
		likes: 5,
		comments: 0,
		proImage: "https://imageplaceholder.net/200",
		postImage: "https://imageplaceholder.net/800x400"
	}
	return (
		<>
			<ActCard kindPgProps={post}/>
			{/* Comments Section */}
			<section className="bg-gray-100 py-8 mx-auto max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-4">Comments</h2>
					<div className="space-y-4">
						{comments.map((comment, index) => (
							<Comment content={comment} key={index} />
						))}
					</div>
					{/* Add Comment Form */}
					<form className="mt-8 bg-white p-4 rounded-lg shadow">
						<h3 className="text-lg font-semibold mb-4">Add a Comment</h3>
						<div className="mb-4">
							<label htmlFor="comment" className="block text-gray-700 font-medium mb-2">Comment</label>
							<textarea id="comment" name="comment" rows={4} className="w-full px-3 py-2 sm:text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-900" placeholder="Write your comment here..." required></textarea>
						</div>
						<button type="submit"
								  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
							Post Comment
						</button>
					</form>
				</div>
			</section>
		</>
	)
}