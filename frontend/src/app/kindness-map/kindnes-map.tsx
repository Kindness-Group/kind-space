'use client'
import * as React from 'react';
import Map from 'react-map-gl/mapbox';
import {Act} from "@/app/kindness-feed/page"

// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';


type MapCardProps = {
    acts: Act;
    searchLocation?: string
}


export function KindnessMap(props: MapCardProps) {

    let {acts, searchLocation} = props;
	let {acts: {actLat, actLng, actAddress}} = props;


    return (
        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
                longitude: -106.6500,
                latitude:  35.0844,
                zoom: 14
            }}
            style={{width: "100vw", height: "80vh"}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    );

}