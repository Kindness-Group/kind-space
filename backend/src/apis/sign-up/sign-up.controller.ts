import {Request, Response} from 'express'
import {Status} from '../../utils/interfaces/Status'
import formData from 'form-data'
import Mailgun from 'mailgun.js'
import {setActivationToken, setHash} from '../../utils/auth.utils'
import {PrivateProfile, insertProfile} from '../profile/profile.model'
import {SignUpProfileSchema} from './sign-up.validator'
import {zodErrorResponse} from '../../utils/response.utils'

/**
 * Express controller for sign-up
 * @endpoint POST /apis/sign-up
 * @param request an object containing the body contains a profileName, profileEmail, profilePassword and profilePasswordConfirm.
 * @param response an object modeling the response that will be sent to the client.
 * @returns response to the client indicating whether the sign-up was successful or not
 **/
export async function signupProfileController(request: Request, response: Response): Promise<Response> {
    try {
        // validate the new profile data coming from the request body
        const validationResult = SignUpProfileSchema.safeParse(request.body)
        // if the validation is unsuccessful, return a preformatted response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // create a new mailgun client with the mailgun api key
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient = mailgun.client({username: `api`, key: process.env.MAILGUN_API_KEY as string})

        // deconstruct the profileName, ProfileEmail, and profilePassword from the request body
        const {profileName, profileEmail, profilePassword, profileId, profileUsername} = request.body

        // hash the profilePassword
        const profileHash = await setHash(profilePassword)

        // create a new profileActivationToken
        const profileActivationToken = setActivationToken()

        // create a placeholder for profileImageUrl
        const profilePictureUrl = `https://res.cloudinary.com/dmb9ktdjq/image/upload/v1744320271/default-avatar-icon-of-social-media-user-vector_pjn5gw.jpg`

        // create a basePath variable containing the scheme, host, port, and base path
        const basePath: string = `${request.protocol}://${request.hostname}:8080${request.originalUrl}activation/${profileActivationToken}`

        // create a message for the activation email body
        const message = `<h2>Welcome to Kind Space,</h2>
            <p>In order to start sharing kindness, please verify your account.</p>
            <p><a href="${basePath}">${basePath}</a></p>`

        // create a mailgun message object
        const mailgunMessage = {
            from: `mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN as string}>`,
            to: profileEmail,
            subject: `One step closer to Kind Space -- Account Activation`,
            html: message
        }
        // create a new profile object
        const profile: PrivateProfile = {
            profileId: profileId,
            profileBio: null,
            profileActivationToken,
            profileEmail,
            profileHash,
            profileName,
            profilePictureUrl,
            profileUsername,
            profileJoinDate: null
        }

        // insert the new profile into the database
        await insertProfile(profile)

        // send the email
        await mailgunClient.messages.create(process.env.MAILGUN_DOMAIN as string, mailgunMessage)

        // create a status object to send back to the client
        const status: Status = {
            status: 200,
            message: `Profile successfully created, please check your email.`,
            data: null
        }

        // send the status to the client
        return response.json(status)

        // catch any errors that occurred during the sign-up process
      } catch (error: any) {
        if (error.message === 'Forbidden') {
            return response.json({status: 200, data: null, message:'Email verification bypassed'})
        }
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        }

        return response.json(status)
    }
}