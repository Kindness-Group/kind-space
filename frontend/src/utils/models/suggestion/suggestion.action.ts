'use server'

import {setHeaders} from "@/utils/set-headers.utils";
import {Suggestion, SuggestionSchema} from "@/utils/models/suggestion/suggestion.model";


export async function fetchSuggestionBySuggestiontId(suggestionId: string) : Promise<Suggestion> {
    const {data} = await fetch (`${process.env.PUBLIC_API_URL}/apis/suggestion/suggestionId/${suggestionId}`, {
        method: "GET",
        headers: await setHeaders()
    }).then(response => {
        if(!response.ok) {
            throw new Error('Request Failed')
        }
        return response.json()
    })
    return SuggestionSchema.parse(data)
}