import {Button} from "flowbite-react";

type SuggestionCardProps = {
    suggestion: Suggestion
}

export type Suggestion = {
    content: string,
    date: string
}

export function SuggestionCard(props: SuggestionCardProps) {
    let {suggestion} = props;
    let content = suggestion.content;
    let date = suggestion.date;
    return (
        <>
            <section className="text-gray-900 p-16 flex flex-col relative w-full h-[65vh]">
                <div className="items-center justify-center ">
                <div className="absolute inset-0 bg-cover bg-center w-full h-full"
                     style={{backgroundImage: "url('/coffee.png')"}}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/40">
                    </div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
                    <h1 className="md:text-4xl text-2xl font-bold">Today's Act of Kindness</h1>
                    <p className="text-xl p-10">{content}</p>
                    <div className="flex items-center justify-center gap-x-[10%] mt:4 whitespace-nowrap">
                        <Button color={"light"} className="focus:ring-4 focus:ring-purple-700 hover:ring-4 hover:ring-purple-700">Plan to do it!</Button>
                        <Button color={"light"} className="focus:ring-4 focus:purple hover:ring-4 hover:ring-purple-700">Done!</Button>
                    </div>
                </div>
                </div>
                <div className='relative flex md:items-end md:justify-end justify-center mt-auto mr-8 md:text-xl'>
                    <img src="/heart-icon-cropped.png" className="w-6" alt="heart icon"/>
                    <p>### People plan to do this!</p>
                </div>
            </section>
        </>
    )
}