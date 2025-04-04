
import {Button} from "flowbite-react";
import {KindnessMap} from "@/app/kindness-map/kindness-map";
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

						</svg>

					</div>



				</div>

			</section>

				<section id="map" className="container mx-auto flex items-center justify-center my-4">
					<KindnessMap acts={acts}/>
			</section>
		</>
	)
}

