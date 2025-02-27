// src/ProfileCard.tsx

import React from 'react';

export function ProfileCard() {
	return (
		<div className="w-full md:w-[95%] min-h-screen mx-auto md:px-9 py-16 bg-white">
			{/* Header */}
			<header className="flex items-center justify-center space-x-2 mb-6">
				<span className="text-xl">❤️</span>
				<span className="text-lg font-medium">Hi [Name]!</span>
			</header>

			{/* Profile Section */}
			<section className="text-center mb-6 p-4">
				<img src="https://imageplaceholder.net/200" alt="profile picture" className="w-48 h-48 mx-auto"/>
				{/*<div className=" mx-auto bg-gray-300 rounded-full flex items-center justify-center text-gray-500">*/}
				{/*	Profile Picture*/}
				{/*</div>*/}
				<h2 className="mt-4 text-xl font-semibold">[Username]</h2>
				<p className="mt-2 text-sm text-gray-600">
					Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
				</p>
			</section>

			{/* Daily Act of Kindness Section */}
			<section className="relative flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg h-[45vh]">
				<div className="absolute inset-0 bg-cover bg-center w-full h-full bg-[url(https://imageplaceholder.net/400)]">
					<div className="absolute inset-0 bg-gradient-to-b from-white/85 to-white/40">
					</div>
				</div>
				<div className="relative z-10 flex flex-col items-center w-[90%]">
					<h3 className="text-lg font-semibold mb-4">Your Daily Act of Kindness</h3>
					<p className="text-sm text-gray-600 mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco.
					</p>
					<div className="flex space-x-8 mb-4">
						<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
							Remind Me
						</button>
						<button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
							Done!
						</button>
					</div>
				</div>
				<div className="relative mt-3.5">
					<p className="text-sm text-gray-600">
						❤️ You’ve Completed ### Daily Acts of Kindness!
					</p>
				</div>
			</section>
		</div>
		// <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-5">
		// 	<div className="p-5">
		// 		<h1 className="text-2xl font-bold text-gray-700">Hi [Name]!</h1>
		// 		<img
		// 			src="https://imageplaceholder.net/400"
		// 			alt="Profile Picture"
		// 			className="w-24 h-24 rounded-full mx-auto mt-4 border-2 border-gray-300"
		// 		/>
		// 		<h2 className="text-xl font-semibold text-gray-800 mt-2">[Username]</h2>
		// 		<p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
		// 		<h3 className="mt-4 text-lg font-semibold">Your Daily Act of Kindness</h3>
		// 		<p className="text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		// 		<div className="flex justify-between items-center mt-5">
		// 			<button className="bg-blue-500 text-white px-4 py-2 rounded">Remind Me</button>
		// 			<button className="bg-green-500 text-white px-4 py-2 rounded">Done</button>
		// 		</div>
		// 		{/* Add a completion notice */}
		// 		<p className="mt-4 text-sm text-gray-500">You've Completed ### Daily Acts of Kindness!</p>
		// 	</div>
		// </div>
	)
}

