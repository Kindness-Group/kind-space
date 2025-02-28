import {SuggestionCard} from "@/app/daily-suggestion-page/SuggestionCard";
import {Banner} from "@/app/layout-components/Banner"
import {Button} from "flowbite-react";
import {MoreSuggestionCard} from "@/app/daily-suggestion-page/MoreSuggestionCard";

export default function DailySuggestionPage() {
    return (
        <>
            <Banner/>
            <SuggestionCard/>
            <section id="more-suggestions" className="text-black">
                <h1 className="md:text-4xl text-2xl text-center font-bold m-16">More Suggestions</h1>
                <div className="flex flex-col items-center gap-y-32 md:flex-row md:gap-x-[10%] md:mx-8" >
            <MoreSuggestionCard/>
            <MoreSuggestionCard/>
            <MoreSuggestionCard/>
                </div>
            </section>
        </>
    )
}