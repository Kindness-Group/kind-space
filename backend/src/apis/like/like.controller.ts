import {Request, Response} from 'express'
import {
    deleteLike,
    insertLike,
    Like, selectLikeByLikeId
} from "./like.model";
import {PublicProfile} from "../profile/profile.model";
import {Status} from "../../utils/interfaces/Status"
import {LikeSchema} from "./like.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {date, z} from "zod"

/**
 * Handles POST request to insert a like into the like table
 * @param request object containing the likeActId and the likeProfileId
 * @param response object containing the status of the request
 * @returns status object indicating if the like was inserted
 */
export async function postLikeController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validation the incoming request with the like schema
        const validationResult = LikeSchema.safeParse(request.body)

        //if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        //if the validation succeeds, continue

        //deconstruct the likeActId from the validation result
        const {likeActId} = validationResult.data

        //deconstruct the profile from the session
        const profile = request.session.profile as PublicProfile

        //deconstruct the profile id from the profile
        const likeProfileId = profile.profileId as string

        //create a like object
        const like: Like = {
            likeActId: likeActId,
            likeProfileId: likeProfileId,
            likeDateTime: null
        }

        //create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        //insert the like into the like table
        status.message = await insertLike(like)

        //return the status to the user
        return response.json(status)

        //if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, message: error.message, data: null}))
    }
}

/**
 * Handles POST request to toggle a like on an act by inserting or deleting a like from the like table
 * @param request object containing the like thread id
 * @param response object containing the status of the request
 * @returns status object indicating whether the like was inserted or deleted
 */
export async function toggleLikeController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request with the like schema
        const validationResult = LikeSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // deconstruct the like act id from the validation result
        const {likeActId} = validationResult.data

        // deconstruct the profile form the session
        const profile = request.session.profile

        // @ts-ignore
        // deconstruct the profile id from the profile
        const likeProfileId = profile.profileId

        // create a like object
        const like: Like = {
            likeProfileId,
            likeActId,
            likeDateTime: null
        }

        // create a status object
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        // select the like id to detremine if  to determine if the like should be inserted
        const selectedLike: Like | null = await selectLikeByLikeId(like)

        // if the like is null, insert the like into the like table
        if (selectedLike === null) {
            status.message = await insertLike(like)
            // if the like is not null, delete the like from the like table
        } else {
            status.message = await deleteLike(like)
        }

        // return the status to the user
        return response.json(status)

        // if an error occurs, return the error to the user
    } catch (error: any) {
        return (response.json({status: 500, message: error.message, data: null}))
    }
}

/**
 *
 */



