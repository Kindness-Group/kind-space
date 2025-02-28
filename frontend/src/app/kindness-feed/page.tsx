"use client";

import React from 'react';

export default function KindnessFeedPage() {
    return <KindnessFeed/>;
}


import { Button, Card } from 'flowbite-react';
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
            <div className="flex justify-between items-center mb-4">
                <div className="w-8 h-8">
                    <LuHeart size={32} />
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="hover:underline">Home</a>
                    <span>|</span>
                    <a href="#" className="hover:underline">Kindness Feed</a>
                    <span>|</span>
                    <a href="#" className="hover:underline">Map</a>
                    <span>|</span>
                    <a href="#" className="hover:underline">Daily Suggestions</a>
                </div>
                <a href="#" className="hover:underline">Login/Sign-Up</a>
            </div>

            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">"Kindness Feed"</h1>
                <p className="text-xl">"Spreading Kindness One Post at Time"</p>
            </div>

            <div className="flex justify-center mb-8">
                <Button color="dark" className="px-4">
                    "Share New Kind Act"
                </Button>
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
