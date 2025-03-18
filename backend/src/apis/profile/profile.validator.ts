import {z} from 'zod'

export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide valid profileId',
    })
        .uuid({message: 'Please provide valid profileId'}),
    profileBio: z.string({
        required_error: 'profile bio is a required field',
        invalid_type_error: 'Please provide a valid profile bio'
    })
        .max(500, {message: 'profile bio length is too long'})
        .nullable(),
    profileActivationToken: z.string({
        required_error: 'profileActivationToken is required',
        invalid_type_error: 'Please provide a valid profileActivationToken'
    })
        .length(32, {message: 'profileActivationToken is too long'})
        .nullable(),
    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: 'Please provide a valid profileEmail'
    })
        .email({message: 'Please provide valid email'})
        .max(128, { message: 'profileEmail is too long'}),
    profileHash: z.string({
        required_error: 'profileHash is required',
        invalid_type_error: 'Please provide a valid profileHash'
    })
        .length(97, { message: 'profile hash must be 97 characters'}),
    profilePictureUrl: z.string({
        required_error: 'profilePictureUrl is required',
        invalid_type_error: 'Please provide a valid profileImageUrl'
    })
        .trim()
        .url({message: 'Please provide a valid url'})
        .max(255, {message: 'profileImageUrl image is too long'})
        .nullable(),
    profileName: z.string({
        required_error: 'profileName is required',
        invalid_type_error: 'Please provide a valid profileName'
    })
        .trim()
        .min(1, {message: 'Please provide valid profileName (min 1 characters)'})
        .max(32, {message: 'Please provide valid profileName (max 32 characters)'}),
    profileJoinDate: z.coerce.date({
        required_error: 'profileCreationDate is required',
        invalid_type_error: 'Please provide a valid profileJoinDate'
    })
        .nullable(),
    profileUsername: z.string({
        required_error: 'profileUsername is required',
        invalid_type_error: 'profileUsername is required',
    })  .trim()
        .min(1, {message: 'Please provide valid profileUsername (min 1 characters)'})
        .max(32, {message: 'Please provide valid profileUsername (max 32 characters)'}),
    })
export const PublicProfileSchema = PrivateProfileSchema.omit
({profileHash: true, profileActivationToken: true, profileEmail: true})