import {Router} from "express";
import {signupProfileController} from "./sign-up.controller";
import {activationController} from "./activation.controller";

// declare a basePath for this router
const basePath = '/apis/sign-up' as const
const router = Router()
router.route('/') .post(signupProfileController)

router.route('/activation/:activation').get(activationController)


export const signUpRoute = {basePath, router}
