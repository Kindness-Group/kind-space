import {z} from 'zod';

/**
 * The shape of a suggestion object
 * @property suggestionId, suggestionContent, suggestionDate
 * @property suggestionId {string} the primary key
 * @property suggestionContent {string} the content of the suggestion
 * @property suggestionDate {string} the date the suggestion is posted
 */

export const CommentSchema = z.object({
    commentId: z.string({required_error: 'Please provide a valid commentId'}).uuid({message: 'Please provide a valid uuid for commentId'}),
    commentActId: z.string({required_error: 'Please provide a valid actId'}).uuid({message: 'Please provide a valid uuid for actId'}),
    commentProfileId: z.string({required_error: 'Please provide a valid profileId'}).uuid({message: 'Please provide a valid uuid for profileId'}),
    commentContent: z.string().max(500,{message: 'Please provide a valid commentContent'}),
    commentDateTime: z.coerce.date({
        required_error: 'commentDateTime is required',
        invalid_type_error: 'Please provide a valid commentDateTime'
    }).nullable(),
})

export type Comment = z.infer<typeof CommentSchema>;