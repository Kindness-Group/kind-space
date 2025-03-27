import { z } from 'zod'
import {ProfileSchema} from "@/utils/models/profile/profile.model";

/**
 * The shape of the data that comes from the client when signing up
 * @property profilePasswordConfirm {string} the password confirmation
 * @property profilePassword {string} the password
 */
export const SignUpProfileSchema =
    z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide valid profileId',
    })
        .uuid({message: 'Please provide valid profileId'}),
    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: 'Please provide a valid profileEmail'
    })
        .email({message: 'Please provide valid email'})
        .max(128, {message: 'profileEmail is too long'}),
    profileUsername: z.string({
        required_error: 'profileUsername is required',
        invalid_type_error: 'profileUsername is required',
    }).trim()
        .min(1, {message: 'Please provide valid profileUsername (min 1 characters)'})
        .max(32, {message: 'Please provide valid profileUsername (max 32 characters)'}),
    profilePasswordConfirm: z.string()
        .min(8, {message: 'please provide a valid password (min 8 characters)'})
        .max(32, {message: 'please provide a valid password (max 32 characters)'}),
    profilePassword: z.string()
        .min(8, {message: 'please provide a valid password (min 8 characters)'})
        .max(32, {message: 'please provide a valid password (max 32 characters)'})
})

export type SignUp = z.infer<typeof SignUpProfileSchema>;