import {Button} from "flowbite-react";
import {auto} from "@popperjs/core";
import {SuggestionCard} from "@/app/kindness-suggestions/SuggestionCard";

export default function Home() {
    return (
        <>
            <section id="welcome-section" className="text-white md:p-28 p-20 relative w-full h-screen">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/heart-hands.png')" }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
                </div>
                <div className="relative z-10 ">
                    <h1 className="md:text-8xl text-4xl text-center font-bold">Kind Space</h1>
                    <p className="text-center text-lg p-10">Leaves a smile on your face</p>
                    <div className="flex items-center justify-center gap-x-[6%] md:pt-80 pt-60 whitespace-nowrap">
                        <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                            <a href="/kindness-feed">
                            <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Kindness Feed!</Button>
                        </a>
                        </div>
                        <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                            <a href="/kindness-map">
                            <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Map</Button>
                            </a>
                        </div>
                        <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                            <a href="/kindness-suggestions">
                            <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4" >Daily Suggestion</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="suggestion-preview" >
                <div className=" relative p-1 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400  text-gray-900">
                    <div className="py-16 bg-white border-black border-4">
                    <div className="container mx-auto max-md:max-w-md">
                        <h1 className="md:text-4xl text-2xl text-center font-bold">Daily Suggestion</h1>
                        <p className="p-8 text-center text-lg">Today's act of kindness suggestion:</p>
                        <div className="container mx-auto">
                            <a href="/kindness-suggestions">
                            <SuggestionCard
                                // suggestion={todaySuggestion ? todaySuggestion : "Compliment a colleague or stranger on something you genuinely appreciate about them. Whether it’s their smile, their work ethic, or their outfit, a sincere compliment can lift someone's spirits. We often forget how much a little praise can help someone feel valued and appreciated."}
                                suggestion={"Compliment a colleague or stranger on something you genuinely appreciate about them. Whether it’s their smile, their work ethic, or their outfit, a sincere compliment can lift someone's spirits. We often forget how much a little praise can help someone feel valued and appreciated."}
                            />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section id="purpose" className="text-gray-100 relative w-full md:h-[75vh] h-screen">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/purpose.png')" }}>
                    <div className="absolute inset-0  bg-gradient-to-b from-black/90  to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto max-md:max-w-md py-10 md:pt-35">
                    <h1 className="md:text-4xl text-3xl text-center items-center font-bold drop-shadow-lg">Our Purpose</h1>
                    <p className="text-left leading-loose drop-shadow-lg tracking-wide md:text-2xl md:pt-20 pt-8">Kind-Space is a social media platform designed to inspire and amplify kindness! On the <a href="/kindness-feed" className="py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Kindness Feed</strong></a>, you can post details of random acts of kindness you’ve experienced or observed, tagging your location on our interactive <a href="/kindness-map" className="py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Kindness Map</strong></a>. Each act is marked with a heart as kindness spreads in different areas. Our <a href="/kindness-suggestions" className="py-2 px-3 text-white md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Daily Kindness Suggestions</strong></a> give you ideas each day for making the world a better place.</p>
                    <p className="text-left leading-loose drop-shadow-lg tracking-wide md:text-2xl py-8">By fostering a culture of positivity and connection, Kind-Space hopes to transform everyday moments into a collective movement of compassion!</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-5 rounded-xl" >
                    <a href="/signup">
                    <Button color={"light"} className="m-auto md:mt-8 bg-white text-gray-900 focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4"><strong>Sign Up to Share Kindness</strong></Button>
                    </a>
                    </div>
            </section>

            {/*<section id="purpose">*/}
            {/*    <div className=" relative p-2 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400  text-gray-900">*/}
            {/*        <div className="py-16 bg-white border-black border-4">*/}
            {/*            <div className="container mx-auto max-md:max-w-md">*/}
            {/*                <h1 className="md:text-4xl text-2xl text-center font-bold">Our Purpose</h1>*/}
            {/*                <p className="text-left leading-loose drop-shadow-lg tracking-wide md:text-xl md:pt-20 pt-8">Kind-Space is a social media platform designed to inspire and amplify kindness! On the <a href="/kindness-feed" className="py-2 px-3 text-black md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Kindness Feed</strong></a>, you can post details of random acts of kindness you’ve experienced or observed, tagging your location on our interactive <a href="/kindness-map" className="py-2 px-3 text-black md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Kindness Map</strong></a>. Each act is marked with a heart as kindness spreads in different areas. Our <a href="/kindness-suggestions" className="py-2 px-3 text-black md:hover:bg-transparent md:border-0 md:hover:text-purple-700  md:p-0"><strong>Daily Kindness Suggestions</strong></a> give you ideas each day for making the world a better place.</p>*/}
            {/*                <p className="text-left leading-loose drop-shadow-lg tracking-wide md:text-xl py-8">By fostering a culture of positivity and connection, Kind-Space hopes to transform everyday moments into a collective movement of compassion!</p>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-center justify-center">*/}
            {/*                <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >*/}
            {/*                    <a href="/kindness-suggestions">*/}
            {/*                        <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4" >Sign Up to Share Kindness</Button>*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section id="map-preview">
                <div className=" relative p-1 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400  text-gray-900">
                    <div className="py-16 bg-white border-black border-4">
                    <div className="container mx-auto max-md:max-w-md">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Kindness Map</h1>
                    <p className="p-8 text-center text-lg">Take a look to see recent acts of kindness in your area!</p>
                    </div>
                        <a href="/kindness-map">
                        <div className="container mx-auto">
                        <img src="/scrn-shot-map.png" alt="map page preview"/>
                    </div>
                        </a>
                </div>
                </div>
            </section>

            <section id="feed-preview">
                <div className=" relative p-1 bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400  text-gray-900">
                    <div className="py-16 bg-white border-black border-4">
                    <div className="container mx-auto max-md:max-w-md">
                    <h1 className="md:text-4xl text-2xl text-center font-bold">Kindness Feed</h1>
                    <p className="p-8 text-center text-lg">See what acts of kindness other users are posting about!</p>
                        <a href="/kindness-feed">
                        <p className="text-center md:py-24"> Kindness Feed Preview Placeholder</p>
                        </a>
                    </div>
                </div>
                </div>
            </section>

        </>
    )
}