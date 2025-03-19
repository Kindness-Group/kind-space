import {z} from 'zod'
import {sql} from "../../utils/database.utils"
import {LikeSchema} from "./like.validator";

//the shape of a like object
export type Like = z.infer<typeof LikeSchema>

/**
 * inserts a like into the like table and returns a message
 * @param like to be inserted
 * @returns 'You Liked this Act!'
 */

export async function insertLike(like: Like): Promise<string> {
    // deconstruct the like object
    const {likeActId, likeProfileId, likeDateTime} = like

    //insert the like into the like table
    await sql`INSERT INTO "like" (like_act_id, like_profile_id, like_date_time) VALUES (${likeActId}, ${likeProfileId}, now())`

    //return a message to the user indicating success
    return 'You Liked this Act!'
}

/**
 * selects a like from the like table by likeId and returns the like
 * @param like to be selected likeId
 * @returns the like that was selected
 * @returns null if no like was found
 */
export async function selectLikeByLikeId(like: Like): Promise<Like | null> {

    // deconstruct the like object
    const {likeActId, likeProfileId} = like

    // select the like from the like table by likeId
    const rowList = <Like[]>await sql`SELECT like_act_id, like_profile_id, like_date_time
                                      FROM "like"
                                      WHERE like_act_id = ${likeActId}
                                        AND like_profile_id = ${likeProfileId}`

    // parse the result into an array of likes
    const result = LikeSchema.array().max(1).parse(rowList)

    // return the like that was selected
    return result.length === 0 ? null : result[0]
}

/**
 * delets a like from the like table and returns a message
 * @param like to be deleted
 * @returns 'Like successfully deleted'
 */
export async function deleteLike(like: Like): Promise<string> {

    // deconstruct the like object
    const {likeActId, likeProfileId} = like

    // delete the like form the like table
    await sql`DELETE 
              FROM "like"
              WHERE like_act_id = ${likeActId}
                AND like_profile_id = ${likeProfileId}`

    // return a message to the user indicating success
    return  'Like successfully deleted'
}

