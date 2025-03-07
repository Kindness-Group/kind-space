"use client";

import React from 'react';
import {Button} from "flowbite-react";
import {ActCard} from "@/app/layout-components/ActCard";



export type Act = {
    actId: string,
    actProfileId: string,
    actContent: string,
    actDateTime: Date,
    actImageUrl: string,
    actLat: string,
    actLng: string,
    actAddress: string,
    actProfileUsername: string,
    actProfilePicUrl: string | null,
    actLikeLikes: number,
    actCommentComments: number,
}

export default function KindnessFeed() {
    // Sample data - in a real app, you would fetch this from an API
    const acts: Act[] = [
        {
            actId: '01956880-ef3d-7a51-8064-68da52150696',
            actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
            actContent: 'Placeholder act content',
            actDateTime: new Date(2025, 2, 5, 9, 0, 0),
            actImageUrl: 'https://placecats.com/neo_2/300/200',
            actLat: '-30.94784',
            actLng: '19.36249',
            actAddress: '2301 Zero St, Abq, NM',
            actProfileUsername: 'janedoe456',
            actProfilePicUrl: null,
            actLikeLikes: 5,
            actCommentComments: 3
        },

        {
            actId: '01956880-ef3d-7a51-8064-68da52150724',
            actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
            actContent: 'Placeholder content number 2',
            actDateTime: new Date(),
            actImageUrl: 'https://placecats.com/neo_banana/300/200',
            actLat: '-30.94794',
            actLng: '19.36949',
            actAddress: '2344 Blahblah St, Abq, NM',
            actProfileUsername: 'johndoe123',
            actProfilePicUrl: null,
            actLikeLikes: 8,
            actCommentComments: 4
        },
        {
            actId: '01956880-ef3d-7a51-8064-68da78150724',
            actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
            actContent: 'Placeholder content number 3',
            actDateTime: new Date(2025, 2, 4, 19, 0, 0),
            actImageUrl: 'https://placecats.com/bella/300/200',
            actLat: '-30.94714',
            actLng: '19.32949',
            actAddress: '1234 Example St, Abq, NM',
            actProfileUsername: 'janedoe456',
            actProfilePicUrl: null,
            actLikeLikes: 10,
            actCommentComments: 2
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <section id="banner" className="text-black mt-16 mb-4 flex items-center justify-center">
                    <img src="/heart-icon.png" className="w-12" alt="heart-icon" />
                    <h1 className="md:text-2xl text-xl text-center font-bold">Kindness Feed</h1>
                </section>
                <p className="text-xl">Spreading Kindness One Post at Time</p>
            </div>

            <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                    <a href="./kindactpost">
                    <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Share New Kind Act</Button>
                    </a>
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                {acts.map((post, index) => (
                    <ActCard act={post} key={index} />
                ))}
            </div>
        </div>
    );
}
