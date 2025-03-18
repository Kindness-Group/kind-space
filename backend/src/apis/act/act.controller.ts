import {Request, Response} from 'express'
import {Act, insertAct} from "./act.model";
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
        const {actContent, actId, actImageUrl, actAddress} = validationResult.data

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
            actLat:,
            actLng:
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