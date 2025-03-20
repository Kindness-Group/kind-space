import {Request, Response} from 'express'
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {Comment, insertComment} from "./comment.model";
import {CommentSchema} from "./comment.validator";

export async function postCommentController(request: Request, response: Response): Promise<Response | undefined> {
	try {

		// validate the incoming request with the CommentSchema
		const validationResult = CommentSchema.safeParse(request.body)

		// if the validation fails, return a response to the client
		if (!validationResult.success) {
			return zodErrorResponse(response, validationResult.error)
		}

		// if the validation succeeds, continue

		// get the suggestionId suggestionContent, suggestionDate from the request body
		const {commentId, commentActId, commentProfileId, commentContent, commentDateTime} = validationResult.data

		// create a new thread object with the commentId, commentActId, commentProfileId, commentContent, and commentDateTime
		const comment: Comment = {
			commentId,
			commentActId,
			commentProfileId,
			commentContent,
			commentDateTime
		}

		// insert the comment into the database and store the result in a variable called result
		const result = await insertComment(comment)

		// return the response with the status code 200, a message, and the result as data
		const status: Status = {status: 200, message: result, data: null}
		return response.json(status)

		// if there is an error, return the response with the status code 500, an error message, and null data
	} catch (error) {
		console.log(error)
		return response.json({status: 500, message: 'Error creating suggestion. Try again.', data: null})
	}
}