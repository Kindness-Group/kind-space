'use server'

import {setHeaders} from "@/utils/set-headers.utils";
import {Suggestion, SuggestionSchema} from "@/utils/models/suggestion/suggestion.model";

export async function fetchSuggestionsBySuggestionDate(suggestionDate: Date): Promise<Suggestion[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/suggestion/suggestionDate/${suggestionDate}`, {
        method: 'GET',
        headers: await setHeaders()
    }).then(response => {
        if(!response.ok) {
            throw new Error('Request Failed')
        }
        return response.json()
    })
    return SuggestionSchema.array().parse(data)
}

export async function fetchSuggestionBySuggestionId(suggestionId: string): Promise<Suggestion> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/suggestion/suggestionId/${suggestionId}`, {
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