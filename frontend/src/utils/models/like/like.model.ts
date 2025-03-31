import {z} from "zod";

export const LikeSchema = z.object({
	likeActId: z.string({required_error: 'Please provide a valid likeActId'}).uuid({message: 'Please provide a valid uuid for likeActId'}),
	likeProfileId: z.string({required_error: 'Please provide a valid likeProfileId'}).uuid({message: 'Please provide a valid uuid for likeProfileId'}),
	likeDateTime: z.coerce.date({
		required_error: 'likeDateTime is required',
		invalid_type_error: 'Please provide a valid profileJoinDate'
	}).nullable(),
})

export type Like = z.infer<typeof LikeSchema>;