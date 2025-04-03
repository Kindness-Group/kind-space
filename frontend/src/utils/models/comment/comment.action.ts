'use server'

import {Comment, CommentSchema} from "@/utils/models/comment/comment.model";
import {Status} from "@/utils/interfaces/Status";
import {setHeaders} from "@/utils/set-headers.utils";
import {Act} from "@/utils/models/act/act.model";

export async function fetchCommentsByCommentActId(commentActId: string): Promise<Comment[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/commentActId/${commentActId}`, {
        method: 'GET',
        headers: await setHeaders()
    }).then(response => {
        if(!response.ok) {
            throw new Error('Request failed')
        }
        return response.json()
    })
    return CommentSchema.array().parse(data)
}

export async function postComment(comment: Comment) : Promise<Status> {
    const result = await fetch(
        `${process.env.PUBLIC_API_URL}/apis/comment/`,
        {
            method: 'post',
            headers:await setHeaders(),
            body: JSON.stringify(comment)
        }
    ).then(response => {
        if( !response.ok ) {
            throw new Error('Network response failed')
        }
        return response.json()
    }).catch(error => {
        console.error(error)
        // throw error
    })
    console.log(result)
    return result
}

export async function editComment(comment: Comment) : Promise<Status> {
    const result = await fetch(
        `${process.env.PUBLIC_API_URL}/apis/comment/${comment.commentId}`,
        {
            method: 'PUT',
            headers:await setHeaders(),
            body: JSON.stringify(comment)
        }
    ).then(response => {
        if( !response.ok ) {
            throw new Error('Network response failed')
        }
        return response.json()
    }).catch(error => {
        console.error(error)
        throw error
    })
    console.log(result)
    return result
}

export async function fetchCommentByCommentId(commentId: string): Promise<Comment> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/${commentId}`, {
        method: 'GET',
        headers: await setHeaders()
    }).then(response => {
        if(!response.ok) {
            throw new Error('Request failed')
        }
        return response.json()
    })
    return CommentSchema.parse(data)
}

export async function DeleteComment(commentId: string) : Promise<Status> {
    const result = await fetch(`${process.env.PUBLIC_API_URL}/apis/comment/${commentId}`, {
        method: 'DELETE',
        headers: await setHeaders()
    }).then(response => {
        if( !response.ok ) {
            throw new Error('Network response failed')
        }
        return response.json()
    }).catch(error => {
        console.error(error)
        throw error
    })
    console.log(result)
    return result
}
