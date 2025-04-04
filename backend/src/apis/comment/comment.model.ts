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
              VALUES (${commentId}, ${commentActId}, ${commentProfileId}, ${commentContent}, now())`

	// return a message to the user indicating success
	return 'Comment successfully posted'
}

/**
 * updates a comment in the profile table
 * @param comment
 * @returns {Promise<string>} 'comment successfully updated'
 */

export async function updateCommentByCommentId (comment: Comment): Promise<string> {
	const {commentId, commentActId, commentProfileId, commentContent, commentDateTime} = comment
	await sql`UPDATE comment
			  SET comment_id         = ${commentId},
				  comment_act_id     = ${commentActId},
				  comment_profile_id = ${commentProfileId},
				  comment_content    = ${commentContent},
				  comment_date_time  = ${commentDateTime}
			  WHERE comment_id = ${commentId}`
	return 'Comment successfully updated'
}

/**
 * selects the private comment from the comment table by commentId
 * @param commentId the comment's id to search for in the comment table
 * @returns comment or null if no comment was found
 */
export async function selectCommentByCommentId(commentId: string): Promise<Comment | null> {

	//create a prepared statement that selects the comment by commentId and execute the statement
	const rowList = await sql`SELECT comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time FROM comment WHERE comment_id = ${commentId}`

	//enforce that the result is an array of one profile, or null
	const result = CommentSchema.array().max(1).parse(rowList)

	//return the profile or null if no comment was found
	return result?.length === 1 ? result[0] : null
}

/**
 * selects comments from the comments table by commentActId and returns the comments
 * @param commentActId to be selected by commentActId
 * @returns the comments that were selected
 */
export async function selectCommentsByCommentActId(commentActId: string): Promise<Comment[]> {
	// select the comments from the comment table by commentActId
	const rowList = <Comment[]>await sql`SELECT comment_id, comment_act_id, comment_profile_id, comment_content, comment_date_time FROM comment WHERE comment_act_id = ${commentActId}`

	// parse the result into an array of comments and return it
	return CommentSchema.array().parse(rowList)
}

/**
 * deletes the comment from the comment table in the database by commentId and returns a message that says 'Comment successfully deleted'
 * @param commentId
 * @returns 'Comment successfully deleted'
 */
export async function deleteCommentByCommentId (commentId: string): Promise<string> {
	//delete the comment from the comment table in the database by commentId
	await sql`DELETE FROM comment WHERE comment_id = ${commentId}`

	//return a message that says 'Comment successfully deleted'
	return 'Comment successfully deleted'
}