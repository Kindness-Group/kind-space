'use client'
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Status} from '@/utils/interfaces/Status'
import {postLogIn} from "@/utils/models/log-in/log-in.action";
import {LogIn, LogInProfileSchema} from "@/utils/models/log-in/log-in.model";
import {DisplayError} from "@/components/display-error";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import {zodResolver} from "@hookform/resolvers/zod";


export function LogInForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [status, setStatus] = useState<Status|null>(null)

	// define my default values
	const defaultValues: LogIn = {
		profileEmail: '',
		profilePassword: ''
	}

	// get access to return values from React hook form and provide validation
	const {register, handleSubmit, reset, formState: {errors}} = useForm<LogIn>({
		resolver: zodResolver(LogInProfileSchema),
		defaultValues,
		mode:'onBlur'
	})

	// define what happens onSubmit
	const fireServerAction = async (data: LogIn) => {
		try {
			// call to the postSignIn server action
			const response = await postLogIn(data)
			if (response.status === 200) {
				// if status object returned from express is 200 resetForm
				reset()
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
							type="password"
							placeholder="••••••••••••••••"
							aria-invalid={errors.profilePassword? 'true' : 'false'}
							required
						/>
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
		</>
	)
}
