'use-server'

import {SignUp} from './sign-up.model'
import { Status } from '@/utils/interfaces/Status'
import { cookies } from 'next/headers'

export async function postSignUp(signUp: SignUp): Promise<Status> {
    const response = await fetch(`${process.env.PUBLIC_API_URL}/apis/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUp)
    })

    const serverCookies = response.headers.getSetCookie()

    const cookieJar = await cookies()

    const parseCookie = (str: string): Record<string, string> =>
        str.split(';')
            .map(cookie => cookie.split('='))
            .filter(pair => pair.length === 2)
            .reduce((acc: Record<string, string>, [key, value]) => {
                acc[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim());
                return acc;
            }, {});

    if (serverCookies[0]) {
        const sessionCookie = parseCookie(serverCookies[0])
        cookieJar.set('connect.sid', sessionCookie['connect.sid'], {path: sessionCookie.path, sameSite: 'lax', httpOnly: true})
    }

return response.json().then((response) => {

    return response
}).catch((error) => {
    console.error(error)
    throw error
})
}



