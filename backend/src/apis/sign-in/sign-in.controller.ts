import {PrivateProfile, selectPrivateProfileByProfileEmail} from "../profile/profile.model";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {Request, Response} from "express";
import {zodErrorResponse} from "../../utils/response.utils";
import {v4 as uuid} from "uuid";
import {Status} from "../../utils/interfaces/Status";
import {signInProfileSchema} from "./sign-in.validator";

export async function signInController (request: Request, response: Response): Promise<Response> {
	try {
		// validate the new profile data coming from the request body
		const validationResult = signInProfileSchema.safeParse(request.body);

		// if the validation is unsuccessful, return a preformatted response to the client
		if (!validationResult.success) {
			return zodErrorResponse(response, validationResult.error)
		}

		// deconstruct the profileEmail and profilePassword from the request body
		const {profileEmail, profilePassword} = validationResult.data

		// select the profile by the profileEmail from the database
		const profile: PrivateProfile | null = await selectPrivateProfileByProfileEmail(profileEmail);

		// create a preformatted response to send to the client if sign in fails
		const signInFailedStatus: Status = {status: 400, message: 'Email or password is incorrect please try again.', data: null}

		if (profile === null) {
			return response.json(signInFailedStatus);
		}

		// check if the password matches the hash
		const isPasswordValid = await validatePassword(profile.profileHash, profilePassword)

		if (!isPasswordValid) {
			return response.json(signInFailedStatus);
		}

		// if sign in was successful, create a new session for the client and return a response to the client
		// deconstruct the profileId, profileBio, profilePictureUrl, profileName and profileUsername from the profile
		const {profileId, profileBio, profilePictureUrl, profileName, profileUsername} = profile;

		// generate a new signature for the session
		const signature: string = uuid()

		// generate a new jwt for the session using the profileId, profileBio, profilePictureUrl, profileName, profileUsername and signature
		const authorization: string = generateJwt({
			profileId,
			profileBio,
			profilePictureUrl,
			profileName,
			profileUsername
		}, signature);

		// set the session variables
		request.session.profile = profile
		request.session.jwt = authorization
		request.session.signature = signature

		// set the authorization header
		response.header({
			authorization
		})

		// return a response to the client
		return response.json({status: 200, message: 'Sign in successful', data: null})

		// catch any errors that occurred during the sign-in process and return a response to the client
	} catch (error: any) {
		return response.json({status: 500, data: null, message: error.message})
	}
}