import { Router } from 'express'
import {
	getActsByActProfileIdController,
	getAllActs,
	postActController,
	getActsByActProfileUsernameController,
	getActByActIdController,
	deleteActByActIdController,
	putActController,
	getActsByActLatActLng
} from "./act.controller";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {deleteActByActId} from "./act.model";

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
	.delete(isLoggedInController, deleteActByActIdController)
	.put(isLoggedInController, putActController)

router.route('/:actLat/:actLng')
	.get(getActsByActLatActLng)

// export the router with the basePath and router object
export const actRoute = { basePath, router }