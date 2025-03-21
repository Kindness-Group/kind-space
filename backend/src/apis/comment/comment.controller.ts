import {Request, Response} from 'express'
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {
	Comment,
	deleteCommentByCommentId,
	insertComment,
	selectCommentByCommentId,
	updateCommentByCommentId
} from "./comment.model";
import {CommentSchema} from "./comment.validator";
import {PublicProfile} from "../profile/profile.model";
import {z} from "zod"

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

/**
 * express controller for updating a comment
 * @param request from the client to the server to update a comment
 * @param response from the server to the client with a status message to indicate whether the update was successful
 * @return {Promise<Response<Status>>}  A promise containing the response for the client with the requested information
 **/

export async function putCommentController(request: Request, response: Response): Promise<Response<Status>> {
	try {


		//validate the updated comment data coming from the request body
		const validationResultForRequestBody = CommentSchema.safeParse(request.body)

		// if the validation of the body is unsuccessful, return a preformatted response to the client
		if(!validationResultForRequestBody.success) {
			return zodErrorResponse(response, validationResultForRequestBody.error)
		}

		//grab the commentId from the session
		const profileFromSession = request.session?.profile
		const profileIdFromSession = profileFromSession?.profileId

		//grab the commentId off of the validated request body
		const {commentId, commentActId, commentProfileId, commentContent, commentDateTime} = validationResultForRequestBody.data

		// grab the comment by commentId
		const comment: Comment | null = await selectCommentByCommentId(commentId)

		//if the comment does not exist, return a preformatted response to the client
		if (comment === null) {
			return response.json({status: 400, message: 'Comment does not exist', data: null})
		}

		if (profileIdFromSession !== comment.commentId) {
			return response.json({status: 400, message: "you cannot update a comment that is not yours", data: null})
		}
		//update the comment with the new data
		comment.commentId = commentId
		comment.commentActId = commentActId
		comment.commentContent = commentContent
		comment.commentProfileId = commentProfileId
		comment.commentDateTime = commentDateTime

		//update the comment in the database
		await updateCommentByCommentId(comment)

		//return a response to the client with a success message
		return response.json({status: 200, message: "comment successfully updated", data: null})

	} catch (error: unknown) {
		// if an error occurs, return a preformatted response to the client
		console.log(error)
		return response.json({status: 500, message: "internal server error", data: null})
	}
}

/**
 * deletes a comment from the database by comment id and returns a status to the user in the response
 * @param request from the client to the server to delete a comment by comment id from the database
 * @param response from the server to the client with a status of 200 or an error message
 */

export async function deleteCommentByCommentIdController(request: Request, response: Response): Promise<Response<Status>> {
	try {

		//validate the incoming request commentId with the uuid schema
		const validationResult = z.string().uuid({message: 'Please provide a valid commentId'}).safeParse(request.params.commentId)

		//if the validation fails, return a response to the client
		if (!validationResult.success) {
			return zodErrorResponse(response, validationResult.error)
		}

		//get the profile from the session
		const profile: PublicProfile = request.session.profile as PublicProfile

		//set the comment profile id to the profile id from the session
		const commentProfileId: string = profile.profileId as string

		//get the act id from the request parameters
		const commentId = validationResult.data

		//get the act from the database by act id
		const comment = await selectCommentByCommentId(commentId)

		//if comment is null, tell user comment does not exist
		if (comment === null) {
			return response.json({status: 400, message: 'Comment not found', data: null})
		}

		//if the commentProfileId does not match the commentProfileId from the session, return a response to the client
		if (comment.commentProfileId !== commentProfileId) {
			return response.json({
				status:403,
				message: 'You are not allowed to delete this comment',
				data: null
		})
	}
		//delete the comment from the database by commendId
		const message = await deleteCommentByCommentId(commentId)

		//return the response with the status code 200, a message, and the thread as data
		return response.json({status: 200, message, data: null})

		//if there is an error, return the response with the status code 500, an error message, and null data
} catch (error) {
	return response.json({
		status: 500,
		message: '',
		data: []
	})
	}
}