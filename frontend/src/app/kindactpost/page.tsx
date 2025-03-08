"use client";

import {Button, Card, Checkbox, Label} from "flowbite-react";
import React from "react";

export default function () {
	return (
		<>
			<section id="banner" className="text-black m-16 flex items-center justify-center">
				<img src="/heart-icon.png" className="w-12" alt="heart-icon" />
				<h1 className="md:text-2xl text-xl text-center font-bold">Share Your Most Recent Act of Kindness to our Kindness Feed</h1>
			</section>
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
						<div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
							<a href="./kindactpost">
								<Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Add Media</Button>
							</a>
						</div>
						</div>
					<hr className="border-gray-300" />
					<div className="flex justify-end">
						<div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
							<a href="./kindactpost">
								<Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Create Post</Button>
							</a>
						</div>
					</div>
				</form>
			</Card>
		</>
	)
}