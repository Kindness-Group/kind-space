import type { Metadata } from 'next'
import '../globals.css'
import {Navigation} from "@/app/(index)/Navigation";
import React from "react";
import {EditProfile} from "@/app/(index)/edit-profile/page";


export const metadata: Metadata = {
    title: 'Title Goes Here',
    description: 'description goes here',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
    return (
        <html  lang="en" suppressHydrationWarning>
        <body>
        <Navigation/>
        {children}

        </body>
        </html>
    )
}