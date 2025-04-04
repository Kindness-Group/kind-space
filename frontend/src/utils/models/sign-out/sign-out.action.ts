'use server'
import {Status} from "@/utils/interfaces/Status"
import {setHeaders} from "@/utils/set-headers.utils";

export async function fetchEndSession(): Promise<Status> {
	return fetch(`${process.env.PUBLIC_API_URL}/apis/sign-out`,
		{
			method: 'GET',
			headers: await setHeaders()
		}).then(response => {
			if (!response.ok) {
				throw new Error('Request failed')
			}
			return response.json()
	}).catch(error => {
		console.error(error)
		throw error
	})
}