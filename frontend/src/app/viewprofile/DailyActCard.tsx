import React from "react";
import {DailyAct} from "@/app/viewprofile/page";

type Prop = {
	act: DailyAct
}
export function DailyActCard(prop: Prop) {
	let {act: {description, count}} = prop
	return (
		<section className="relative flex flex-col bg-gray-100 px-4 pt-[3rem] rounded-lg h-[23rem] bg-cover bg-center bg-[url('/coffee.png')]">
			<div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/40"></div>
			<div className="mx-auto z-10 flex flex-col w-[90%]">
				<h3 className="text-lg font-semibold mb-4">Your Daily Act of Kindness</h3>
				<p className="text-sm leading-7 text-gray-900 mb-8">
					{description}
				</p>
				<div className="flex space-x-8 mb-1">
					<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
						Remind Me
					</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
						Done!
					</button>
				</div>
			</div>
			<div className="relative flex md:mt-auto">
				<img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
				<p className="text-sm text-gray-900">
					You’ve Completed {count} Daily Acts of Kindness!
				</p>
			</div>
		</section>
	)
}