'use client'


import React from "react";
import {z} from "zod";
import {Controller, UseFormClearErrors} from "react-hook-form";
import {Button, TextInput} from "flowbite-react";
import {useDropzone} from "react-dropzone";

type Props = {
    control: any,
    fieldValue: string,
    setSelectedImage: React.Dispatch<React.SetStateAction<any>>,
    setError: any,
    clearErrors: any
}

export function ImageUploadDropZone(props:Props) {
    const {fieldValue, setSelectedImage, control, setError, clearErrors} = props

    const MAX_FILE_SIZE = 2000000
    const ACCEPTED_IMAGE_TYPES = [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/webp',
        'image/svg+xml'
    ]

    const FileSchema = z
        .instanceof(File)
        .refine((file) => {
            return ACCEPTED_IMAGE_TYPES.includes(file.type)
        }, "Image is the wrong file type")
        .refine((file) => {
            return file.size <= MAX_FILE_SIZE
        }, "Image is too large")

    return(
        <Controller
            control={control}
            name = {fieldValue}
            render={({field: {onChange, value}}) => {
                const onDrop = React.useCallback((acceptedFiles: any) => {
                    clearErrors(fieldValue)
                    setSelectedImage(null)
                    const validationResult = FileSchema.safeParse(acceptedFiles[0])
                    if(!validationResult.success) {
                        console.log("File validation failed")
                        // set error in react-hook-form
                        setError(fieldValue, {type: 'manual', message: validationResult.error.issues[0]})

                    } else {
                        const formData = new FormData()
                        formData.append('image', acceptedFiles[0])

                        const fileReader = new FileReader()
                        fileReader.readAsDataURL(acceptedFiles[0])
                        fileReader.addEventListener("load", () => {
                            setSelectedImage(fileReader.result)
                        })

                        // set value in react-hook-form
                        onChange(formData)

                    }

                }, [setSelectedImage])
                const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

                return (

                    <div {...getRootProps()}>
                        <span>Click or Drag and Drop Image Below</span>
                        {/*<div className="mb-2 block">*/}
                        {/*    <label className="form-label" htmlFor="actImageUrl">Upload Image</label>*/}
                        {/*</div>*/}
                        <TextInput
                            {...getInputProps()}
                            aria-label="Image drag and drop area"
                            className="form-control-file"
                            accept="image/*"
                        />
                        {
                            isDragActive ?
                                <div className="inline-flex bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                                    <Button color={"light"}  className=" font-bold bg-white group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Drop Image Here</Button>
                                </div> :
                                <div className="inline-flex bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                                    <Button color={"light"}  className=" font-bold bg-white group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Upload Image</Button>
                                </div>
                        }
                    </div>
                )
            }

            }
        />

    )
}

type DisplayUploadErrorProps = {
    errors: { [key: string]: string },
    field: string

}
