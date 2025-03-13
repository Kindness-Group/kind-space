import {Request, Response} from "express";
import {
    PrivateProfile,
    selectPrivateProfileByProfileId,
    selectPublicProfileByProfileId,
    selectPublicProfilebyProfileName,
    selectPublicProfilesbyProfileName, updateProfile
} from "./profile.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {PublicProfileSchema} from "./profile.validator";

import {Status} from "../../utils/interfaces/Status";


/**
 * Express controller for getting the public profile by profileId
 * @param request from the client to the server to get all threads by thread profile id
 * @param response from the server to the client with all threads by thread profile id or an error message
 * @return {Promise<Response<Status>>} A promise containing the response with th erequested information,
 * or null if the information could not be found, set to the data field.
 */
export async function getPublicProfileByProfileIdController(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        // validate the profileId coming form the request parameters
        const validationResult = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        // if the validation is unsuccessful, return a preformatted response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // grab the profileId off of the validated request parameters
        const {profileId} = validationResult.data

        // grab the profile by profileId
        const data= await selectPublicProfileByProfileId(profileId)

        // return the response to the client wiht the requested information
        return response.json({status: 200, message: null, data})
    } catch (error: unknown) {
        console.error(error)
        // in an error occurs, return a preformatted response to the client
        return response.json({status: 500,message: "internal server error", data:null})
    }
}

/**
 * Express controller for getting the public
 */