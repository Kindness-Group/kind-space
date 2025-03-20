import {Router} from 'express'
import {postCommentController} from "./comment.controller";

// declare a basePath for this router
const basePath = '/apis/comment'

// instantiate a new router object
const router = Router()

// define suggestion route for this router
router.route('/')
	.post(postCommentController)

// export the router with the basePath and router object
export const commentRoute = {basePath, router}