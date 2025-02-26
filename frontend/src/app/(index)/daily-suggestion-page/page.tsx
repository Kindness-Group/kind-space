import {SuggestionCard} from "@/app/(index)/daily-suggestion-page/SuggestionCard";
import {Banner} from "@/app/(index)/Banner"
import {Button} from "flowbite-react";
import {MoreSuggestionCard} from "@/app/(index)/daily-suggestion-page/MoreSuggestionCard";

export default function DailySuggestionPage() {
    return (
        <>
            <Banner/>
            <SuggestionCard/>
            <section id="more-suggestions" className="text-black m-16">
                <h1 className="md:text-4xl text-2xl text-center font-bold">More Suggestions</h1>
            <MoreSuggestionCard/>
            <MoreSuggestionCard/>
            <MoreSuggestionCard/>
            </section>
        </>
    )
}