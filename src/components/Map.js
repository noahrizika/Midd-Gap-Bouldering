import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '60vw',
  height: '90vh',
};
const entrance = {
  lat: 43.9365, // latitude
  lng: -72.9493, // longitude
};
const roadsideBoulders = {
    lat: 43.9368, // latitude
    lng: -72.9496, // longitude
  };
const hpBoulders = {
    lat: 43.9369, // latitude
    lng: -72.9483, // longitude
  };

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'PASTE KEY HERE',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
        <div className="map">
            <div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={18}
                    center={entrance}
                >
                    {/* Midd Gap Entrance */}
                    <Marker
                    position={entrance}
                    icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
            />
                    {/* Boulder Area 1 - Roadside Boulders */}
                    <Marker
                    position={roadsideBoulders}
                    icon={"http://maps.google.com/mapfiles/ms/icons/purple-dot.png"}
            />
                    {/* Boulder Area 2 - Harry Potter Boulders */}
                    <Marker
                    position={hpBoulders}
                    icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            />
                </GoogleMap>
            </div>
        </div>
  );
};

export default Map;