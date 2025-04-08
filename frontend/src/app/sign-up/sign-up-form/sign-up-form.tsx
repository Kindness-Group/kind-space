'use client'
import {Button, Label, TextInput} from "flowbite-react";
import {HiEye, HiEyeOff} from "react-icons/hi";
import React, {useState} from "react";
import {SignUp, SignUpProfileSchema} from "@/utils/models/sign-up/sign-up.model";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {DisplayError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";
import { Status } from '@/utils/interfaces/Status'
import {postSignUp} from "@/utils/models/sign-up/sign-up.action";
import {v7 as uuid} from "uuid";
import {z} from "zod";

/**
 * SignUpForm Component
 *
 * This component renders a sign-up form that allows users to create an account.
 * It includes fields for email, username, password, and password confirmation.
 * The form uses `react-hook-form` for form handling and validation, with `zod` for schema validation.
 *
 * Features:
 * - Password visibility toggle
 * - Client-side validation for matching passwords
 * - Displays error messages for invalid inputs
 * - Submits form data to the server for account creation
 * - Resets form fields on successful submission
 *
 * @component
 * @returns {JSX.Element} The rendered sign-up form component
 */
export function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [status, setStatus] = useState<Status|null>(null)

	const defaultValues : FormSchema = {
		profileEmail: '',
		profilePassword: '',
		profilePasswordConfirm: '',
		profileUsername: ''
	}

	/**
	 * Defines the form schema for the sign-up form.
	 * Omits the `profileId` field and adds a refinement to ensure
	 * that `profilePassword` and `profilePasswordConfirm` match.
	 *
	 * @constant
	 * @type {z.ZodObject}
	 * @property {string} profilePassword - The user's password.
	 * @property {string} profilePasswordConfirm - The confirmation of the user's password.
	 * @throws {ZodError} If the passwords do not match.
	 */
	const formSchema = SignUpProfileSchema.omit({profileId: true}).refine(data => data.profilePassword === data.profilePasswordConfirm, {
		message: 'passwords do not match'
	})

	type FormSchema = z.infer<typeof formSchema>

	// Initialize the form using react-hook-form with zod validation
	const {register, handleSubmit, reset, formState:{errors}} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues,
		mode: 'onBlur'
	});

	/**
	 * Handles the form submission by sending the sign-up data to the server.
	 * This async function creates a new user profile by:
	 * 1. Generating a unique profileId using UUID
	 * 2. Submitting the data to the server via postSignUp
	 * 3. Resetting the form on success
	 * 4. Updating the status state with the server response
	 *
	 * @async
	 * @param {FormSchema} data - The form data containing profileEmail, profileUsername,
	 *                           profilePassword, and profilePasswordConfirm
	 * @throws {Error} When the server request fails
	 * @return {Promise<void>}
	 */
	const fireServerAction = async (data: FormSchema) => {
		try {
			const signUp = {...data, profileId: uuid()}
			//call to the postSignUp server action
			const response = await postSignUp(signUp)
			// check if the response is ok
			if (response.status === 200) {
				reset ()
			}
			// set the status of the response
			setStatus(response)
		} catch (error) {
			setStatus ({status: 500, message: 'sign up request failed, please try again', data:undefined})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(fireServerAction)} className="space-y-4">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email" value="email" className="text-xs text-gray-500" />
					</div>
					<TextInput

						{...register('profileEmail')}

						autoComplete='email'
						id="email"
						type="email"
						name={'profileEmail'}
						placeholder="johndoe@email.com"
						required
						aria-invalid={errors.profileEmail ? 'true' : 'false'}
					/>
					<DisplayError error={errors?.profileEmail?.message} />
				</div>

				<div>
					<div className="mb-2 block">
						<Label htmlFor="username" value="USER NAME" className="text-xs text-gray-500" />
					</div>
					<TextInput
						{...register('profileUsername')}
						autoComplete='username'
						id="username"
						type="text"
						name={'profileUsername'}
						placeholder="johndoe@email.com"
						required
						aria-invalid={errors.profileUsername ? 'true' : 'false'}
					/>
					<DisplayError error={errors?.profileUsername?.message} />
				</div>

				<div>
					<div className="mb-2 block">
						<Label htmlFor="profilePassword" value="password confirm" className="text-xs text-gray-500" />
					</div>
					<div className="relative">
						<TextInput
							{...register('profilePassword')}
							autoComplete='new-password'
							id="profilePassword"
							name="profilePassword"
							type={showPassword ? "text" : "password"}
							placeholder="••••••••••••••••"
							required
							aria-invalid={errors.profilePassword ? 'true' : 'false'}
						/>
						<DisplayError error={errors?.profilePassword?.message} />
						<button
							type="button"
							className="absolute inset-y-0 right-0 pr-3 flex items-center"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <HiEyeOff className="text-gray-500" /> : <HiEye className="text-gray-500" />}
						</button>
					</div>
					<div className="mb-2 block">
						<Label htmlFor="profilePasswordConfirm" value="confirm password" className="text-xs text-gray-500" />
					</div>
					<div className="relative">
						<TextInput
							{...register('profilePasswordConfirm')}
							autoComplete='new-password confirm'
							id="profilePasswordConfirm"
							type={showPassword ? "text" : "password"}
							name="profilePasswordConfirm"
							placeholder="••••••••••••••••"
							required
							aria-invalid={errors.profilePasswordConfirm ? 'true' : 'false'}
						/>
						<DisplayError error={errors?.profilePasswordConfirm?.message} />
						<button
							type="button"
							className="absolute inset-y-0 right-0 pr-3 flex items-center"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? <HiEyeOff className="text-gray-500" /> : <HiEye className="text-gray-500" />}
						</button>
					</div>
				</div>
				<Button type="submit" className="w-full bg-gray-800 hover:bg-gray-900">
					SIGN UP
				</Button>
				<Button type="reset" className="w-full bg-gray-800 hover:bg-gray-900">
					RESET
				</Button>
			</form>
			<DisplayStatus status={status} />
		</>
	)
}
