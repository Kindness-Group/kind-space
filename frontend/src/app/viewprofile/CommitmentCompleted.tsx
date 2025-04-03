'use client'

import React, {useState} from "react";
import {Status} from "@/utils/interfaces/Status";
import {putCommitment} from "@/utils/models/commitment/commitment.action";
import {Button} from "flowbite-react";
import {DisplayStatus} from "@/components/display-status";
import {Commitment} from "@/utils/models/commitment/commitment.model";
import {useRouter} from "next/navigation";

type Props = {
	commitment: Commitment
}

export function CommitmentCompleted(props: Props) {
	const[status, setStatus] = useState<Status|null>(null)
	const router = useRouter();

	const {commitment: {commitmentSuggestionId,commitmentProfileId, commitmentCompleted}} = props;

	const fireServerAction = async () => {
		const commitment = {
			commitmentSuggestionId,
			commitmentProfileId,
			commitmentCompleted: !commitmentCompleted,
			commitmentDateTime: null
		}
		try {
			const response = await putCommitment(commitment)
			if (response.status === 200) {
				router.refresh()
			}
			setStatus(response)
		}
		catch (error) {
			console.error(error);
			setStatus({status: 500, message: 'Failed to mark commitment as "completed", please try again.', data: undefined});
		}
	}

	return (
		<>
			<div onClick={fireServerAction} className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
				<Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">{commitmentCompleted ? "Done!" : "Need To Do"}</Button>
			</div>

			<DisplayStatus status={status}/>
		</>
	)

}