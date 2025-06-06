'use client'
import {ProfileSchema, Profile} from "@/utils/models/profile/profile.model";
import React, {useState} from "react";
import { Status } from '@/utils/interfaces/Status'
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {putProfile} from "@/utils/models/profile/profile.action";
import {reset} from "next/dist/lib/picocolors";
import {Button, Label, Textarea, TextInput} from "flowbite-react";
import {register} from "node:module";
import {DisplayError, DisplayImageError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";
import {z} from "zod";
import {postImage} from "@/utils/models/image/image.action";
import {ImageUploadDropZone} from "@/components/image-upload-dropzone";

/**
 * Handles the submission of the user's profile data, including profile picture upload
 * and updating profile information on the server.
 *
 * Features:
 * - Validates profile picture field.
 * - Uploads profile picture and updates profile data.
 * - Displays success or error messages.
 * - Resets form on successful submission.
 * @param props
 */
export function EditProfileForm(props: {profile: Profile}) {
	const [status, setStatus] = useState<Status | null>(null)
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	/**
	 * Extended schema for profile validation
	 * Extends the base ProfileSchema to handle the profile picture URL field
	 * The profilePictureUrl field is preprocessed to convert empty strings to null
	 * and is made optional to allow profiles without pictures
	 */
	const profileSchema = ProfileSchema.extend({
		profilePictureUrl: z.preprocess((val) => (val === "" ? null : val), z.any().optional())
	})

	type ProfileSchema = z.infer<typeof profileSchema>

	// get access to return values from React hook form and provide validation
	const {register, handleSubmit, reset, control, setError, clearErrors,formState:{errors}} = useForm<ProfileSchema>({
		resolver: zodResolver(profileSchema),
		defaultValues: props.profile,
		mode: 'onBlur'
	})

	/**
	 * Submits the profile form data to the server
	 *
	 * This function handles:
	 * 1. Validating image errors
	 * 2. Uploading any new profile image
	 * 3. Updating the profile data on the server
	 * 4. Managing form state based on server responses
	 *
	 * @param {ProfileSchema} data - The validated form data from React Hook Form
	 * @returns {Promise<void>} - A promise that resolves when the submission process is complete
	 */
	const fireServerAction = async (data: ProfileSchema): Promise<void> => {
		console.log(data)
		try {
			// check for image errors
			if(errors?.profilePictureUrl) {
				setStatus({status: 500, message: 'Select a new image', data: undefined})
				return
			}
			let profilePictureUrl = null
			// check if there is a new image to upload
			if (data.profilePictureUrl) {
				// upload the image and get the URL
				const response = await postImage(data.profilePictureUrl)
				if (response.status === 200) {
					profilePictureUrl = response.message
				} else {
					setStatus({status: 500, message: 'Image failed to upload', data: undefined})
					return
				}
			}
			// call to the putProfile server action
			const finalResponse = await putProfile({...data, profilePictureUrl})
			//use setStatus to display status from express
			setStatus(finalResponse)
			if (finalResponse.status === 200) {
				setSelectedImage(null)
				//if status object returned from express is 200 resetForm
				reset()
			}
		} catch (error) {
			console.error(error)
			//if an error occurs let user know to try later
			setStatus({status: 500, message: 'Internal Server Error, try again later', data: undefined})
		}
	}

	// @ts-ignore
	const imageError = errors?.profilePictureUrl?.message?.message as any

	return (
		<>
			<form onSubmit={handleSubmit(fireServerAction)}>
				<div className="flex flex-col items-center mb-8">
					<div className="w-64 h-64 bg-gray-200 flex items-center justify-center mb-4 cursor-pointer">
						{selectedImage ? (<img src={selectedImage} alt="Profile" className="w-full h-full object-cover" />) : (
							<div className="text-center text-gray-500">
								<p>Add Profile Picture</p>
								<p>Here</p>
							</div>
						)}
					</div>
					{/* Image upload drop zone */}
					<ImageUploadDropZone control={control} fieldValue={'profilePictureUrl'} setSelectedImage={setSelectedImage} setError={setError} clearErrors={clearErrors}/>
					<DisplayImageError error={imageError}/>
				</div>
				<div className="flex items-center">
					<Label htmlFor="name" className="w-32 text-lg font-medium">Name:</Label>
					<TextInput
						autoComplete='name'
						{...register('profileName')}
						id="name"
						name="profileName"
						placeholder="Enter Full Name"
						className="flex-1"
						type="text"
						aria-invalid={errors.profileName? 'true' : 'false'}
					/>
					<DisplayError error={errors?.profileName?.message} />
				</div>

				<div className="flex">
					<Label htmlFor="bio" className="w-32 text-lg font-medium">Bio:</Label>
					<Textarea
						autoComplete='bio'
						{...register('profileBio')}
						id="bio"
						name="profileBio"
						placeholder="Tell us a little about you!"
						className="flex-1"
						rows={6}
					/>
				</div>

				<div className="flex justify-center mt-8">
					<div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
						<Button type="submit" color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Save</Button>
					</div>
				</div>
			</form>
			<DisplayStatus status={status} />
		</>
	)

}