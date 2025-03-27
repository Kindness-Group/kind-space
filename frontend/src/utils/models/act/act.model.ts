import {z} from 'zod'

export const ActSchema = z.object({
    actId: z.string({required_error: 'Please provide a valid actId or null'}).uuid({message: 'Please provide a valid uuid for actId'}),
    actProfileId: z.string({required_error: 'Please provide a valid actProfileId'}).uuid({message: 'Please provide a valid uuid for actProfileId'}),
    actAddress: z.string().max(128, {message: 'Maximum 128 characters for actContent'}).nullable(),
    actContent: z.string().max(500, {message: 'Maximum 500 characters for actContent'}),
    actDateTime:
        z.coerce.date({required_error: 'please provide a valid actDateTime or null'}).nullable(),
    actImageUrl:
        z.string({required_error: 'Please provide a valid actImageUrl or null'}).trim().url({message: 'Please provide a valid URL for actImageUrl'}).max(128, {message: 'Please provide a valid actImageUrl (max 128 characters'}).nullable(),
    actLat: z.number().min(-90, {message: 'Please provide a valid actLat'}).max(90, {message: 'Please provide a valid actLat'}).nullable(),
    actLng: z.number().min(-180, {message: 'Please provide a valid actLat'}).max(180, {message: 'Please provide a valid actLng'}).nullable(),
})

export type Act = z.infer<typeof ActSchema>
