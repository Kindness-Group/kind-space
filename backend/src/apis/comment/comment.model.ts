import {z} from 'zod'
import {CommentSchema} from "./comment.validator";
import {sql} from "../../utils/database.utils";

// The shape of a suggestion object
export type Comment = z.infer<typeof CommentSchema>

/**
 * inserts a suggestion into the suggestion table and returns a message
 * @param comment to be inserted
 * @returns 'comment successfully posted'
 */
export async function insertComment(comment: Comment): Promise<string> {

	// deconstruct the comment object
	const {commentId, commentActId, commentProfileId, commentContent, commentDateTime} = comment

	// insert the comment into the comment table
	await sql`INSERT INTO comment (comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time)
              VALUES (${commentId}, ${commentActId}, ${commentProfileId}, ${commentContent}, ${commentDateTime})`

	// return a message to the user indicating success
	return 'Comment successfully posted'
}