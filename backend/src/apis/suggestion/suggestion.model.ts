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
