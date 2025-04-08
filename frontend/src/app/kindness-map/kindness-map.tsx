'use client'
import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl/mapbox';
import {Act} from "@/utils/models/act/act.model";
import {useState} from "react";

/**
 * KindnessMap - Renders a map displaying acts of kindness as markers
 *
 * This component uses react-map-gl to create an interactive map that displays
 * acts of kindness as heart-shaped markers. When a marker is clicked, a popup
 * appears showing details about the act including content, a link to the full post,
 * and an optional image.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Act[]} props.acts - Array of Act objects to display on the map
 * @param {string} [props.searchLocation] - Optional search location (unused currently)
 *
 * @returns {JSX.Element} Map with kindness act markers and optional popup
 *
 * @example
 * <KindnessMap acts={actsList} />
 */

// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';

/**
 * Props for the KindnessMap component
 * @typedef {Object} MapCardProps
 * @property {Act[]} acts - Array of Act objects to display on the map
 * @property {string} [searchLocation] - Optional search location string
 */

type MapCardProps = {
	acts: Act[];
	searchLocation?: string
}

export function KindnessMap(props: MapCardProps) {

	/**
	 * State for tracking the currently selected act
	 * When a marker is clicked, this is set to the corresponding Act
	 * When null, no popup is displayed
	 */

	const [selectedAct, setSelectedAct] = useState<Act | null>(null);
	const {acts} = props

	return (
		<>
			{/* Main map component from react-map-gl */}
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
				initialViewState={{
					longitude: -106.6500, // Default center longitude (Albuquerque)
					latitude: 35.0844,   // Default center latitude
					zoom: 14              // Default zoom level
				}}
				style={{width: "100vw", height: "80vh"}}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>{/* Render a heart marker for each act in the acts array */}
				{acts.map((act, index) => (
					<Marker
						key={act.actId}
						longitude={Number(act.actLng)}
						latitude={Number(act.actLat)}
						onClick={e => {
							// Prevent the click event from bubbling up to the map
							e.originalEvent.stopPropagation();
							setSelectedAct(act)
						}}
					>
						{/* Heart emoji as the marker icon */}
						<div style={{fontSize: "25px", cursor: "pointer"}}>❤️</div>
					</Marker>
				))}{/* Popup that appears when a marker is clicked */}
				{selectedAct && (
					<Popup longitude={Number(selectedAct.actLng)} latitude={Number(selectedAct.actLat)}
						   anchor="bottom"
						   onClose={() => setSelectedAct(null)} // Close the Popup
					>
						<div className="flex flex-col justify-between">
							{/* Display the act content */}
							{selectedAct.actContent}
							{/* Link to the detailed post page */}
							<a href={`../postdetails/${selectedAct.actId}`}>Click To See Post</a>
						</div>
						{/* Display the act image if available */}
						{selectedAct.actImageUrl && (<img width="75%" alt="kind image" src={selectedAct.actImageUrl}/>)}
					</Popup>
				)}
			</Map>
		</>
	);
}