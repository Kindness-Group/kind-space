import {z} from 'zod'
import {CommitmentSchema} from "./commitment.validator";
import {sql} from "../../utils/database.utils";

// The shape of a commitment object
export type Commitment = z.infer<typeof CommitmentSchema>

/**
 * inserts a commitment into the commitment table and returns a message
 * @param commitment to be inserted
 * @returns 'commitment successfully posted'
 */
export async function insertCommitment(commitment: Commitment): Promise<string> {

    // deconstruct the commitment object
    const {commitmentSuggestionId, commitmentProfileId, commitmentCompleted, commitmentDatetime} = commitment

    // insert the like into the like table
    await sql`INSERT INTO commitment (commitment_suggestion_id, commitment_profile_id, commitment_completed, commitment_date_time)
              VALUES (${commitmentSuggestionId}, ${commitmentProfileId}, ${commitmentCompleted}, NOW())`

    // return a message to the user indicating success
    return 'Commitment successfully posted'
}
