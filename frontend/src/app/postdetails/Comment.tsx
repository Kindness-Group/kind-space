import {Content} from '@/app/postdetails/page'

type Prop = {
	content: Content
}

export function Comment (prop: Prop) {
	let {content: {name, message, date}} = prop
	return (
		<>
			<div className="bg-white p-4 rounded-lg shadow">
				<div className="flex items-center mb-2">
					<img src="https://imageplaceholder.net/200" alt="User Avatar"
						  className="w-10 h-10 rounded-full mr-3"/>
					<div>
						<h3 className="font-semibold">{name}</h3>
						<p className="text-sm text-gray-500">{`Posted on ${date.toDateString()}`}</p>
					</div>
				</div>
				<p className="text-gray-700">{message}</p>
			</div>
		</>
	)
}