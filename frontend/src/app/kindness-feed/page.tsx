"use client";

import React from 'react';
import {Button} from "flowbite-react";
import {ActCard} from "@/app/layout-components/ActCard";
import {Banner} from "@/app/layout-components/Banner";


export type KindnessPostProps = {
    username: string,
    location: string,
    date: string,
    description: string,
    likes: number,
    comments: number,
    proImage: string,
    postImage: string | null,
}

export default function KindnessFeed() {
    // Sample data - in a real app, you would fetch this from an API
    const posts: Array<KindnessPostProps> = [
        {
            username: "Username",
            location: "Location",
            date: "Date",
            description: "Kind act description goes here...",
            likes: 5,
            comments: 0,
            proImage: "https://imageplaceholder.net/200",
            postImage: "https://imageplaceholder.net/800x400"
        },
        {
            username: "Username",
            location: "Location",
            date: "Date",
            description: "Kind act description goes here...",
            likes: 10,
            comments: 2,
            proImage: "https://imageplaceholder.net/200",
            postImage: "https://imageplaceholder.net/800x400"
        },
        {
            username: "Username",
            location: "Location",
            date: "Date",
            description: "Kind act description goes here...",
            likes: 2,
            comments: 0,
            proImage: "https://imageplaceholder.net/200",
            postImage: "https://imageplaceholder.net/800x400"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <Banner/>
                <p className="text-xl">Spreading Kindness One Post at Time</p>
            </div>

            <div className="flex justify-center mb-8">
                <Button color="dark" className="px-4">
                    "Share New Kind Act"
                </Button>
            </div>

            <div className="max-w-2xl mx-auto">
                {posts.map((post, index) => (
                    <ActCard kindPgProps={post} key={index} />
                ))}
            </div>
        </div>
    );
}
