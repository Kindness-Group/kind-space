import {Router} from "express";
import {
    getPublicProfileByProfileIdController, putProfileController,
} from "./profile.controller"

const basePath = '/apis/profile'

const router: Router = Router()

router.route('/:profileId')
 .get(getPublicProfileByProfileIdController)
    .put(putProfileController)

export const profileRoute = {basePath, router}