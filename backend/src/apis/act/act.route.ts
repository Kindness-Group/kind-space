import { Router } from 'express'
import {
	getActsByActProfileIdController,
	getAllActs,
	postActController,
	getActsByActProfileUsernameController, getActByActIdController
} from "./act.controller";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";

// declare a basePath for this router
const basePath = '/apis/act'

// instantiate a new router object
const router = Router()

// define thread route for this router
router.route('/')
	.post(isLoggedInController, postActController)
	.get(getAllActs)

router.route('/actProfileId/:actProfileId')
	.get(getActsByActProfileIdController)

router.route('/profileUsername/:profileUsername')
	.get(getActsByActProfileUsernameController)

router.route('/:actId')
	.get(getActByActIdController)

// export the router with the basePath and router object
export const actRoute = { basePath, router }