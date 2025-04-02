"use server"

import {SuggestionCard} from "@/app/kindness-suggestions/SuggestionCard";
import {MoreSuggestionCard} from "@/app/kindness-suggestions/MoreSuggestionCard";
import {fetchSuggestionsBySuggestionDate} from "@/utils/models/suggestion/suggestion.action";
import {Suggestion} from "@/utils/models/suggestion/suggestion.model";
import {getSession} from "@/utils/auth.utils";

export default async function DailySuggestionPage() {

    const session = await getSession();
    const profile = session?.profile

    const today = new Date();
    const todayDate = today.toISOString().split("T")[0];
    console.log(todayDate)
    const suggestions = await fetchSuggestionsBySuggestionDate(new Date(todayDate))
    console.log(suggestions)
    const todaySuggestion = suggestions.shift();

    return (
        <>
            <section id="banner" className="text-black m-16 flex items-center justify-center">
                <img src="/heart-icon.png" className="w-12" alt="heart-icon" />
                <h1 className="md:text-2xl text-xl text-center font-bold">Your Daily Act of Kindness Suggestion</h1>
            </section>
            {todaySuggestion ?
                (<SuggestionCard profile= {profile} suggestion={todaySuggestion}/>) : (<p>Compliment a Stranger: Give a genuine compliment to someone you don’t know—tell a barista they made a great coffee, let a coworker know their outfit looks nice, or appreciate someone’s kindness.</p>)}
            <section id="more-suggestions" className="text-black">
                <h1 className="md:text-4xl text-2xl text-center font-bold m-16">More Suggestions</h1>
                <div className="flex flex-col items-center gap-y-32 md:flex-row md:gap-x-[10%] md:mx-8 justify-center" >
                    {suggestions.map((element, index) => (
                        <MoreSuggestionCard key={index} profile={profile} suggestion={element} />
                    ))}
                </div>
            </section>
        </>
    )
}

