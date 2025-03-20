import {Request, Response} from 'express'
import {
    insertSuggestion, selectSuggestionBySuggestionDate, selectSuggestionBySuggestionId
} from "./suggestion.model"
import {Status} from "../../utils/interfaces/Status";
import {SuggestionSchema} from "./suggestion.validator";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {Suggestion} from "./suggestion.model";

export async function postSuggestionController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        // validate the incoming request with the like schema
        const validationResult = SuggestionSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue

        // get the suggestionId suggestionContent, suggestionDate from the request body
        const {suggestionId, suggestionContent, suggestionDate} = validationResult.data

        // create a new thread object with the suggestionId, suggestionContent, and suggestionDate
        const suggestion: Suggestion = {
            suggestionId,
            suggestionContent,
            suggestionDate,
        }

        // insert the suggestion into the database and store the result in a variable called result
        const result = await insertSuggestion(suggestion)

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
 * gets a suggestion from the database by suggestion id and returns it to the user in the response
 * @param request from the client to the server to get a suggestion by suggestion id from
 * @param response from the server to the client with a suggestion by suggestion id or an error message
 */

export async function getSuggestionBySuggestionIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validate the incoming request suggestionId with the uuid schema
        const validationResult = z.string().uuid({message: 'Please provide a valid suggestionId'}).safeParse(request.params.suggestionId)

        //if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        //get the suggestionId from the request parameters
        const suggestionId = validationResult.data

        //get the suggestion from the database by suggestionId and store it in a variable called data
        const data = await selectSuggestionBySuggestionId(suggestionId)

        //return the response with the status code 200, a message, and the suggestion as data
        return response.json({status: 200, message: null, data})

        //if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets a suggestion from the database by suggestionDate and returns it to the user in the response
 * @param request from the client to the server to get a suggestion by suggestionDate from
 * @param response from the server to the client with a suggestion by suggestionDate or an error message
 */
export async function getSuggestionBySuggestionDateController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.coerce.date().safeParse(request.params.suggestionDate)

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        const suggestionDate = validationResult.data

        // get the suggestion from the database by suggestionDate and store it in a variable called data
        const data = await selectSuggestionBySuggestionDate(suggestionDate)

        // return the response with the status code 200, a message, and the suggestion as data
        return response.json({status: 200, message: null, data})
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}