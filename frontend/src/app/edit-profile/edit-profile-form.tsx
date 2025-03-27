'use client'
import {ProfileSchema, Profile} from "@/utils/models/profile/profile.model";
import React, {useState} from "react";
import { Status } from '@/utils/interfaces/Status'
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {fetchProfileByProfileId, putProfile} from "@/utils/models/profile/profile.action";
import {reset} from "next/dist/lib/picocolors";
import {Label, Textarea, TextInput} from "flowbite-react";
import {register} from "node:module";
import {DisplayError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";

export function EditProfileForm(props: {profile: Profile}) {
    const [status, setStatus] = useState<Status | null>(null)



    // get access to return values from react hook form and provide validation
    const {register, handleSubmit, reset, formState:{errors}} = useForm<Profile>({
        resolver: zodResolver(ProfileSchema),
        defaultValues: props.profile,
        mode: 'onBlur'
    })

    //register form fields with react hook form
    //create a place to display errors
    //create a place to display status

    //define what happens onSubmit
    const fireServerAction = async (data: Profile) => {
        try {
            //call to the fetchProfileByProfileId server action
            const response = await putProfile(data)
            if (response.status === 200) {
                //if status object returned from express is 200 resetForm
                reset()
            }
            //use setStatus to display status from express
            setStatus(response)
        } catch (error) {
            //if an error occurs let user know to try later
            setStatus({status: 500, message: 'Sign in request failed try again', data: undefined})
        }
    }
    // if an error occurs let user know to try later

    return (
        <>
            <form onSubmit={handleSubmit(fireServerAction)}>
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

                <div className="flex items-center">
                    <Label htmlFor="username" className="w-32 text-lg font-medium">Username:</Label>
                    <TextInput
                        autoComplete='username'
                        {...register('profileUsername')}
                        id="username"
                        name="profileUsername"
                        placeholder="Enter Username"
                        className="flex-1"
                        type="text"
                        aria-invalid={errors.profileUsername? 'true' : 'false'}
                    />
                    <DisplayError error={errors?.profileUsername?.message} />
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
            </form>
            <DisplayStatus status={status} />
        </>
    )

}