// let suggestion: Suggestion[] = [
//     {suggestionContent: 'Leave an Encouraging Note: Write a short, uplifting note (like "You are amazing!" or "Keep going, you\'ve got this!") and leave it somewhere for a stranger to find—on a park bench, a car windshield, or inside a library book.',
//     suggestionDate: '03/02'},
//     {suggestionContent: 'Compliment a Stranger: Give a genuine compliment to someone you don’t know—tell a barista they made a great coffee, let a coworker know their outfit looks nice, or appreciate someone’s kindness.',
//     suggestionDate: '03/03'},
//     {suggestionContent: "Leave an encouraging note for a stranger on a park bench or in a library book. Write something like, 'You are amazing!' or 'Keep going, you’ve got this!' It can be a simple, positive message that brightens someone's day unexpectedly. Sometimes, a little surprise positivity can make all the difference for someone going through a tough time.",
//     suggestionDate: "03/04"},
//     {suggestionContent: "Compliment a colleague or stranger on something you genuinely appreciate about them. Whether it’s their smile, their work ethic, or their outfit, a sincere compliment can lift someone's spirits. We often forget how much a little praise can help someone feel valued and appreciated.",
//     suggestionDate: "03/05"},
//     {suggestionContent: "Hold the door open for someone who has their hands full. It could be a parent with a stroller or someone carrying heavy bags. A small act like this shows kindness and helps make someone’s day a little easier.",
//      suggestionDate: "03/06"},
//     {suggestionContent: "Pay for the person behind you in line at the coffee shop or drive-thru. It’s a simple but impactful gesture that shows generosity. The person behind you may be surprised and grateful, and it could inspire them to pay it forward.", suggestionDate: "03/07"},
//     {suggestionContent: "Give a genuine thank-you to someone who often goes unnoticed for their hard work. Maybe it’s the janitor at your workplace or the person who always helps you in the store. Acknowledging their effort can make them feel appreciated and remind them that their hard work matters.",
//     suggestionDate: "03/08"},
//     {suggestionContent: "Leave a generous tip for a waiter or barista, especially if they’ve been particularly friendly or attentive. Service workers often have tough jobs and may not always receive the appreciation they deserve. A generous tip is not just about the money but about showing gratitude for their effort and time.",
//     suggestionDate: "03/09"},
//     {suggestionContent: "Help a neighbor carry their groceries to their door. This small act of kindness can be especially helpful for elderly neighbors or those who struggle with heavy bags. It fosters a sense of community and shows that you care about the well-being of others around you.",
//     suggestionDate: "03/10"},
//     {suggestionContent: "Send a text message or email to someone just to check in and see how they’re doing. It’s easy to get caught up in our busy lives, but taking a moment to reach out to someone can brighten their day. Knowing that someone is thinking of them can make all the difference in feeling connected and supported.",
//     suggestionDate: "03/11"},
//     {suggestionContent: "Donate clothes or household items you no longer need to a local charity. Go through your closet and give away things that are in good condition but that you no longer use. Donating to those in need helps make your space more organized and can provide comfort to someone who may be struggling.",
//     suggestionDate: "03/12"},
//     {suggestionContent: "Smile at a stranger as you pass by on the street. A warm smile can be contagious, and sometimes all someone needs is a simple sign of friendliness. It can brighten a person's day and remind them that kindness exists everywhere.",
//     suggestionDate: "03/13"},
//     {suggestionContent: "Offer to help a coworker with a task they’re struggling with. It could be a project they’re overwhelmed by or a deadline they’re racing against. Helping out not only eases their load but also builds stronger relationships and a sense of teamwork in the workplace.",
//     suggestionDate: "03/14"},
//     {suggestionContent: "Give someone an unexpected compliment about their work or effort. Maybe a friend just finished a tough project or a colleague went above and beyond. Taking the time to recognize their hard work shows that you see and appreciate their efforts, boosting their confidence.",
//     suggestionDate: "03/15"},
//     {suggestionContent: "Send a handwritten thank-you note to someone who has made a difference in your life. It could be a mentor, a teacher, or a friend who has supported you through tough times. A heartfelt note can express your gratitude in a personal, memorable way.",
//     suggestionDate: "03/16"},
//     {suggestionContent: "Give a small gift or a homemade treat to a friend or neighbor. It doesn’t have to be something big, but a thoughtful gesture can show you care. Whether it’s cookies, a small plant, or a framed photo, giving something with no expectation in return can spread joy.",
//     suggestionDate: "03/17"},
//     {suggestionContent: "Plant a tree or flower in your community to brighten the environment. Whether it’s in a public park or your own backyard, planting something that will grow and bring beauty to others is a gift to both the earth and your community. It’s a lasting way to make the world a little more beautiful.",
//     suggestionDate: "03/18"}
// ]
//
// let moreSuggestion: Suggestion[] = [
//     { suggestionContent: "Write a heartfelt thank-you note to someone who has positively impacted your life. A handwritten note can brighten someone's day and remind them of their importance.", suggestionDate: "03/04" },
//     { suggestionContent: "Hold the door open for someone, even if they are a few steps behind. A small act of courtesy can make someone feel seen and appreciated.", suggestionDate: "03/04" },
//     { suggestionContent: "Leave an encouraging comment on someone’s social media post. Words of kindness can uplift someone who might be struggling or doubting themselves.", suggestionDate: "03/04" },
//
//     { suggestionContent: "Donate gently used clothes or household items to a local charity. Your unused items could bring warmth and comfort to someone in need.", suggestionDate: "03/05" },
//     { suggestionContent: "Offer to take a friend's or coworker’s shift if they need a break. Acts of generosity within a team build trust and support.", suggestionDate: "03/05" },
//     { suggestionContent: "Compliment a stranger sincerely, whether it’s about their style, smile, or kindness. Unexpected compliments can brighten someone’s entire day.", suggestionDate: "03/05" },
//
//     { suggestionContent: "Call or text a family member you haven’t spoken to in a while just to check in. A simple conversation can rekindle connections and remind them they’re loved.", suggestionDate: "03/06" },
//     { suggestionContent: "Pick up litter in your neighborhood or at a local park. A cleaner environment benefits everyone and sets an example of caring for the community.", suggestionDate: "03/06" },
//     { suggestionContent: "Leave a generous tip for your server at a restaurant or café. Service workers often rely on tips, and an extra bit of generosity can mean a lot.", suggestionDate: "03/06" },
//
//     { suggestionContent: "Let someone go ahead of you in line, whether at a grocery store or in traffic. Giving others a small advantage can relieve stress and spread positivity.", suggestionDate: "03/07" },
//     { suggestionContent: "Send an anonymous small gift or flowers to someone who might need cheering up. A surprise act of kindness can make someone feel valued and remembered.", suggestionDate: "03/07" },
//     { suggestionContent: "Share an inspiring book with a friend and let them borrow it. Good stories and wisdom should be passed along to encourage growth and learning.", suggestionDate: "03/07" },
//
//     { suggestionContent: "Write a heartfelt thank-you note to someone who has positively impacted your life. A handwritten note can brighten someone's day and remind them of their importance.", suggestionDate: "03/08" },
//     { suggestionContent: "Hold the door open for someone, even if they are a few steps behind. A small act of courtesy can make someone feel seen and appreciated.", suggestionDate: "03/08" },
//     { suggestionContent: "Leave an encouraging comment on someone’s social media post. Words of kindness can uplift someone who might be struggling or doubting themselves.", suggestionDate: "03/08" },
//
//     { suggestionContent: "Donate gently used clothes or household items to a local charity. Your unused items could bring warmth and comfort to someone in need.", suggestionDate: "03/09" },
//     { suggestionContent: "Offer to take a friend's or coworker’s shift if they need a break. Acts of generosity within a team build trust and support.", suggestionDate: "03/09" },
//     { suggestionContent: "Compliment a stranger sincerely, whether it’s about their style, smile, or kindness. Unexpected compliments can brighten someone’s entire day.", suggestionDate: "03/09" },
//
//     { suggestionContent: "Call or text a family member you haven’t spoken to in a while just to check in. A simple conversation can rekindle connections and remind them they’re loved.", suggestionDate: "03/10" },
//     { suggestionContent: "Pick up litter in your neighborhood or at a local park. A cleaner environment benefits everyone and sets an example of caring for the community.", suggestionDate: "03/10" },
//     { suggestionContent: "Leave a generous tip for your server at a restaurant or café. Service workers often rely on tips, and an extra bit of generosity can mean a lot.", suggestionDate: "03/10" },
//
//     { suggestionContent: "Let someone go ahead of you in line, whether at a grocery store or in traffic. Giving others a small advantage can relieve stress and spread positivity.", suggestionDate: "03/11" },
//     { suggestionContent: "Send an anonymous small gift or flowers to someone who might need cheering up. A surprise act of kindness can make someone feel valued and remembered.", suggestionDate: "03/11" },
//     { suggestionContent: "Share an inspiring book with a friend and let them borrow it. Good stories and wisdom should be passed along to encourage growth and learning.", suggestionDate: "03/11" },
//
//     { suggestionContent: "Write a heartfelt thank-you note to someone who has positively impacted your life. A handwritten note can brighten someone's day and remind them of their importance.", suggestionDate: "03/12" },
//     { suggestionContent: "Hold the door open for someone, even if they are a few steps behind. A small act of courtesy can make someone feel seen and appreciated.", suggestionDate: "03/12" },
//     { suggestionContent: "Leave an encouraging comment on someone’s social media post. Words of kindness can uplift someone who might be struggling or doubting themselves.", suggestionDate: "03/12" },
//
//     { suggestionContent: "Donate gently used clothes or household items to a local charity. Your unused items could bring warmth and comfort to someone in need.", suggestionDate: "03/13" },
//     { suggestionContent: "Offer to take a friend's or coworker’s shift if they need a break. Acts of generosity within a team build trust and support.", suggestionDate: "03/13" },
//     { suggestionContent: "Compliment a stranger sincerely, whether it’s about their style, smile, or kindness. Unexpected compliments can brighten someone’s entire day.", suggestionDate: "03/13" },
//
//     { suggestionContent: "Call or text a family member you haven’t spoken to in a while just to check in. A simple conversation can rekindle connections and remind them they’re loved.", suggestionDate: "03/14" },
//     { suggestionContent: "Pick up litter in your neighborhood or at a local park. A cleaner environment benefits everyone and sets an example of caring for the community.", suggestionDate: "03/14" },
//     { suggestionContent: "Leave a generous tip for your server at a restaurant or café. Service workers often rely on tips, and an extra bit of generosity can mean a lot.", suggestionDate: "03/14" },
//
//     { suggestionContent: "Let someone go ahead of you in line, whether at a grocery store or in traffic. Giving others a small advantage can relieve stress and spread positivity.", suggestionDate: "03/15" },
//     { suggestionContent: "Send an anonymous small gift or flowers to someone who might need cheering up. A surprise act of kindness can make someone feel valued and remembered.", suggestionDate: "03/15" },
//     { suggestionContent: "Share an inspiring book with a friend and let them borrow it. Good stories and wisdom should be passed along to encourage growth and learning.", suggestionDate: "03/15" }
// ]