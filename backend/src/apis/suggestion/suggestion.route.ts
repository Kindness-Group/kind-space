import {Router} from 'express'
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
	getSuggestionBySuggestionDateController,
	getSuggestionBySuggestionIdController,
	postSuggestionController
} from "./suggestion.controller";


// declare a basePath for this router
const basePath = '/apis/suggestion'

// instantiate a new router object
const router = Router()

router.route ('/suggestionId/:suggestionId')
    .get(getSuggestionBySuggestionIdController)

router.route('/suggestionDate/:suggestionDate')
	.get(getSuggestionBySuggestionDateController)

// export the router with the basePath and router object
export const suggestionRoute = {basePath, router}