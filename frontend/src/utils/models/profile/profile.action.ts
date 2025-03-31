'use server'

import {Profile, ProfileSchema} from "@/utils/models/profile/profile.model";
import {Status} from "@/utils/interfaces/Status";
import {setHeaders} from "@/utils/set-headers.utils";

export async function fetchProfileByProfileId(profileId: string): Promise<Profile> {
    const {data} = await fetch (`${process.env.PUBLIC_API_URL}/apis/profile/${profileId}`,
        {
            method: "GET",
            headers: await setHeaders()
        }).then (response => {
            if(!response.ok) {
                throw new Error('Request failed')
            }
            return response.json()
    })
    return ProfileSchema.parse(data)
}

export async function putProfile(profile: Profile) : Promise<Status> {
    console.log(profile)
    return fetch (`${process.env.PUBLIC_API_URL}/apis/profile/${profile.profileId}`,
        {
            method: 'put',
            headers: await setHeaders(),
            body: JSON.stringify(profile)
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

