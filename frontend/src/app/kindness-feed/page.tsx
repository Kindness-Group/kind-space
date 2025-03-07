"use client";

import React from 'react';
import {Button} from "flowbite-react";
import {ActCard} from "@/app/layout-components/ActCard";
import {Banner} from "@/app/layout-components/Banner";
import {Profile} from "@/app/viewprofile/page";


export type Act = {
    actId: string,
    actProfileId:string,
    actContent:string,
    actDateTime: string,
    actImageUrl:string,
    actLat: string,
    actLng: string,
    actAddress: string,
}

export default function KindnessFeed() {
    // Sample data - in a real app, you would fetch this from an API

    let profile: any = {
        profileId: '0195687b-bead-76eb-9385-0a2111533b1c',
        profileActivationToken: 'dnfiawhiuefbnwai',
        profileBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
        profileEmail: 'email@example.com',
        profileHash: 'asdfghjkl,mnbvfdrtyujnhbgvfcdsderftgyhujikjhgfdsfgthy',
        profileJoinDate: '03/03/2025',
        profileName: "James Bond",
        profilePictureUrl: 'https://placecats.com/millie/300/150',
        profileUsername: "jbond31",
    }

    const acts: Act[] = [
        {
            actId: '01956880-ef3d-7a51-8064-68da52150696',
            actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
            actContent: 'Placeholder act content',
            actDateTime: '03/03/2025',
            actImageUrl: 'https://placecats.com/neo_2/300/200',
            actLat: '-30.94784',
            actLng: '19.36249',
            actAddress: '2301 Zero St, Abq, NM',
            },

        {
            actId: '01956880-ef3d-7a51-8064-68da52150724',
            actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
            actContent: 'Placeholder content number 2',
            actDateTime: '03/05/2025',
            actImageUrl: 'https://placecats.com/neo_banana/300/200',
            actLat: '-30.94794',
            actLng: '19.36949',
            actAddress: '2344 Blahblah St, Abq, NM',
        },
        {
            actId: '01956880-ef3d-7a51-8064-68da78150724',
            actProfileId: '0195687b-bead-76eb-9385-0a2111533b1c',
            actContent: 'Placeholder content number 3',
            actDateTime: '03/04/2025',
            actImageUrl: 'https://placecats.com/bella/300/200',
            actLat: '-30.94714',
            actLng: '19.32949',
            actAddress: '1234 Example St, Abq, NM',
        }
    ];

    let likes = [
        {likeProfileId: 'placeholder',
        likeActId: 'placeholder',
        likeDateTime: 'placeholder',}
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
                <Banner/>
                <p className="text-xl">Spreading Kindness One Post at Time</p>
            </div>

            <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-br from-amber-400 via-purple-700 to-teal-400 p-0.5 rounded-xl" >
                    <Button color={"light"} className="font-bold bg-white  group-hover:from-teal-400 group-hover:to-purple-700 text-black focus:ring-4 focus:outline-none focus:ring-amber-500 hover:ring-amber-500 hover:ring-4">Share New Kind Act</Button>
                </div>

            </div>

            <div className="max-w-2xl mx-auto">
                {/*{acts.map((post, index) => (*/}
                {/*    <ActCard kindPgProps={post} key={index} />*/}
                {/*))}*/}
            </div>
        </div>
    );
}
