import { Router } from 'express'
import {
	getAllActs,
	postActController
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

// export the router with the basePath and router object
export const actRoute = { basePath, router }