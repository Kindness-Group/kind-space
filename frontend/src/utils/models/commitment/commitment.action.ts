'use server'

import {setHeaders} from "@/utils/set-headers.utils";
import {Commitment, CommitmentSchema} from "@/utils/models/commitment/commitment.model";


export async function fetchCommitmentsByCommitmentSuggestionId(commitmentSuggestionId: string) : Promise<Commitment[]> {
	const {data} = await fetch (`${process.env.PUBLIC_API_URL}/apis/commitment/commitmentSuggestionId/${commitmentSuggestionId}`, {
		method: "GET",
		headers: await setHeaders()
	}).then(response => {
		if(!response.ok) {
			throw new Error('Request Failed')
		}
		return response.json()
	})
	return CommitmentSchema.array().parse(data)
}

export async function fetchCommitmentsByCommitmentProfileId(commitmentProfileId: string) : Promise<Commitment[]> {
	const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/commitment/commitmentProfileId/${commitmentProfileId}`, {
		method: "GET",
		headers: await setHeaders()
	}).then(response => {
		if(!response.ok) {
			throw new Error('Request Failed')
		}
		return response.json()
	})
	return CommitmentSchema.array().parse(data)
}