import React from "react";
import { Map as PigeonMap, Marker } from "pigeon-maps";

import { osm } from "pigeon-maps/providers";
export default function Map({ latitude, longitude, city, street }) {
	if (!latitude || !longitude)
		return (
			<div>
				<h4>Unable to display map</h4>
			</div>
		);

	return (
		<div className="map">
			<PigeonMap
				height={200}
				width={200}
				defaultCenter={[latitude, longitude]}
				defaultZoom={11}>
				<Marker
					width={50}
					anchor={[latitude, longitude]}
				/>
			</PigeonMap>
		</div>
	);
}
