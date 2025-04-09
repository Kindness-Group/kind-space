'use client'
import { Status } from '@/utils/interfaces/Status'

import {Button, Checkbox, Dropdown, DropdownItem, Modal, ModalBody, ModalHeader} from "flowbite-react";
import {v7 as uuid} from "uuid";
import {Comment, CommentSchema} from "@/utils/models/comment/comment.model";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useRef, useState} from "react";
import {editComment, postComment} from "@/utils/models/comment/comment.action";
import {Label, Textarea} from "flowbite-react";
import {DisplayError} from "@/components/display-error";
import {DisplayStatus} from "@/components/display-status";
import {useRouter} from "next/navigation";

type Props = {comment:Comment};

/**
 * EditCommentForm Component
 *
 * This component provides a form to edit an existing comment.
 * It displays an edit button in a dropdown that opens a modal with the edit form.
 *
 * @param {Props} props - Component props containing the comment to edit
 * @returns {JSX.Element} - Rendered component
 */
export function EditCommentForm(props: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const {comment:{commentId, commentProfileId, commentContent, commentDateTime, commentActId}} = props;

	const router = useRouter();
	const[status, setStatus] = useState<Status|null>(null)
	const [openModal, setOpenModal] = useState(false);

	/**
	 * Default values for the comment form
	 * Populated with the current comment data
	 */
	const defaultValues:Comment = {
		commentId: commentId,
		commentActId: commentActId,
		commentProfileId: commentProfileId,
		commentContent: commentContent,
		commentDateTime: commentDateTime
	}

	/**
	 * Setup for React Hook Form with Zod validation
	 * Uses the CommentSchema for validation rules
	 */
	const {register, handleSubmit, reset, formState:{errors}} = useForm<Comment>({
		resolver: zodResolver(CommentSchema),
		defaultValues,
		mode:'onBlur'
	})

	/**
	 * Handles the form submission
	 * Sends the updated comment data to the server and manages response
	 *
	 * @param {Comment} data - The form data to submit
	 */
	const fireServerAction = async (data: Comment) => {
		try {
			const addComment = {data}
			const response = await editComment(addComment.data)
			if (response.status === 200) {
				reset()
				router.refresh()
			}
			setStatus(response)
		} catch (error) {
			setStatus({status:500, message:'edit comment failed, please try again',data:undefined})
		}
	}

	/**
	 * Closes the edit comment modal
	 */
	function onCloseModal() {
		setOpenModal(false)
	}

	return (
		<>
			<Dropdown label={""} inline>
				<DropdownItem>
			<a onClick={() => setOpenModal(true)} color="blue" className="text-justify">Edit Comment</a>
				</DropdownItem>
			</Dropdown>
			<Modal dismissible show={openModal} size="lg" onClose={onCloseModal}>
				<ModalHeader/>
				<ModalBody>
					<form onSubmit={handleSubmit(fireServerAction)} id="form" className="mt-8 bg-white p-4 rounded-lg shadow">
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
