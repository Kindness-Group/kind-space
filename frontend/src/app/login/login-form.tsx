'use client'
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";


export function SignInForm() {
	const [status, setStatus] = useState<Status|null>(null)

	// define my default values
	const defaultValues : SignIn = {
		profileEmail: '',
		profilePassword: ''
	}

	// get access to return vaules from react hook form and provide validation
	const {register, handleSubmit, reset, formState:{errors}} = useForm<SignIn>({
		resolver: zodResolver(SignInProfileSchema),
		defaultValues,
		mode:'onBlur'
	})

	// define what happens onSubmit
	const fireServerAction = async (data: SignIn) => {
		try {
			// call to the postSignIn server action
			const response = await postSignIn(data)
			if (response.status === 200) {
				// if status object returned from express is 200 resetForm
				reset()
			}
			// use setStatus to display status from express
			setStatus(response)
		} catch (error) {
			// if an error occurs let user know to try later
			setStatus({status: 500, message: 'sign in request failed try again', data:undefined})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email" value="EMAIL" className="text-xs text-gray-500" />
					</div>
					<TextInput
						id="email"
						type="email"
						placeholder="johndoe@email.com"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<div className="mb-2 block">
						<Label htmlFor="password" value="PASSWORD" className="text-xs text-gray-500" />
					</div>
					<div className="relative">
						<TextInput
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="••••••••••••••••"
							value={formData.password}
							onChange={handleChange}
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
