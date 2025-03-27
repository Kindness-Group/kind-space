'use client'
import {Button} from "flowbite-react";
import React from "react";
import {Act, ActSchema} from "@/utils/models/act/act.model";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Status } from '@/utils/interfaces/Status'
import {postAct} from "@/utils/models/act/act.action";
import {DisplayError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";

export function ActForm(){
    const [status, setStatus] = useState<Status|null>(null)

    // define my default values
    const defaultValues : Act = {
        actId: '',
        actProfileId: '',
        actAddress: '',
        actContent: '',
        actDateTime: '',
        actImageUrl: '',
        actLat: '',
        actLng: '',
    }

    // get access to return vaules from react hook form and provide validation
    const {register, handleSubmit, reset, formState:{errors}} = useForm<Act>({
        resolver: zodResolver(ActSchema),
        defaultValues,
        mode:'onBlur'
    })

    // register form fields with react hook form
    // create a place to display errors
    // create a place to display status


    // define what happens onSubmit
    const fireServerAction = async (data: Act) => {
        try {
            // call to the postSignIn server action
            const response = await postAct(data)
            if (response.status === 200) {
                // if status object returned from express is 200 resetForm
                reset()
            }
            // use setStatus to display status from express
            setStatus(response)
        } catch (error) {
            // if an error occurs let user know to try later
            setStatus({status: 500, message: ' post act request failed try again', data:undefined})
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(fireServerAction)} className="flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="content" className="leading-loose">Post Content</label>
                    <textarea autoComplete='content'
                              {...register('actContent')}
                              id="content"
                              name="actContent"
                              aria-invalid={errors.actContent? 'true' : 'false'}
                              rows={4} className="w-full px-4 pt-2 pb-[14rem] sm:text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-900" placeholder="Write your content here..." required></textarea>
                    <DisplayError error={errors?.actContent?.message}></DisplayError>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="address" className="leading-loose">Post Location</label>
                    <input autoComplete='address'
                           {...register('actAddress')}
                        name="actAddress"
                           id="address"
                        type="text"
                           aria-invalid={errors.actAddress? 'true' : 'false'}
                           className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                           placeholder="Where did this happen?"/>
                    <DisplayError error={errors?.actAddress?.message}></DisplayError>
                </div>
                <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                        <a href="./kindactpost">
                            <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Add Media</Button>
                        </a>
                    </div>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                        <a href="./kindactpost">
                            <Button type="submit" color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Create Post</Button>
                        </a>
                    </div>
                </div>
            </form>
            <DisplayStatus status={status}></DisplayStatus>
        </>
    )
}