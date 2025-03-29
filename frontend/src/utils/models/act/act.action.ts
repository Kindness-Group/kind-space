'use server'

import { Act, ActSchema } from '@/utils/models/act/act.model'
import {Status} from "@/utils/interfaces/Status";
import {error} from "next/dist/build/output/log";
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