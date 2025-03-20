import {Router} from 'express'
import {isLoggedInController} from "../../utils/controllers/isLoggedIn.controller";
import {
    postLikeController, toggleLikeController
} from "./like.controller";
import {post} from "axios";

//declare a basePath for this router
const basePath = '/apis/like'

//instantiate a new router object
const router = Router()

//define like route for postLike
router.route('/')
.post(isLoggedInController, postLikeController)

// define like route for this router
router.route('/toggle')
    .post(isLoggedInController, toggleLikeController)

// define like route for this router
// router.route('/likeActId/:likeThreadId')
//     .get(getLikesByLikeActIdController)
//     .delete(isLoggedInController, deleteLikeController)


//export the router with the basePath and router object
export const likeRoute = {basePath, router}

