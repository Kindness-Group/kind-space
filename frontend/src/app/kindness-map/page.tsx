
import {Button} from "flowbite-react";
import {KindnessMap} from "@/app/kindness-map/kindness-map";
import {Act} from "@/app/kindness-feed/page";
import {fetchAllActs} from "@/utils/models/act/act.action";

export default async function () {

	let acts = (await fetchAllActs()).filter(act => act.actLat)
console.log(acts)
	return (
		<>
			<section id="replace-banner" className="text-black m-16 flex items-center justify-center">
				<img src="/heart-icon.png" className="w-12" alt="heart-icon" />
				<h1 className="md:text-2xl text-xl text-center font-bold">Kindness Map</h1>
			</section>

			<section className="flex justify-center items-center gap-x-[2%]">
				<div id="search" className="flex items-center justify-center">
					<div className="relative w-full">
						<svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
									  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
						</svg>
						<input type="text" className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700 p-2.5 pl-10" placeholder= "Search for Location"/>
					</div>


					<div className="ml-1 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
						<Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Go</Button>
					</div>
				</div>

			</section>

				<section id="map" className="container mx-auto flex items-center justify-center my-4">
					<KindnessMap acts={acts}/>
			</section>
		</>
	)
}

