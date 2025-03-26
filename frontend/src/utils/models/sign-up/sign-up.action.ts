'use-server'

import {SignUp} from './sign-up.model'
import { Status } from '@/utils/interfaces/Status'
import { setHeaders } from "@/utils/set-headers.utils"

export async function postSignUp(signUp: SignUp): Promise<Status> {
    console.log(signUp)
    return fetch (`${process.env.PUBLIC_API_URL}/apis/sign-up`,
        {
        method: 'POST',
        headers: await setHeaders(),
        body: JSON.stringify(signUp)
    }
    ).then(response => {
            if (!response.ok) {
                throw new Error('Network response failed')
            }
            return response.json()
        }).catch(error => {
    console.error(error)
    throw error
})
}