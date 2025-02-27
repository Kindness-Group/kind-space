"use client";

import {Button, Card, Checkbox, Label} from "flowbite-react";

export default function () {
	return (
		<>
			<div className="text-2xl font-semibold text-center mt-20 max-sm:px-1.5">
				<h1>Share Your Most Recent Kindness Act or Experience with Us!</h1>
			</div>
			<Card className="max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md mx-auto my-20">
				<div className="flex items-center justify-center space-x-5">
					<div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-gray-700 dark:ring-gray-100">
						<img src="https://loremflickr.com/g/200/200/girl" alt=""/>
					</div>
					<div className="block pl-2 font-bold text-xl self-center text-gray-700">
						<h2 className="leading-relaxed">Jane Doe</h2>
					</div>
				</div>
				<form className="flex flex-col gap-4">
					<div className="flex flex-col">
						<label className="leading-loose">Post Content</label>
						<textarea id="comment" name="comment" rows={4} className="w-full px-4 pt-2 pb-[14rem] sm:text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-900" placeholder="Write your content here..." required></textarea>
					</div>
					<div className="flex flex-col">
						<label className="leading-loose">Post Location</label>
						<input type="text"
								 className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
								 placeholder="Where did this happen?"/>
					</div>
					<div className="flex items-center justify-between">
						<Button type="button" className="basis1/5 md:basis-1/6">Add Media</Button>
						<div className="flex items-center gap-2 justify-end">
							<Checkbox id="remember"/>
							<Label htmlFor="remember">Pin on Map</Label>
						</div>
					</div>
					<hr className="border-gray-300" />
					<div className="flex justify-end">
						<Button type="submit" className="basis-1/6">Create</Button>
					</div>
				</form>
			</Card>
		</>
	)
}