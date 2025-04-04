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

export function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [status, setStatus] = useState<Status|null>(null)

    const defaultValues : FormSchema = {
        profileEmail: '',
        profilePassword: '',
        profilePasswordConfirm: '',
        profileUsername: ''
    }

    const formSchema = SignUpProfileSchema.omit({profileId: true}).refine(data => data.profilePassword === data.profilePasswordConfirm, {
        message: 'passwords do not match'
    })

    type FormSchema = z.infer<typeof formSchema>

    const {register, handleSubmit, reset, formState:{errors}} = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues,
        mode: 'onBlur'
    });

    console.log(errors)

    const fireServerAction = async (data: FormSchema) => {
        try {
            const signUp = {...data, profileId: uuid()}
            //call to the postSignUp server action
            const response = await postSignUp(signUp)
            console.log(response)
            if (response.status === 200) {
                reset ()
            }
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
