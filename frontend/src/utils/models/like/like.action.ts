'use server'

import {setHeaders} from "@/utils/set-headers.utils";
import {Like, LikeSchema} from "@/utils/models/like/like.model";

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