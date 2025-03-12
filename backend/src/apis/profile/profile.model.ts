import { z } from "zod"
import {PrivateProfileSchema, PublicProfileSchema} from "./profile.validator"
import { sql } from '../../utils/database.utils'


/**
 * The shape of the private profile that is only used by express. it must never be returned to the controller.
 * @property profileId {string} the primary key
 * @property profileActivationToken {string|nul} the profile's activation token
 * @property profileBio {string} the profile's bio
 * @property profileEmail {string} the profile's email
 * @property profileHash {string} the profile's hash
 * @property profileJoinDate {string} the profile's join date
 * @property profileName {string} the profile's name
 * @property profilePictureUrl {string|null} the profile's picture url
 * @property profileUsername {string} the profile's username
 **/
export type PrivateProfile = z.infer<typeof PrivateProfileSchema>

/**
 * insert a new profile into the profile table
 * @param profile the profile to insert
 * @returns "profile successfully created"
 **/
export async function insertProfile (profile: PrivateProfile): Promise<string> {

    //
    const { profileId, profileActivationToken, profileBio, profileEmail, profileHash, profileJoinDate, profileName, profilePictureUrl, profileUsername } = profile
    await sql`INSERT INTO profile(profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username) VALUES (${profileId}, ${profileActivationToken}, ${profileBio}, ${profileEmail}, ${profileHash}, ${profileJoinDate}, ${profileName}, ${profilePictureUrl}, ${profileUsername})`
    return `Profile Successfully Created`
}