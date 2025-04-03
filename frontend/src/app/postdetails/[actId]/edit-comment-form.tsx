'use client'
import { Status } from '@/utils/interfaces/Status'

import { Button, Checkbox, Modal, ModalBody, ModalHeader} from "flowbite-react";
import {v7 as uuid} from "uuid";
import {Comment, CommentSchema} from "@/utils/models/comment/comment.model";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {editComment, postComment} from "@/utils/models/comment/comment.action";
import {Label, Textarea} from "flowbite-react";
import {DisplayError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";
import {useRouter} from "next/navigation";

type Props = {comment:Comment};

export function EditCommentForm(props: Props) {
	const {comment:{commentId, commentProfileId, commentContent, commentDateTime, commentActId}} = props;

	const router = useRouter();
	const[status, setStatus] = useState<Status|null>(null)
	const [openModal, setOpenModal] = useState(true);

	const defaultValues:Comment = {
		commentId: commentId,
		commentActId: commentActId,
		commentProfileId: commentProfileId,
		commentContent: '',
		commentDateTime: commentDateTime
	}

	// get access to return values from React hook form and provide validation
	const {register, handleSubmit, reset, formState:{errors}} = useForm<Comment>({
		resolver: zodResolver(CommentSchema),
		defaultValues,
		mode:'onBlur'
	})

	// define what happens onSubmit
	const fireServerAction = async (data: Comment) => {
		try {
			const addComment = {data}
			const response=await editComment(data)
			if (response.status === 200) {
				reset()
				router.refresh()
			}
			setStatus(response)
		} catch (error) {
			setStatus({status:500, message:'edit comment failed, please try again',data:undefined})
		}
	}

	function onCloseModal() {
		setOpenModal(false)
	}

	return (
		<>
			<Button onClick={() => setOpenModal(true)}>Edit Comment</Button>
			<Modal show={openModal} size="lg" onClose={onCloseModal} popup>
				<ModalHeader/>
				<ModalBody>
					<form onSubmit={handleSubmit(fireServerAction)} className="mt-8 bg-white p-4 rounded-lg shadow">
						<h3 className="text-lg font-semibold mb-4">Edit Comment</h3>
						<div className="mb-4">
							<Label htmlFor="comment" className="block text-gray-700 font-medium mb-2">Comment</Label>
							<Textarea
								{...register('commentContent')}
								id="comment"
								name={'commentContent'}
								rows={4}
								className="w-full px-3 py-2 sm:text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-900"
								placeholder="Write your comment here..."
								required
								aria-invalid={errors.commentContent ? 'true' : 'false'}

							></Textarea>
							<DisplayError error={errors?.commentContent?.message}></DisplayError>
						</div>
						<button type="submit"
								  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
							Update Comment
						</button>
					</form>
					<DisplayStatus status={status}/>
				</ModalBody>
			</Modal>
		</>
	)
}
