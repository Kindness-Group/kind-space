import {Button} from "flowbite-react";
import {auto} from "@popperjs/core";

export default function Home() {
    return (
        <>
            <section id="welcome-section" className="text-white p-28 relative w-full h-screen">
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{ backgroundImage: "url('/heart-hands.png')" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                </div>
                <div className="relative z-10">
                    <h1 className="md:text-8xl text-2xl text-center font-bold">Kind Space</h1>
                    <p className="text-center text-lg p-10">Leaves a smile on your face</p>
                    <div className="flex items-center justify-center gap-x-[10%] md:pt-80">
                    <Button color={"light"} className="focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700">Kindness Feed</Button>
                    <Button color={"light"} className="focus:ring-4 focus:purple hover:ring-4 hover:ring-purple-700">Map</Button>
                    <Button color={"light"} className="focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700">Daily Suggestion</Button>
                    </div>
                </div>
            </section>

<section>
    <div id="purpose" className="py-16 bg-white text-gray-900">
        <h1 className="md:text-4xl text-2xl text-center font-bold">Our Purpose</h1>
        <p className="text-left max-md:text-sm md:pt-12 container mx-auto">Kind-Space is a social media platform designed to inspire and amplify kindness! On the Kindness Feed, you can post details of random acts of kindness you’ve experienced or observed, tagging your location on our interactive map. Each act is marked with a heart as kindness spreads in different areas. Our daily kindness suggestions give you ideas each day for making the world a better place.</p>
        <p className="text-left max-md:text-sm md:py-6 container mx-auto">By fostering a culture of positivity and connection, Kind-Space hopes to transform everyday moments into a collective movement of compassion!</p>
        <Button color={"light"} className="m-auto focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700">Share Kindness</Button>
    </div>
</section>

            <section>
                <div id="map-preview" className="py-16 bg-gray-500 text-white">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Kindness Map</h1>
                    <p className="p-8 text-center text-lg">Take a look to see recent acts of kindness in your area!</p>
                    <p className="text-center max-md:text-sm md:py-24 container mx-auto"> Map Preview Placeholder</p>
                </div>
            </section>

            <section>
                <div id="feed-preview" className="py-16 bg-white text-gray-900">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Kindness Feed</h1>
                    <p className="p-8 text-center text-lg">See what acts of kindness other users are posting about!</p>
                    <p className="text-center max-md:text-sm md:py-24 container mx-auto"> Kindness Feed Preview Placeholder</p>
                </div>
            </section>

            <section>
                <div id="map-preview" className="py-16 bg-gray-500 text-white">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Daily Suggestion</h1>
                    <p className="p-8 text-center text-lg">Today's act of kindness suggestion:</p>
                    <p className="text-center max-md:text-sm md:py-24 container mx-auto"> Suggestion Preview Placeholder</p>
                </div>
            </section>

        </>
    )
}