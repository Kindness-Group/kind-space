import {KindnessMap} from "@/app/kindness-map/kindness-map";
import {fetchAllActs} from "@/utils/models/act/act.action";
import {unstable_noStore} from "next/cache";

/**
 * Kindness Map Page Component
 *
 * This component displays a map showing various acts of kindness with their locations.
 * It fetches all acts from the database and filters out those without location data.
 * The page includes a decorative banner, a search section (currently empty), and the map itself.
 *
 * @returns {JSX.Element} The rendered Kindness Map page
 */
export default async function () {
	// Opt out of caching for this route
	unstable_noStore();

	// Fetch acts of kindness and filter to only include those with latitude data
	let acts = (await fetchAllActs()).filter(act => act.actLat);

	return (
		<>
			{/* Title banner with heart icon */}
			<section id="replace-banner" className="text-black m-16 flex items-center justify-center">
				<img src="/heart-icon.png" className="w-12" alt="heart-icon" />
				<h1 className="md:text-2xl text-xl text-center font-bold">Kindness Map</h1>
			</section>

			{/* Search functionality section - currently empty placeholder */}
			<section className="flex justify-center items-center gap-x-[2%]">
				<div id="search" className="flex items-center justify-center">
					<div className="relative w-full">
						<svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
						</svg>
					</div>
				</div>
			</section>

			{/* Map container displaying all acts with location data */}
				<section id="map" className="container mx-auto flex items-center justify-center my-4">
					<KindnessMap acts={acts}/>
			</section>
		</>
	)
}

