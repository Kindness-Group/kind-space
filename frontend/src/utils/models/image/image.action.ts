'use server'

import {Act} from "@/app/kindness-feed/page";
import {Status} from "@/utils/interfaces/Status";
import {headers as incomingHeaders} from "next/dist/server/request/headers";
import {getSession} from "@/utils/auth.utils";


export async function postImage(image: FormData): Promise<Status> {
    const headers = new Headers()

    const session = await getSession()

    const authorization = session?.authorization
    if(authorization) {
        headers.append("authorization", authorization)
    }

    const incomingHeadersObject = await incomingHeaders()

    const cookie = incomingHeadersObject.get('cookie')
    if (cookie){
        headers.append('cookie', cookie)
    }
    return fetch(`${process.env["REST_API_URL"]}/apis/image`,{
        headers,
        body: image,
        method: "post"
    }).then(response => {
        if(!response.ok){
            throw new Error('network response not ok')
        }
        return response.json()
    })

}