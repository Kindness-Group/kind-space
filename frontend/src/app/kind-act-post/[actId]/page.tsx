'use server'

import {Card} from "flowbite-react";
import React from "react";
import {getSession} from "@/utils/auth.utils";
import {EditActForm} from "@/app/kind-act-post/[actId]/edit-act-form";
import {Act} from "@/utils/models/act/act.model";
import {fetchActByActId} from "@/utils/models/act/act.action";
import {PageProps} from "@/utils/interfaces/NextComponent";



export default async function (props: PageProps<{actId:string}>) {
    const params = await props.params
    const actId = params.actId
    const session = await getSession()
    const profile = session?.profile
    const actProfileId = profile?.profileId
    const act = await fetchActByActId(actId)

    return (
        <>
            <section id="banner" className="text-black m-16 flex items-center justify-center">
                <img src="/heart-icon.png" className="w-12" alt="heart-icon" />
                <h1 className="md:text-2xl text-xl text-center font-bold">Edit Your Act of Kindness</h1>
            </section>
            <Card className="max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md mx-auto my-20">
                <div className="flex items-center justify-center space-x-5">
                    <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-gray-700 dark:ring-gray-100">
                        <img src={profile?.profilePictureUrl ?? "/blank_profile.jpg"} alt="profile pic"/>
                    </div>
                    <div className="block pl-2 font-bold text-xl self-center text-gray-700">
                        <h2 className="leading-relaxed">{profile?.profileUsername}</h2>
                    </div>
                </div>
                {actProfileId && <EditActForm act={act}/>}
            </Card>
        </>
    )
}