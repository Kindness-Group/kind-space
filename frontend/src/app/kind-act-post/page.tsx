'use server'

import {Button, Card, Checkbox, Label} from "flowbite-react";
import React from "react";
import {ActForm} from "@/app/kind-act-post/act-form";
import {getSession} from "@/utils/auth.utils";

export default async function () {
	const session = await getSession()
	const actProfileId = session?.profile.profileId

	return (
		<>
			<section id="banner" className="text-black m-16 flex items-center justify-center">
				<img src="/heart-icon.png" className="w-12" alt="heart-icon" />
				<h1 className="md:text-2xl text-xl text-center font-bold">Share Your Most Recent Act of Kindness to our Kindness Feed</h1>
			</section>
			<Card className="max-w-sm sm:max-w-[28rem] md:max-w-[40rem] lg:max-w-screen-md mx-auto my-20">
				<div className="flex items-center justify-center space-x-5">
					<div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-gray-700 dark:ring-gray-100">
						<img src="https://loremflickr.com/g/200/200/girl" alt=""/>
					</div>
					<div className="block pl-2 font-bold text-xl self-center text-gray-700">
						<h2 className="leading-relaxed">Jane Doe</h2>
					</div>
				</div>
				{actProfileId &&

			<ActForm actProfileId={actProfileId}/>
				}
			</Card>
		</>
	)
}