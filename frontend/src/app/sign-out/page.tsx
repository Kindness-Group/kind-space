'use client'

import Link from "next/link";
import {DisplayStatus} from "@/components/display-status";
import {Status} from '@/utils/interfaces/Status'
import {useState} from "react";
import {fetchEndSession} from "@/utils/models/sign-out/sign-out.action";
import {clearSession} from "@/utils/auth.utils";

export default function() {
	const [status, setStatus] = useState<Status|null>(null)

	// define what happens onLoad
	const fireServerAction = async () => {
		try {
			// call to the postSignIn server action
			const response = await fetchEndSession()
			if (response.status === 200) {
				await clearSession()
			}
			// use setStatus to display status from express
			setStatus(response)
		} catch (error) {
			// if an error occurs let user know to try later
			setStatus({status: 500, message: 'sign out request failed try again', data: undefined})
		}
	}

	return (
		<div onLoad={fireServerAction} className="flex flex-col min-h-screen">
			{/* Main Content */}
			<div className="flex-grow flex justify-center items-center p-6">
				<div className="flex w-full max-w-6xl bg-white rounded-lg overflow-hidden shadow-lg">
					{/* Say goodbye section */}
					<div className="w-1/2 p-8 flex flex-col">
						<div className="flex items-center gap-2 mb-6">
							<div className="bg-gray-100 p-2 rounded">
								<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
								</svg>
							</div>
							<h2 className="text-xl font-semibold">Kind Space</h2>
						</div>

						<p className="text-gray-500 text-sm mt-6">Come Back Soon 👋</p>
						<h3 className="text-2xl font-semibold text-gray-800 mb-6">We will miss you, be sure to check back soon.</h3>
						{/* Sign-Out Successful message */}
						<DisplayStatus status={status} />
						<p className="text-center text-gray-500 text-sm mt-6">
							Are you a going to be Kind Today? <Link href="/sign-up" className="font-bold text-gray-800">GET STARTED - IT'S FREE</Link>
						</p>
					</div>

					{/* Image Section */}
					<div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
						<div className="w-full h-full">
							<img src="/helping-hands.png" alt="helping-hands"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

