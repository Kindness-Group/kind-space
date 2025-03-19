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


