import {Comment} from "@/app/postdetails/Comment";

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
	return (
		<>
			<div className="bg-white rounded shadow mx-auto max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md my-20">
				<header className="p-4">
					<img src="https://imageplaceholder.net/200" alt="profile pic" className="float-left rounded-full w-14 h-14 m-1 mr-3"/>
					<h3 className="text-lg font-bold">Jane Doe</h3>
					<p className="text-sm text-gray-600">Location - Date</p>
				</header>

				<section>
					<img src="https://imageplaceholder.net/600x400" alt="kind image" className="w-full"/>
					<p className="text-base text-gray-600 p-4">Omnis consectetur voluptatem labore aut et vel itaque
						recusandae. Et molestiae iure qui et nihil minus nes ciunt.</p>
				</section>

				<footer className="p-4 flex items-center gap-14">
					<div className="flex items-center justify-center">
						<a href="#" className="mr-3"><img
							src="https://img.icons8.com/flat_round/30/000000/hearts.png"/></a>
						<a href="#" className="uppercase font-bold text-sm text-gray-600 hover:underline">Love</a>
					</div>
					<div className="flex items-center justify-center">
						<a href="#" className="mr-3"><img
							src="https://img.icons8.com/30/db5263/send-comment.png"/></a>
						<a href="#" className="uppercase font-bold text-sm text-gray-600 hover:underline">Comment</a>
					</div>
				</footer>

				{/* Comments Section */}
				<section className="bg-gray-100 py-8">
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
			</div>
		</>
	)
}