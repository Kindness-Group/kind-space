"use client";

import React from 'react';

export default function KindnessFeedPage() {
    return <KindnessFeed/>;
}


import {Banner, Button, Card} from 'flowbite-react';
import { LuHeart, LuMessageSquare } from 'react-icons/lu';

interface KindnessPostProps {
    username: string;
    location: string;
    date: string;
    description: string;
}

const KindnessPost = ({ username, location, date, description }: KindnessPostProps) => {
    return (
        <Card className="mb-4">
            <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                    <p className="font-medium">{username}</p>
                    <p className="text-sm text-gray-500">{location} - {date}</p>
                </div>
            </div>
            <div className="bg-gray-200 p-4 mb-3">
                <p className="text-center">{description}</p>
            </div>
            <div className="flex">
                <Button color="white" className="mr-2 flex items-center">
                    <LuHeart className="mr-2" size={20} />
                    Like
                </Button>
                <Button color="white" className="flex items-center">
                    <LuMessageSquare className="mr-2" size={20} />
                    Comments
                </Button>
            </div>
        </Card>
    );
};

export function KindnessFeed() {
    // Sample data - in a real app, you would fetch this from an API
    const posts = [
        {
            username: "Username",
            location: "Location",
            date: "Date",
            description: "Kind act description goes here..."
        },
        {
            username: "Username",
            location: "Location",
            date: "Date",
            description: "Kind act description goes here..."
        },
        {
            username: "Username",
            location: "Location",
            date: "Date",
            description: "Kind act description goes here..."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <section id="banner" className="text-black m-16 flex items-center justify-center">
                    <img src="/heart-icon.png" className="w-12"/>
                    <h1 className="md:text-2xl text-xl text-center font-bold">Kindness Feed</h1>
                </section>
                <p className="text-xl">Spreading Kindness One Post at Time</p>
            </div>

            <div className="flex justify-center mb-8">
                <Button color={"light"} className="font-bold bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 group-hover:from-teal-400 group-hover:to-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Share New Kind Act</Button>
                {/*<Button color="dark" className="px-4">*/}
                {/*    Share New Kind Act*/}
                {/*</Button>*/}
            </div>

            <div className="max-w-2xl mx-auto">
                {posts.map((post, index) => (
                    <KindnessPost
                        key={index}
                        username={post.username}
                        location={post.location}
                        date={post.date}
                        description={post.description}
                    />
                ))}
            </div>
        </div>
    );
}
