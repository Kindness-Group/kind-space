import {Request, Response} from 'express'
import {
    Act,
    insertAct, selectActByActId,
    selectActsByActProfileId,
    selectActsByProfileUsername,
    selectAllActs
} from "./act.model";
import {Status} from "../../utils/interfaces/Status";
import {PublicProfile} from "../profile/profile.model";
import {ActSchema} from "./act.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {number, z} from "zod";
import {PublicProfileSchema} from "../profile/profile.validator";

/**
 * Posts a new act to the database and returns a status. If successful, the status will contain the message "Act created successfully." If unsuccessful, the status will contain the message "Error creating Act. Try again."
 * @param request body must contain an actContent and actImageUrl
 * @param response will contain a status object with a message and data if successful or a status with an error message and null data if unsuccessful
 */
export async function postActController(request: Request, response: Response): Promise<Response | undefined> {
    try{
        //validate the incoming request with the act schema
        const validationResult = ActSchema.safeParse(request.body);

        //if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        //if the validation succeeds, continue on with the postActController logic below this line

        //get the act content, act id, and act image url from the request body
        const {actContent, actId, actImageUrl, actAddress, actLat, actLng} = validationResult.data

        // get the profile from the session
        const profile: PublicProfile = request.session.profile as PublicProfile

        //set the act profile id to the profile id from the session
        const actProfileId: string = profile.profileId as string

        //create a new act object with the actProfileId, actContent, and actImageUrl
        const act: Act = {
            actId,
            actProfileId,
            actAddress,
            actContent,
            actDateTime: null,
            actImageUrl,
            actLat,
            actLng,
        }

        //insert the act into the database and store the result in a variable called result
        const result = await insertAct(act)

        //return the response with the status code 200, a message, and the result as a data
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

        //if there is an error, return the response with the status code 500, and error message, and null data
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating act. Try again.', data: null})
    }
}

/**
 * gets all threads from the database and returns them to the user in the response
 * @param request from the client to the server to get all acts
 * @param response from the server to the client with all acts or an error message
 */
export async function getAllActs(request: Request, response: Response): Promise<Response<Status>> {
    try {
        // get the threads from the database and store it in a variable called data
        const data = await selectAllActs()

        // return the response with the status code 200, a message, and the acts as data
        const status: Status = {status: 200, message: null, data}
        return response.json(status)

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: 'Error getting acts. Try again',
            data: []
        })
    }
}

/**
 * gets all acts from the database by act profile username and returns them to the user in the response
 * @param request from the client to the server to get all acts by act profile username
 * @param response from the server to the client with all acts by act profile username or an error message
 **/
export async function getActsByActProfileUsernameController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validate the incoming request actProfileId with the uuid schema
        const validationResult = PublicProfileSchema.pick({profileUsername: true}).safeParse(request.params)

        console.log(validationResult)
        //if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        //get the act profile id from the request parameters
        const {profileUsername} = validationResult.data

        //get the acts from the database by act profile username and store it in a variable called data
        const data = await selectActsByProfileUsername(profileUsername)

        //return the response with the status code 200, a message, and the acts as data
        return response.json({status: 200, message: null, data})

        //if there is an error, return the response with the status code 500, and error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets all acts from the database by act profile id and returns them to the user in the response
 * @param request from the client to the server to get all acts by act profile id
 * @param response from the server to the client with all acts by act profile id or an error message
 */
export async function getActsByActProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        // validate the incoming request actProfileId with the uuid schema
        const validationResult = z.string().uuid({message: 'Please provide a valid actProfileId'}).safeParse(request.params.actProfileId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the act profile id from the request parameters
        const actProfileId = validationResult.data

        // get the acts from the database by act profile id and store it in a variable called data
        const data = await selectActsByActProfileId(actProfileId)

        // return the response with the status code 200, a message, and the threads as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets an act from the database by actId and returns it to the user in the response
 * @param request from the client to the server to get an act by actId from
 * @param response from the server to the client with an act by actId or an error message
 */
export async function getActByActIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        // validate the incoming request actId with the uuid schema
        const validationResult = z.string().uuid({message: 'Please provide a valid actId'}).safeParse(request.params.actId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the actId from the request parameters
        const actId = validationResult.data

        // get the thread from the database by actId and store it in a variable called data
        const data = await selectActByActId(actId)

        // return the response with the status code 200, a message, and the act as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

