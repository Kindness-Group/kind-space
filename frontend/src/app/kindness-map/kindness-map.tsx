'use client'
import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl/mapbox';
import {Act} from "@/utils/models/act/act.model";
import {useState} from "react";



// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';


type MapCardProps = {
	acts: Act[];
	searchLocation?: string
}


export function KindnessMap(props: MapCardProps) {
	const [selectedAct, setSelectedAct] = useState<Act|null>(null);
	const {acts} = props


	return (
		<>
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
				initialViewState={{
					longitude: -106.6500,
					latitude:  35.0844,
					zoom: 14
				}}
				style={{width: "100vw", height: "80vh"}}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				{acts.map((act, index) => (
					<Marker
						key={act.actId}
						longitude={Number(act.actLng)}
						latitude={Number(act.actLat)}
						onClick={e => {
							e.originalEvent.stopPropagation();
							setSelectedAct(act)
						}}
					>
						<div style={{fontSize: "25px", cursor: "pointer"}} >❤️</div>
					</Marker>
				))}
				{selectedAct && (
					<Popup longitude={Number(selectedAct.actLng)} latitude={Number(selectedAct.actLat)}
							 anchor="bottom"
							 onClose={() => setSelectedAct(null)} // Close the Popup
					>
						<div className="flex flex-col justify-between">
							{selectedAct.actContent}
							<a href={`../postdetails/${selectedAct.actId}`}>Click To See Post</a>
						</div>
						{selectedAct.actImageUrl && (<img width="60%" alt="kind image" src={selectedAct.actImageUrl}/>)}
					</Popup>
				)}
			</Map>
		</>
	);
}