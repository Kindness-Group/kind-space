import {Request, Response} from 'express'
import {
    Commitment,
    insertCommitment,
} from "./commitment.model";
import {PublicProfile} from "../profile/profile.model";
import {Status} from "../../utils/interfaces/Status";
import {CommitmentSchema} from "./commitment.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {LikeSchema} from "../like/like.validator";

/**
 * Handles GET request for all commitments associated with a thread
 * @param request object containing the commitment thread id
 * @param response object containing the status of the request and the commitments associated with the thread
 */
export async function postCommitmentController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validation of the incoming request with the commitment schema
        const validationResult = CommitmentSchema.safeParse(request.body)

        //if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        //if the validation succeeds, continue

        //deconstruct the commitmentSuggestionId from the validation result
        const {commitmentSuggestionId, commitmentProfileId, commitmentCompleted} = validationResult.data

        //deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile

        //deconstruct the profile id from the profile
        const ProfileId = profile.profileId as string

        //create a commitment object
        const commitment: Commitment = {
            commitmentSuggestionId: commitmentSuggestionId,
            commitmentProfileId: commitmentProfileId,
            commitmentCompleted: commitmentCompleted,
            commitmentDatetime: null
        }

        //create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        //insert the commitment into the commitment table
        status.message = await insertCommitment(commitment)

        //return the status to the user
        return response.json(status)

        //if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, message: error.message, data: null}))
    }
}

/**
 * Handles DELETE request to delete a commitment from the commitment table
 * @param request object containing the commitmentSuggestionId
 * @param response object containing the status of the request
 * @returns status object indicating if the commitment was deleted
 */
export async function deleteCommitmentController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the like schema
        const validationResult = CommitmentSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the commitmentSuggestionId from the validation result
        const {commitmentSuggestionId} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile

        // deconstruct the profile id from the profile
        const commitmentProfileId = profile.profileId as string

        // create a like object
        const commitment: Commitment = {
            commitmentSuggestionId,
            commitmentProfileId,
            commitmentContent,
            commitmentDateTime: null
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // delete the like from the like table
        status.message = await deleteCommitment(commitment)

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, data: null, message: error.message}))
    }
}