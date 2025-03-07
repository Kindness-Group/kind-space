import type { Metadata } from 'next'
import './globals.css'
import {Navigation} from "@/app/layout-components/Navigation";
import React from "react";
import {Footer} from "flowbite-react";
import 'mapbox-gl/dist/mapbox-gl.css';



export const metadata: Metadata = {
    title: 'Kind Space',
    description: 'Kind-Space is a social media platform designed to inspire and amplify kindness by allowing users to share, witness, and engage in acts of kindness. Through the Kindness Feed, users can post details of random acts of kindness they’ve experienced or observed, tagging locations to create a dynamic, interactive map. Each act is marked with a heart, growing in visibility as kindness spreads in different areas. Additionally, Kind-Space offers daily kindness suggestions to encourage users to participate in making the world a better place. By fostering a culture of positivity and connection, Kind-Space transforms everyday moments into a collective movement of compassion.',
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
        <div className="bg-gray-900 text-white p-6 text-center">
            <p>placeholder footer</p>
        </div>
        </body>
        </html>
    )
}