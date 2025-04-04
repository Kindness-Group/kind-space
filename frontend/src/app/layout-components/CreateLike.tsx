'use client'

import React, {useState} from "react";
import {Status} from "@/utils/interfaces/Status";
import {postLike} from "@/utils/models/like/like.action";
import {useRouter} from "next/navigation";

type Props = {
    profileId: string,
    actId: string
}




export function CreateLike(props:Props) {
    let {profileId, actId} = props;
    const[status, setStatus] = useState<Status|null>(null)

    const router = useRouter();

    const fireServerAction = async () => {
        const like = {
            likeActId: actId,
            likeProfileId: profileId,
            likeDateTime: null
        }
        try {
            const response = await postLike(like)
            if (response.status === 200) {
                router.refresh()

            }
        }
        catch (error) {
            console.error(error);
            setStatus({status: 500, message: 'Add like failed, please try again.', data: undefined});
        }

    }

    return (
    <>
    <div onClick={fireServerAction} className="flex items-center">

        <span className="cursor-pointer uppercase font-bold text-sm text-gray-600 hover:underline">Love</span>
    </div>
        </>
    )
}

// {actImageUrl && (<img src={actImageUrl} alt="kind image" className="w-[95%] mx-auto"/>)}