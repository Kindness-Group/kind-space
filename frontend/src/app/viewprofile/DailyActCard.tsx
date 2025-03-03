import React from "react";
import {DailyAct} from "@/app/viewprofile/page";
import {Button} from "flowbite-react";

type Prop = {
	act: DailyAct
}
export function DailyActCard(prop: Prop) {
	let {act: {description, count}} = prop
	return (
		<section className="relative flex flex-col bg-gray-100 px-4 pt-[3rem] rounded-lg h-[23rem] bg-cover bg-center bg-[url('/coffee.png')]">
			<div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/55"></div>
			<div className="items-center justify-center z-10 flex flex-col w-[90%]">
				<h3 className="text-lg font-semibold mb-4">Your Daily Act of Kindness</h3>
				<p className="text-sm text-center leading-7 text-gray-900 mb-8">
					{description}
				</p>
				<div className="flex space-x-8 mb-1">
					<Button color={"light"} className="font-bold bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 group-hover:from-teal-400 group-hover:to-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Done!</Button>

					{/*<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">*/}
					{/*	Remind Me*/}
					{/*</button>*/}
					{/*<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">*/}
					{/*	Done!*/}
					{/*</button>*/}
				</div>
			</div>
			<div className="relative flex md:mt-auto mb-4 px-8">
				<img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
				<p className="text-sm text-gray-900">
					You’ve Completed {count} Daily Acts of Kindness!
				</p>
			</div>
		</section>
	)
}