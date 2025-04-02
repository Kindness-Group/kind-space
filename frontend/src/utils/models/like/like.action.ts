'use server'

import {setHeaders} from "@/utils/set-headers.utils";
import {Like, LikeSchema} from "@/utils/models/like/like.model";
import {Status} from "@/utils/interfaces/Status";

export async function fetchLikesByLikeActId(likeActId: string) : Promise<Like[]> {
	const {data} = await fetch (`${process.env.PUBLIC_API_URL}/apis/like/likeActId/${likeActId}`, {
		method: "GET",
		headers: await setHeaders()
	}).then(response => {
		if(!response.ok) {
			throw new Error('Request Failed')
		}
		return response.json()
	})
	return LikeSchema.array().parse(data)
}

export async function postLike(like: Like) : Promise<Status> {
	const result = await fetch(
		`${process.env.PUBLIC_API_URL}/apis/like/toggle`,
		{
			method: 'POST',
			headers: await setHeaders(),
			body: JSON.stringify(like)
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

export async function fetchLikesByLikeProfileId(likeProfileId: string) : Promise<{[key:string]:Like}> {
	const {data} = await fetch (`${process.env.PUBLIC_API_URL}/apis/like/likeProfileId/${likeProfileId}`, {
		method: "GET",
		headers: await setHeaders()
	}).then(response => {
		if(!response.ok) {
			throw new Error('Request Failed')
		}
		return response.json()
	})
	LikeSchema.array().parse(data)

// using data convert like array to like object
	const likeObject: {[key:string]:Like} = data.reduce((accumulator: any, item: any) => {
		accumulator[item.likeActId]=item
		return accumulator

	}, {})

// return object

	return likeObject
}