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
 * The shape of the public profile that can shared with Next.js
 * @property profileId {string} the primary key
 * @property profileBio {string} the profile's bit
 * @property profileEmail {string|null} the profile's email
 * @property profilePictureUrl {string|null} the profile's image url
 * @property profileName {string} the profile's name
 * @property profileUsername {string} the profile's username
 **/
export type PublicProfile = z.infer<typeof PublicProfileSchema>



/**
 * insert a new profile into the profile table
 * @param profile the profile to insert
 * @returns "profile successfully created"
 **/
export async function insertProfile (profile: PrivateProfile): Promise<string> {
	const { profileId, profileActivationToken, profileBio, profileEmail, profileHash, profileJoinDate, profileName, profilePictureUrl, profileUsername } = profile
	await sql`INSERT INTO profile(profile_id, profile_activation_token, profile_bio, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username) VALUES (${profileId}, ${profileActivationToken}, ${profileBio}, ${profileEmail}, ${profileHash}, now(), ${profileName}, ${profilePictureUrl}, ${profileUsername})`
	return `Profile Successfully Created`
}

export async function selectPrivateProfileByProfileActivationToken(profileActivationToken: string): Promise<PrivateProfile | null> {
	const rowList = await sql`SELECT profile_id, profile_bio, profile_activation_token, profile_email, profile_hash, profile_join_date, profile_name, profile_picture_url, profile_username FROM profile WHERE profile_activation_token = ${profileActivationToken};`
	const result = PrivateProfileSchema.array().max(1).parse(rowList)
	return result.length === 1 ? result[0] : null
}

export async function updateProfile(profile: PrivateProfile): Promise<string> {
	const {
		profileId,
		profileBio,
		profileActivationToken,
		profileHash,
		profileEmail,
		profileUsername,
		profileName,
		profilePictureUrl,
		profileJoinDate
	} = profile

	const formattedDate = profileJoinDate
		? `${profileJoinDate.getFullYear()}-${profileJoinDate.getMonth()+1}-${profileJoinDate.getDay()} ${profileJoinDate.getHours()}:${profileJoinDate.getMinutes()}:${profileJoinDate.getSeconds()}.${profileJoinDate.getMilliseconds()}`
		: null

	await sql`UPDATE profile
				 SET profile_bio=${profileBio},
					  profile_activation_token=${profileActivationToken},
					  profile_username=${profileUsername},
					  profile_hash=${profileHash},
					  profile_join_date=${formattedDate},
					  profile_picture_url=${profilePictureUrl},
					  profile_name=${profileName},
					  profile_email=${profileEmail}
				 WHERE profile_id = ${profileId}`
	return 'Profile updated successfully'
}

export async function selectPrivateProfileByProfileEmail(profileEmail: string): Promise<PrivateProfile | null> {
	const rowList = await sql`SELECT profile_id, profile_bio, profile_activation_token, profile_email, profile_hash, profile_picture_url, profile_name, profile_username, profile_join_date FROM profile WHERE profile_email = ${profileEmail};`

	const result = PrivateProfileSchema.array().max(1).parse(rowList)

	return result?.length === 1 ? result[0] : null
}

/**
 * selects the publicProfile from the profile table by profileId
 * @param profileId the profile's id to search for in the profile table
 * @returns Profile or null if no profile was found
 **/
export async function selectPublicProfileByProfileId (profileId: string): Promise<PublicProfile | null> {

	// create a prepared statement that selects the profile by profileId and execute the statement
	const rowList = await sql`SELECT profile_id, profile_bio, profile_picture_url, profile_name, profile_username, profile_join_date FROM profile WHERE profile_id = ${profileId}`

	// enforce that the result is an array of one profile, or nul
	const result = PublicProfileSchema.array().max(1).parse(rowList)

	// return the profile or null if no profile was found
	return result?.length === 1 ? result[0] : null
}

/**
 * selects the privateProfile from the profile table by profileId
 * @param profileId the profile's id to search for in the profile table
 * @returns PrivateProfile or null if no profile was found
 */
export async function selectPrivateProfileByProfileId (profileId: string): Promise<PrivateProfile | null> {

	//create a prepared statement that selects the profile by profileId and execute the statement
	const rowList = await sql`SELECT profile_id, profile_bio, profile_activation_token, profile_email, profile_hash, profile_picture_url, profile_name, profile_username, profile_join_date FROM profile WHERE profile_id = ${profileId}`

	//enforce that the result is an array of one profile, or null
	const result = PrivateProfileSchema.array().max(1).parse(rowList)

	//return the profile or null if no profile was found
	return result?.length === 1 ? result[0] : null
}

