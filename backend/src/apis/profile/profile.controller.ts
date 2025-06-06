import {Request, Response} from "express";
import {
    selectPublicProfileByProfileId,
    selectPrivateProfileByProfileId,
    PrivateProfile,
    updateProfile,
    selectPublicProfileByProfileUsername

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
 * Express controller for getting the public profile by profileUsername
 * @param request from the client to the server to get all public profile info by profileUsername
 * @param response from the server to the client with profile with profileUsername or an error message
 * @return {Promise<Response<Status>>} A promise containing the response for the client with the requested information,
 * or null if the information could not be found, set to the data field
 */
export async function getPublicProfileByProfileUsernameController(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        // validate the profileUsername coming from the request parameters
        const validationResult = PublicProfileSchema.pick({profileUsername: true}).safeParse(request.params)

        // if the validation is unsuccessful, return a preformatted response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // grab the profileName off of the validated request parameters
        const {profileUsername} = validationResult.data

        // grab the profile by profileUsername
        const data = await selectPublicProfileByProfileUsername(profileUsername)

        return response.json({status: 200, message: null, data})
    } catch (error: unknown) {
        // if an error occurs, return a preformatted response to the client
        return response.json({status: 500,message: "internal server error", data:null})
    }
}

/**
 * Express controller for getting updating a profile
 * @param request from the client to the server to update a profile
 * @param response from the server to the client with a status message to indicate whether the update was successful
 * @return {Promise<Response<Status>>} A promise containing the response for the client with the requested information
 **/

export async function putProfileController (request: Request, response: Response) : Promise<Response<Status>> {
    try{
        //validate the updated profile date coming from the request body
        const validationResultForRequestBody = PublicProfileSchema.safeParse(request.body)

        //if the validation of the body is unsuccessful, return a preformatted response to the client
        if (!validationResultForRequestBody.success) {
            return zodErrorResponse(response, validationResultForRequestBody.error)
        }

        //validate the profileId coming from the request parameters
        const validationResultForRequestParams = PublicProfileSchema.pick({profileId: true}).safeParse(request.params)

        //if the validation of the params is unsuccessful, return a preformatted response to the client
        if (!validationResultForRequestParams.success) {
            return zodErrorResponse(response, validationResultForRequestParams.error)
        }

        //grab the profileId from the session
        const profileFromSession = request.session?.profile
        const profileIdFromSession = profileFromSession?.profileId

        //grab the profileId off of the validated request parameters
        const {profileId} = validationResultForRequestParams.data

        if (profileIdFromSession !== profileId) {
            return response.json({status: 400, message: "you cannot update a profile that is not yours", data: null})
        }

        //grab the profile data off of the validated request body
        const {profileBio, profilePictureUrl, profileName} = validationResultForRequestBody.data

        //grab the profile by profileId
        const profile: PrivateProfile|null = await selectPrivateProfileByProfileId(profileId)


        //if the profile does not exist, return a preformatted response to the client
        if(profile === null) {
            return response.json({status: 400, message: "profile does not exist", data: null})
    }
        //update the profile with the new data
        profile.profileBio = profileBio
        profile.profilePictureUrl = profilePictureUrl
        profile.profileName = profileName

        //update the profile in the database
        await updateProfile(profile)

        //return a response to the client with a success message
        return response.json({status: 200, message: "profile successfully updated", data: null})


    } catch (error: unknown) {
        console.error(error)
        // if an error occurs, return a preformatted response to the client
        return response.json({status: 500, message: "internal server error", data: null})
    }
}






