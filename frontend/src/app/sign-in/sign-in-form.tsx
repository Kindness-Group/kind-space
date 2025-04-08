'use client'
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Status} from '@/utils/interfaces/Status'
import {postSignIn} from "@/utils/models/sign-in/sign-in.action";
import {SignIn, SignInProfileSchema} from "@/utils/models/sign-in/sign-in.model";
import {DisplayError} from "@/components/display-error";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import {zodResolver} from "@hookform/resolvers/zod";
import {DisplayStatus} from "@/components/display-status";
import {useRouter} from "next/navigation";


/**
 * SignInForm Component
 *
 * A form component for user authentication that allows users to sign in with their email and password.
 *
 * Features:
 * - Email and password input fields with validation
 * - Password visibility toggle
 * - Form submission handling with server action
 * - Error display for form validation and server responses
 * - Automatic redirection to kindness-feed page on successful sign-in
 *
 * @component
 * @returns {JSX.Element} The rendered sign-in form
 */
export function SignInForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [status, setStatus] = useState<Status|null>(null)
	const router = useRouter();

	// define my default values
	const defaultValues: SignIn = {
		profileEmail: '',
		profilePassword: ''
	}

	// get access to return values from React hook form and provide validation
	const {register, handleSubmit, reset, formState: {errors}} = useForm<SignIn>({
		resolver: zodResolver(SignInProfileSchema),
		defaultValues,
		mode:'onBlur'
	})

	/**
	 * Submits the sign-in form data to the server
	 *
	 * This async function handles:
	 * - Submitting user credentials to the authentication endpoint
	 * - Processing the server response
	 * - Redirecting on successful sign-in
	 * - Resetting the form on success
	 * - Error handling with appropriate user feedback
	 *
	 * @param {SignIn} data - The sign-in form data containing profileEmail and profilePassword
	 * @returns {Promise<void>}
	 */
	const fireServerAction = async (data: SignIn) => {
		try {
			// send data to server with postSignIn function
			const response = await postSignIn(data)
			if (response.status === 200) {
				// if status object returned from express is 200 resetForm
				reset()
				router.push('/kindness-feed');
			}
			// use setStatus to display status from express
			setStatus(response)
		} catch (error) {
			// if an error occurs let user know to try later
			setStatus({status: 500, message: 'sign in request failed try again', data: undefined})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit(fireServerAction)} className="space-y-4">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email" value="EMAIL" className="text-xs text-gray-500" />
					</div>
					<TextInput
						autoComplete="email"
						{...register('profileEmail')}
						id="email"
						name="profileEmail"
						type="email"
						placeholder="Enter Email here"
						aria-invalid={errors.profileEmail? 'true' : 'false'}
						required
					/>
					<DisplayError error={errors?.profileEmail?.message} />
				</div>

				<div>
					<div className="mb-2 block">
						<Label htmlFor="password" value="PASSWORD" className="text-xs text-gray-500" />
					</div>
					<div className="relative">
						<TextInput
							autoComplete="current-password"
							{...register('profilePassword')}
							id="password"
							name="profilePassword"
							type={showPassword ? "text" : "password"}
							placeholder="••••••••••••••••"
							aria-invalid={errors.profilePassword? 'true' : 'false'}
							required
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
				</div>

				<Button type="submit" className="w-full bg-gray-800 hover:bg-gray-900">
					CONTINUE
				</Button>
			</form>
			<DisplayStatus status={status} />
		</>
	)
}
