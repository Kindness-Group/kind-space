'use server'

import { Act, ActSchema } from '@/utils/models/act/act.model'
import {Status} from "@/utils/interfaces/Status";
import {setHeaders} from "@/utils/set-headers.utils";


export async function fetchAllActs() : Promise<Act[]> {
    const {data} = await fetch(
        `${process.env.PUBLIC_API_URL}/apis/act/`,
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => {
        if( !response.ok ) {
            throw new Error('Network response failed')
        }
        return response.json()
    })
    return ActSchema.array().parse(data)
}

export async function postAct(act: Act) : Promise<Status> {
    const result = await fetch(
        `${process.env.PUBLIC_API_URL}/apis/act/`,
        {
            method: 'post',
            headers:await setHeaders(),
            body: JSON.stringify(act)
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

export async function fetchActByActId(actId: string): Promise<Act> {
    const headers = await setHeaders()
    const {data} = await fetch(`${process.env.REST_API_URL}/apis/act/${actId}`, {
        method: "GET",
        headers
    }).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return response.json()
    })
    return ActSchema.parse(data)
}

export async function fetchActsByActProfileId(actProfileId: string) : Promise<Act[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/act/actProfileId/${actProfileId}`, {
        method: 'GET',
        headers: await setHeaders()
    }).then(response => {
        if(!response.ok) {
            throw new Error('Request failed')
        }
        return response.json()
    })
    return ActSchema.array().parse(data)
}


export async function editAct(act: Act) : Promise<Status> {
    const result = await fetch(
        `${process.env.PUBLIC_API_URL}/apis/act/${act.actId}`,
        {
            method: 'PUT',
            headers:await setHeaders(),
            body: JSON.stringify(act)
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

export async function DeleteAct(actId: string) : Promise<Status> {
    const result = await fetch(`${process.env.PUBLIC_API_URL}/apis/act/${actId}`, {
        method: 'DELETE',
        headers: await setHeaders()
    }).then(response => {
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
