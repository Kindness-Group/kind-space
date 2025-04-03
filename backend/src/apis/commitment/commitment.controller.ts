import {Request, Response} from 'express'
import {
    Commitment,
    deleteCommitment,
    insertCommitment, selectCommitmentByProfileAndSuggestionId,
    selectCommitmentsByCommitmentProfileId,
    selectCommitmentsByCommitmentSuggestionId,
    updateCommitment,
} from "./commitment.model";
import {PublicProfile} from "../profile/profile.model";
import {Status} from "../../utils/interfaces/Status";
import {CommitmentSchema} from "./commitment.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {LikeSchema} from "../like/like.validator";
import {ActSchema} from "../act/act.validator";
import {Act, selectActByActId, updateActByActId} from "../act/act.model";
import {Geocod, LocationResponse} from "../act/geocod";

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
            commitmentDateTime: null
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
        const {commitmentSuggestionId, commitmentCompleted} = validationResult.data

        // deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile

        // deconstruct the profile id from the profile
        const commitmentProfileId = profile.profileId as string

        // create a like object
        const commitment: Commitment = {
            commitmentSuggestionId,
            commitmentProfileId,
            commitmentCompleted,
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

/**
 * Handles GET request for all commitments associated with a profile
 * @param request object containing the commitment profile id
 * @param response object containing the status of the request and the commitments associated with the profile
 * @returns status object containing the status of the request and the commitments associated with the profile
 **/
export async function getCommitmentsByCommitmentProfileIdController(request: Request, response: Response): Promise<Response> {
    try {
        // validate the commitmentProfileId coming from the request parameters
        const validationResult = z.string().uuid("Please provide a valid commitmentProfileId").safeParse(request.params.commitmentProfileId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        //if validation succeeds, continue

        const commitmentProfileId = validationResult.data

        // select the commitments by commitment profile id
        const data = await selectCommitmentsByCommitmentProfileId(commitmentProfileId)

        // return the status and the likes associated with the profile
        return response.json({status:200, message:null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * Handles GET request for all commitments associated with a suggestion
 * @param request object containing the commitmentSuggestionId
 * @param response object containing the status of the request and the commitments associated with the suggestion
 */
export async function getCommitmentsByCommitmentSuggestionId(request: Request, response: Response): Promise<Response> {
    try {
        // validate the commitmentSuggestionId coming from the request parameters
        const validationResult = z.string().uuid("Please provide a valid commitmentSuggestionId").safeParse(request.params.commitmentSuggestionId)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        } // if validation succeeds, continue

        const commitmentProfileId = validationResult.data

        // select the commitments by commitmentSuggestionId
        const data = await selectCommitmentsByCommitmentSuggestionId(commitmentProfileId)

        // return the status and the commitments associated with the profile
        return response.json({status:200, message:null, data})

    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function putCommitmentController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        //validate the updated commitment data coming from the request body
        const validationResultForRequestBody = CommitmentSchema.safeParse(request.body)
        console.log(validationResultForRequestBody.success)

        // if the validation of the body is unsuccessful, return a preformatted response to the client
        if (!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        //grab the profileId form the session
        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        //grab the data off the request body
        const{commitmentSuggestionId, commitmentProfileId, commitmentCompleted} = validationResultForRequestBody.data

        //grab the commitment by commitmentSuggestionId
        const commitment: Commitment | null = await selectCommitmentByProfileAndSuggestionId(commitmentSuggestionId, commitmentProfileId)

        //if the commitment does not exist, return a preformatted response to the client
        if (commitment === null) {
            return response.json({status: 400, message: 'Commitment does not exist', data: null})
        }

        if (profileIdFromSession !== commitment.commitmentProfileId) {
            return response.json({status: 400, message: "you cannot update a commitment that is not yours", data: null})
        }

        //update the commitment with the new data
        commitment.commitmentCompleted = commitmentCompleted

        //update the commitment in the database
        await updateCommitment(commitment)

        //return a response to the client with a success message
        return response.json({status: 200, message: "commitment successfully updated", data: null})


    } catch (error: unknown) {
        console.error(error)
        // if an error occurs, return a preformatted response to the client
        return response.json({status: 500, message: "internal server error", data: null})
    }

}