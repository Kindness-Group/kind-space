import {Button} from "flowbite-react";
import {intersection} from "ts-interface-checker";


export function MoreSuggestionCard() {
    return (
        <section className="relative w-[45vh] h-[45vh] ">
        <div className="text-gray-900 p-16 flex flex-col items-center justify-center ">
            <div className="absolute inset-0 bg-cover bg-center w-full h-full"
                 style={{backgroundImage: "url('/giving-flower.png')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/40">
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                <h1 className="md:text-4xl text-2xl font-bold">Act of Kindness</h1>
                <p className="text-lg p-10">Placeholder Text</p>
            </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt:4">
            <div className="flex items-center justify-center my-4">
                <img src="/heart-icon-cropped.png" className="w-[5%]" alt="heart icon"/>
                <p>### People plan to do this!</p>
            </div>
            <div className="flex items-center justify-center gap-x-[10%] whitespace-nowrap">
                <Button color={"light"}
                        className="focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700">Plan to do
                    it!</Button>
                <Button color={"light"}
                        className="focus:ring-4 focus:purple hover:ring-4 hover:ring-purple-700">Done!</Button>
            </div>
        </div>
        </section>
    )
}