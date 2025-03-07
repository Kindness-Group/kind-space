import {CommentCard} from "@/app/postdetails/CommentCard";
import {ActCard} from "@/app/layout-components/ActCard";
import {Act} from "@/app/kindness-feed/page";
import {Banner} from "@/app/layout-components/Banner";

export type Comment = {
	commentId: string,
	commentActId: string,
	commentProfileId: string,
	commentContent: string,
	commentDateTime: Date,
	commentProfileUserName: string,
}

export default function () {
	let comments: Comment[] = [
		{
			commentId: "01956e77-4d8b-7334-b413-976aa42b178c",
			commentActId: "01956880-ef3d-7a51-8064-68da52150696",
			commentProfileId: "01956e77-4d8b-74f8-a553-c018ffaba56d",
			commentContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor" +
				" incididunt ut labore et dolore magna aliqua.",
			commentDateTime: new Date(),
			commentProfileUserName: "janedoe456"
		},
		{
			commentId: "01956e77-4d8b-7f30-a757-737fdaf09d16",
			commentActId: "01956880-ef3d-7a51-8064-68da52150696",
			commentProfileId: "01956e77-4d8b-7569-96d8-7329f4058ac3",
			commentContent: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip" +
				" ex ea commodo consequat.",
			commentDateTime: new Date(2025, 2, 6, 11, 0, 0),
			commentProfileUserName: "johndoe123"
		},
		{
			commentId: "01956e77-4d8b-7e0d-8bc5-515891e35256",
			commentActId: "01956880-ef3d-7a51-8064-68da52150696",
			commentProfileId: "01956e77-4d8b-73fa-9c27-0bddfed787ce",
			commentContent: "Excepturi sint occaecati cupiditate non provident, similique sunt in culpa" +
				" qui officia deserunt mollit anim id est laborum.",
			commentDateTime: new Date(2025, 2, 3, 12, 0, 0),
			commentProfileUserName: "jbond31"
		},
	];

	let post: Act =  {
		actId: '01956880-ef3d-7a51-8064-68da52150696',
		actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
		actContent: 'Placeholder act content',
		actDateTime: new Date(2025, 2, 5, 9, 0, 0),
		actImageUrl: 'https://placecats.com/neo_2/300/200',
		actLat: '-30.94784',
		actLng: '19.36249',
		actAddress: '2301 Zero St, Abq, NM',
		actProfileUsername: 'janedoe456',
		actProfilePicUrl: null,
		actLikeLikes: 5,
		actCommentComments: 3
	}

	return (
		<>
			<Banner/>
			<ActCard act={post}/>
			{/* Comments Section */}
			<section className="bg-gray-100 py-8 mx-auto max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-4">Comments</h2>
					<div className="space-y-4">
						{comments.map((comment, index) => (
							<CommentCard content={comment} key={index} />
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