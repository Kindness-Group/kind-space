import {Router} from "express";
import {
	getPublicProfileByProfileIdController, getPublicProfileByProfileUsernameController, putProfileController,
} from "./profile.controller"
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";

const basePath = '/apis/profile'

const router: Router = Router()

router.route('/:profileId')
	.get(getPublicProfileByProfileIdController)
	.put(isLoggedInController, putProfileController)

router.route('/profileUsername/:profileUsername')
	.get(getPublicProfileByProfileUsernameController)

export const profileRoute = {basePath, router}