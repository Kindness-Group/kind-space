import {z} from 'zod'
import {ActSchema} from "./act.validator";
import {sql} from "../../utils/database.utils";

/**
 * The shape of a act in the act table in the database
 * @property actId {string} the primary key
 * @property actProfileId {string} the foreign key to the profile table
 * @property actAddress {string} the address of the act
 * @property actContent {string} the content of the act
 * @property actDateTime {string} the act's datetime
 * @property actImageUrl {string} the act's image url
 * @property actLat {string} the act's latitude
 * @property actLng {string} the act's longitude
 *
 **/
export type Act = z.infer<typeof ActSchema>

/**
 * posts an act in the act feed in the database and returns a message that says 'Act Successfully posted'
 * @params act
 * @returns 'Act successfully posted'
 */
export async function insertAct(act: Act): Promise<string> {

    //deconstruct the act object
    const {actId, actProfileId, actAddress, actContent, actDateTime, actImageUrl, actLat, actLng} = act

    //insert the act the into the act feed
    await sql `INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng) VALUES (${actId}, ${actProfileId}, ${actAddress}), ${actContent}, now(), ${actImageUrl}, ${actLat}, ${actLng})`

    //return a message that says 'Act successfully posted'
    return 'Act successfully posted'
}