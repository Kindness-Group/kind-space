import {Router} from "express";
import {
    getPublicProfileByProfileIdController,
} from "./profile.controller"

const basePath = '/apis/profile'

const router: Router = Router()