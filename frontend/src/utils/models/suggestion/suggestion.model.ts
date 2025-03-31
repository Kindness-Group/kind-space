import {z} from 'zod';
import {SignInProfileSchema} from "@/utils/models/sign-in/sign-in.model";

/**
 * The shape of a suggestion object
 * @property suggestionId, suggestionContent, suggestionDate
 * @property suggestionId {string} the primary key
 * @property suggestionContent {string} the content of the suggestion
 * @property suggestionDate {string} the date the suggestion is posted
 */

export const SuggestionSchema = z.object({
    suggestionId: z.string({required_error: 'Please provide a valid suggestionId'}).uuid({message: 'Please provide a valid uuid for suggestionId'}),
    suggestionContent: z.string().max(500,{message: 'Please provide a valid suggestionContent'}),
    suggestionDate: z.coerce.date({
        required_error: 'suggestionDate is required',
        invalid_type_error: 'Please provide a valid suggestionDate'
    }).nullable(),
})

export type Suggestion = z.infer<typeof SuggestionSchema>;