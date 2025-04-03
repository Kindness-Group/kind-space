import {z} from 'zod'
import {CommitmentSchema} from "./commitment.validator";
import {sql} from "../../utils/database.utils";
import {Act} from "../act/act.model";

// The shape of a commitment object
export type Commitment = z.infer<typeof CommitmentSchema>

/**
 * inserts a commitment into the commitment table and returns a message
 * @param commitment to be inserted
 * @returns 'commitment successfully posted'
 */
export async function insertCommitment(commitment: Commitment): Promise<string> {

    // deconstruct the commitment object
    const {commitmentSuggestionId, commitmentProfileId, commitmentCompleted, commitmentDateTime} = commitment

    // insert the like into the like table
    await sql`INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
              VALUES (${commitmentSuggestionId}, ${commitmentProfileId}, ${commitmentCompleted}, NOW())`

    // return a message to the user indicating success
    return 'Commitment successfully posted'
}

/**
 * Commitment
 */
/**
 * deletes a commitment from the commitment table and returns a message
 * @param commitment to be deleted
 * @returns 'Commitment successfully deleted'
 */
export async function deleteCommitment(commitment: Commitment): Promise<string> {

    // deconstruct the commitment object
    const {commitmentSuggestionId, commitmentProfileId, commitmentCompleted, commitmentDateTime} = commitment
    // delete the like form the like table
    await sql`DELETE
             FROM commitment
             WHERE commitment_suggestion_id = ${commitmentSuggestionId}
               AND commitment_profile_id = ${commitmentProfileId}`

    // return a message to the user indicating success
    return  'Commitment successfully deleted'
}

/**
 * selects commitments from the commitment table by commitmentProfileId and returns te commitments
 * @param commitmentProfileId to be selected by commitmentProfileId
 * @returns the likes that were selected
 **/
export async function selectCommitmentsByCommitmentProfileId(commitmentProfileId: string): Promise<Commitment[]> {
    // select the commitments from the commitment table by commitmentProfileId
    const rowList = <Commitment[]>await sql`SELECT commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time FROM commitment WHERE commitment_profile_id = ${commitmentProfileId}`

    // parse the result into an array of commitments and return it
    return CommitmentSchema.array().parse(rowList)
}

/**
 * selects commitments from the commitment table by commitmentSuggestionId and returns the commitments
 * @param commitmentSuggestionId
 * @returns the commitments that were selected
 */
export async function selectCommitmentsByCommitmentSuggestionId(commitmentSuggestionId: string): Promise<Commitment[]> {
    // select the commitments from the commitment table by commitmentSuggestionId
    const rowList = <Commitment[]>await sql`SELECT commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time FROM commitment WHERE commitment_suggestion_id = ${commitmentSuggestionId}`

    return CommitmentSchema.array().parse(rowList)
}

export async function updateCommitment(commitment: Commitment): Promise<string> {
    const {commitmentSuggestionId, commitmentCompleted, commitmentProfileId} = commitment
    await sql `UPDATE commitment Set commitment_completed = ${commitmentCompleted}
    WHERE commitment_suggestion_id = ${commitmentSuggestionId} AND commitment_profile_id = ${commitmentProfileId}`
    return 'Commitment successfully updated'
}

export async function selectCommitmentByProfileAndSuggestionId(commitmentSuggestionId: string, commitmentProfileId: string): Promise<Commitment> {
    // select the commitments from the commitment table by commitmentSuggestionId
    const rowList = await sql`SELECT commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time FROM commitment WHERE commitment_suggestion_id = ${commitmentSuggestionId} AND commitment_profile_id = ${commitmentProfileId}`

    return CommitmentSchema.parse(rowList)
}