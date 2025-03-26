import {Router} from 'express'
import {
	deleteCommentByCommentIdController, getCommentByCommentIdController,
	getCommentsByCommentActIdController,
	postCommentController,
	putCommentController
} from "./comment.controller";
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";


// declare a basePath for this router
const basePath = '/apis/comment'

// instantiate a new router object
const router = Router()

// define suggestion route for this router
router.route('/')
	.post(isLoggedInController, postCommentController)

// define thread route for this router
router.route('/:commentId')
	.get(getCommentByCommentIdController)
	.put(isLoggedInController, putCommentController)
	.delete(isLoggedInController, deleteCommentByCommentIdController)

router.route('/commentActId/:commentActId')
	.get(getCommentsByCommentActIdController)

// export the router with the basePath and router object
export const commentRoute = {basePath, router}

