'use server'

import {setHeaders} from "@/utils/set-headers.utils";
import {Commitment, CommitmentSchema} from "@/utils/models/commitment/commitment.model";
import {Status} from "@/utils/interfaces/Status";
import {ActSchema} from "@/utils/models/act/act.model";
import {Profile} from "@/utils/models/profile/profile.model";


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

export async function postCommitment(commitment: Commitment) : Promise<Status> {
	const result = await fetch(
		`${process.env.PUBLIC_API_URL}/apis/commitment/`,
		{
			method: 'POST',
			headers: await setHeaders(),
			body: JSON.stringify(commitment)
		}
	).then(response => {
		if( !response.ok ) {
			throw new Error('Network response failed')
		}
		return response.json()
	}).catch(error => {
		console.error(error)
		throw error
	})
	console.log(result)
	return result
}

export async function putCommitment(commitment: Commitment) : Promise<Status> {
	console.log(commitment)
	return fetch (`${process.env.PUBLIC_API_URL}/apis/commitment`,
		{
			method: 'put',
			headers: await setHeaders(),
			body: JSON.stringify(commitment)
		}).then(response => {
		if(!response.ok) {
			throw new Error('Request failed')
		}
		return response.json()
	}).catch(error => {
		console.error(error)
		throw error
	})
}











