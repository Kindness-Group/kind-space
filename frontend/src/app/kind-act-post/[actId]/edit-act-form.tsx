'use client'
import {Button} from "flowbite-react";
import React, {act} from "react";
import {Act, ActSchema} from "@/utils/models/act/act.model";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Status } from '@/utils/interfaces/Status'
import {editAct, postAct} from "@/utils/models/act/act.action";
import {DisplayError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";
import {z} from "zod";
import {postImage} from "@/utils/models/image/image.action";
import {ImageUploadDropZone} from "@/components/image-upload-dropzone";
import {redirect, useRouter} from "next/navigation";

type Props = {act: Act};

export function EditActForm(props: Props ) {
    const {act: {actId, actProfileId, actAddress, actContent, actDateTime, actImageUrl, actLat, actLng}} = props;
    const [status, setStatus] = useState<Status|null>(null)
    const router = useRouter()


    // define my default values
    const defaultValues : Act = {
        actId: actId,
        actProfileId: actProfileId,
        actAddress: actAddress,
        actContent: actContent,
        actDateTime: actDateTime,
        actImageUrl: null,
        actLat: actLat,
        actLng: actLng
    }

    const actSchema = ActSchema.extend(
        {
            actImageUrl: z.preprocess((val) => (val === "" ? null : val), z.any().optional())
        }
    )

    type ActSchema = z.infer<typeof actSchema>


    // get access to return values from react hook form and provide validation
    const {register, handleSubmit, reset, control, setError, clearErrors, formState:{errors}} = useForm<ActSchema>({
        resolver: zodResolver(actSchema),
        defaultValues,
        mode:'onBlur'
    })

    console.log(errors)

    const [selectedImage, setSelectedImage] = React.useState<null | string>(null)
    // register form fields with react hook form
    // create a place to display errors
    // create a place to display status

    // define what happens onSubmit
    const fireServerAction = async (data: ActSchema) => {
        try {
            if(errors?.actImageUrl) {
                setStatus({status:500, message: 'Select a new image', data: undefined})
                return
            }
            console.log(data)
            let actImageUrl = null
            if(data.actImageUrl) {

                const response = await postImage(data.actImageUrl)
                if (response.status === 200) {
                    actImageUrl = response.message
                } else {
                    setStatus({status: 500, message: 'Image failed to upload', data: undefined})
                    return
                }
            }
            const finalResponse = await editAct({...data, actImageUrl});
            setStatus(finalResponse)
            if (finalResponse.status === 200) {
                setSelectedImage(null)
                router.refresh()
            }
        } catch (error) {
            setStatus({status:500, message: 'Internal Server Error, try again later', data: undefined})
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
                <ImageUploadDropZone control={control} fieldValue={'actImageUrl'} setSelectedImage={setSelectedImage} setError={setError} clearErrors={clearErrors} />
                <DisplayError error={errors?.actImageUrl?.message as any}/>
                {selectedImage ? (
                    <img src={selectedImage} alt='image to upload'/>
                ):(
                    actImageUrl && <img src={actImageUrl} alt='act image' />
                    )}
                <hr className="border-gray-300" />
                <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                        <Button type="submit" color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Save Changes</Button>
                    </div>
                </div>
            </form>
            <DisplayStatus status={status}></DisplayStatus>
        </>
    )
}