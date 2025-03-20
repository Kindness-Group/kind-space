import {Router} from 'express'
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {getSuggestionBySuggestionIdController, postSuggestionController} from "./suggestion.controller";


// declare a basePath for this router
const basePath = '/apis/suggestion'

// instantiate a new router object
const router = Router()

// define suggestion route for this router
router.route('/')
    .post(postSuggestionController)

router.route ('/:suggestionId')
    .get(getSuggestionBySuggestionIdController)

// export the router with the basePath and router object
export const suggestionRoute = {basePath, router}