'use client'

import {Button} from "flowbite-react";
import {useState} from "react";
import {Status} from "@/utils/interfaces/Status";
import {postCommitment} from "@/utils/models/commitment/commitment.action";
import {Profile} from "@/utils/models/profile/profile.model";
import {DisplayStatus} from "@/components/display-status";
import {useRouter} from "next/navigation";

type Props = {
    suggestionId:string
    profile: Profile
}

export function CreateCommitment(props: Props) {
    const[status, setStatus] = useState<Status|null>(null)

    const {suggestionId, profile} = props;

    const router = useRouter();

    const fireServerAction = async () => {
        const commitment = {
            commitmentSuggestionId: suggestionId,
            commitmentProfileId: profile.profileId,
            commitmentCompleted: false,
            commitmentDateTime: null
        }
       try {
           const response = await postCommitment(commitment)
               setStatus(response)
           if (response.status === 200) {
               router.refresh()
           }
       }
       catch (error) {
            console.error(error);
            setStatus({status: 500, message: 'Add commitment to profile failed, please try again.', data: undefined});
       }
    }

    return (
        <>
            <div onClick={fireServerAction} className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                <Button color={"light"} className="font-bold bg-white group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Plan to do it!</Button>
            </div>

            <DisplayStatus status={status}/>
        </>
    )

}

