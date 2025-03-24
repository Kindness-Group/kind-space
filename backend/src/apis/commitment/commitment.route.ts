import {Router} from 'express'
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
    deleteCommitmentController, getCommitmentsByCommitmentProfileIdController,

    postCommitmentController
} from "./commitment.controller";
import {getLikesByLikeProfileIdController} from "../like/like.controller";

//declare a basePath for this router
const basePath = '/apis/commitment'

//instantiate a new router object
const router = Router()

//define commitment route for postCommitment
router.route('/')
    .post(isLoggedInController, postCommitmentController)

router.route('/commitmentSuggestionId/:commitmentSuggestionId')
    .delete(isLoggedInController, deleteCommitmentController)

router.route('/commitmentProfileId/:commitmentProfileId')
    .get(getCommitmentsByCommitmentProfileIdController)

//export the router with the basePath and router object
export const commitmentRoute = {basePath, router}
