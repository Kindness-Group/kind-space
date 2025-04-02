import {z} from 'zod'
import {SuggestionSchema} from "./suggestion.validator";
import {sql} from "../../utils/database.utils"

// The shape of a suggestion object
export type Suggestion = z.infer<typeof SuggestionSchema>

/**
 * inserts a suggestion into the suggestion table and returns a message
 * @param suggestion to be inserted
 * @returns 'suggestion successfully posted'
 */
export async function insertSuggestion(suggestion: Suggestion): Promise<string> {

    // deconstruct the like object
    const {suggestionId, suggestionContent, suggestionDate} = suggestion

    // insert the suggestion into the suggestion table
    await sql`INSERT INTO suggestion (suggestion_id, suggestion_content, suggestion_date)
              VALUES (${suggestionId}, ${suggestionContent}, ${suggestionDate})`

    // return a message to the user indicating success
    return 'Suggestion successfully posted'
}

/**
 * selects a suggestion from the suggestion table by suggestionId and returns the suggestion
 * @param suggestionId of the suggestion to be selected
 * @returns the suggestion that was selected
 * @returns null if no suggestion was found
 */
export async function selectSuggestionBySuggestionId (suggestionId: string): Promise<Suggestion | null> {

    //select the suggestion from the suggestion table by suggestionId
    const rowList = <Suggestion[]>await sql`SELECT suggestion_id, suggestion_content, suggestion_date FROM suggestion WHERE suggestion_id = ${suggestionId}`

    // parse the suggestion from the database into a suggestion object
    const result = SuggestionSchema.array().max(1).parse(rowList)

    //return the suggestion that was selected or null if no suggestion is found
    return result.length === 0 ? null : result[0]
}

/**
 * selects a suggestion from the suggestion table by suggestionDate and returns the suggestion
 * @param suggestionDate of the suggestion to be selected
 * @returns the suggestion that was selected
 * @returns null if no suggestion was found
 */
export async function selectSuggestionsBySuggestionDate(suggestionDate: Date): Promise<Suggestion[]> {
    const rowList = <Suggestion[]>await sql`SELECT suggestion_id, suggestion_content, suggestion_date FROM suggestion WHERE suggestion_date = ${suggestionDate}`

    return SuggestionSchema.array().parse(rowList)
}