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
    await sql `INSERT INTO act (act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng) VALUES (${actId}, ${actProfileId}, ${actAddress}, ${actContent}, now(), ${actImageUrl}, ${actLat}, ${actLng})`

    //return a message that says 'Act successfully posted'
    return 'Act successfully posted'
}

/**
 * gets all threads from the thread table in the database and returns them to the user in the response
 * @returns {Promise<Act[]>}
 * @throws {Error} an error if the query fails for some reason or if there are no threads in the database
 */
export async function selectAllActs(): Promise<Act[]> {
    // get all acts from the thread table in the database and return them
    const rowList = <Act[]>await sql`SELECT act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng FROM act ORDER BY act_date_time DESC`

    // parse the threads from the database into an array of Thread objects
    return ActSchema.array().parse(rowList)
}

/** get all acts from the act table in the database by profileUsername and returns them
 * @param profileUsername {string} the act's profile name to search for in the act table
 * @returns <Act[]> the acts that have the profileName
 **/

export async function selectActsByProfileUsername(profileUsername: string): Promise<Act[]> {
    //get all acts from the act table in the database by profileUsername and return them
    const rowList = <Act[]>await sql`SELECT act_id, act_profile_id, act_address, act_content, act_date_time, act_image_url, act_lat, act_lng FROM act JOIN profile ON act.act_profile_id = profile.profile_id WHERE profile.profile_username = ${profileUsername}`

    //parse the threads from the database into an array of Act objects
    return ActSchema.array().parse(rowList)
}

export async function selectActsByActProfileId(actProfileId: string): Promise<Act[]> {
    // get all threads from the thread table in the database by actProfileId and return the
    const rowList = <Act[]>await sql`SELECT act_id,
                                    act_profile_id,
                                    act_address,
                                    act_content,
                                    act_date_time,
                                    act_image_url,
                                    act_lat,
                                    act_lng
                        FROM act 
                        WHERE act_profile_id = ${actProfileId}`

    // parse the threads from the database into an array of Thread objects
    return ActSchema.array().parse(rowList)
}