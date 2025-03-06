
import {Button} from "flowbite-react";
import {KindnessMap} from "@/app/kindness-map/kindnes-map";

export default function () {

	return (
		<>
			<section id="replace-banner" className="text-black m-16 flex items-center justify-center">
				<img src="/heart-icon.png" className="w-12"/>
				<h1 className="md:text-2xl text-xl text-center font-bold">Kindness Map</h1>
			</section>

            <section className="flex justify-center items-center gap-x-[2%]">
                <div id="search" className="flex items-center justify-center">
                  <div className="relative w-full">
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                      </svg>
                      <input type="text"
                           className="bg-gray-50 border border-gray-900 text-gray-900 text-sm rounded-lg focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700 p-2.5 pl-10"
                           placeholder= "Search for Location"/>
                  </div>

                    <div className="ml-1 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                        <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Go</Button>
                    </div>

                    {/*<Button color={"light"} className="bg-gray-50 border border-gray-900 focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700 text-gray-900 text-sm ml-1">Go</Button>*/}
                </div>

				<div id="filter" className="flex h-full items-center">
					<svg className="w-6 h-6 text-gray-900 focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						<path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
					</svg>
					<p className="text-gray-900 ml-1">Filter</p>
				</div>
			</section>

			<section id="map-placeholder">
				<div className="py-64 mt-4 bg-gray-500 text-white">
					<div className="container mx-auto max-md:max-w-md">
						<p className="text-center md:py-24 container mx-auto">Kindness Map Placeholder</p>
					</div>
				</div>
			</section>
		</>
	)

}

