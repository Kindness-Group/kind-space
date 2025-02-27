import {Button} from "flowbite-react";
import {auto} from "@popperjs/core";

export default function Home() {
    return (
        <>
            <section id="welcome-section" className="text-white md:p-28 p-20 relative w-full h-screen">
                <div className="absolute inset-0 bg-cover bg-center"
                     style={{ backgroundImage: "url('/heart-hands.png')" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                </div>
                <div className="relative z-10">
                    <h1 className="md:text-8xl text-4xl text-center font-bold">Kind Space</h1>
                    <p className="text-center text-lg p-10">Leaves a smile on your face</p>
                    <div className="flex items-center justify-center gap-x-[6%] md:pt-80 pt-60 whitespace-nowrap">
                        <Button color={"light"} className="text-gray-900 focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700"><strong>Kindness Feed</strong></Button>
                    <Button color={"light"} className="text-gray-900 focus:ring-4 focus:purple hover:ring-4 hover:ring-purple-700"><strong>Map</strong></Button>
                    <Button color={"light"} className="text-gray-900 focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700"><strong>Daily Suggestion</strong></Button>
                    </div>
                </div>
            </section>

<section id="purpose" className="text-gray-100 relative w-full h-[75vh]">
    <div className="absolute inset-0 bg-cover bg-center"
         style={{ backgroundImage: "url('/heart-hands2.png')" }}>
        <div className="absolute inset-0 backdrop-blur bg-gradient-to-b from-indigo-900/95 to-transparent"></div>
    </div>
        <div className="relative z-10 container mx-auto max-md:max-w-md py-16 md:pt-40">
        <h1 className="md:text-5xl text-3xl text-center font-bold drop-shadow-lg">Our Purpose</h1>
        <p className="text-left leading-loose drop-shadow-lg tracking-wide md:text-xl md:pt-20 pt-8">Kind-Space is a social media platform designed to inspire and amplify kindness! On the <a href="" className="py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Kindness Feed</strong></a>, you can post details of random acts of kindness you’ve experienced or observed, tagging your location on our interactive <a href="" className="py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Kindness Map</strong></a>. Each act is marked with a heart as kindness spreads in different areas. Our <a href="" className="py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Daily Kindness Suggestions</strong></a> give you ideas each day for making the world a better place.</p>
        <p className="text-left leading-loose drop-shadow-lg tracking-wide md:text-xl py-8">By fostering a culture of positivity and connection, Kind-Space hopes to transform everyday moments into a collective movement of compassion!</p>
            <Button color={"light"} className="m-auto md:mt-12 focus:ring-4 text-gray-900 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700"><strong>Sign Up to Share Kindness</strong></Button>
    </div>
</section>

            <section id="map-preview">
                <div className="py-16 white text-gray-900">
                    <div className="container mx-auto max-md:max-w-md">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Kindness Map</h1>
                    <p className="p-8 text-center text-lg">Take a look to see recent acts of kindness in your area!</p>
                    <p className="text-center md:py-24"> Map Preview Placeholder</p>
                    </div>
                </div>
            </section>

            <section id="feed-preview">
                <div className="py-16 bg-gray-500 text-white">
                    <div className="container mx-auto max-md:max-w-md">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Kindness Feed</h1>
                    <p className="p-8 text-center text-lg">See what acts of kindness other users are posting about!</p>
                    <p className="text-center md:py-24"> Kindness Feed Preview Placeholder</p>
                    </div>
                </div>
            </section>

            <section id="map-preview" >
                <div className="py-16 bg-white text-gray-900">
                    <div className="container mx-auto max-md:max-w-md">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Daily Suggestion</h1>
                    <p className="p-8 text-center text-lg">Today's act of kindness suggestion:</p>
                    <p className="text-center md:py-24 container mx-auto"> Suggestion Preview Placeholder</p>
                    </div>
                </div>
            </section>

        </>
    )
}