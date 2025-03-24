import {z} from 'zod'

/**
 * The shape of a commitment object
 * @property commitmentSuggestionId {string} the foreign key
 * @property commitmentProfileId {string} the foreign key
 * @property commitmentCompleted {boolean} whether or not the commitment has been completed
 * @property commitmentDateTime {Date} the date and time the commitment was completed
 */

export const CommitmentSchema = z.object({
    commitmentSuggestionId: z.string({required_error: 'please provide a valid commitmentSuggestionId'}).uuid({message: 'please provide a valid uuid for commitmentSuggestionId'}),
    commitmentProfileId: z.string({required_error: 'please provide a valid commitmentProfileId'}).uuid({message: 'please provide a valid uuid for commitmentProfileId'}),
    commitmentCompleted: z.boolean(),
    commitmentDateTime: z.coerce.date({required_error: 'commitmentDateTime is required', invalid_type_error: 'please provide a valid commitmentDateTime'}).nullable(),
})

