import {Request, Response} from 'express'
import {
    insertSuggestion} from "./suggestion.model"
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
            suggestionDate: null,
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