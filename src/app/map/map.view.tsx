'use client'
import React, { useEffect, useRef } from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { MapContainer, TileLayer, useMap, useMapEvent } from 'react-leaflet'

const customCRS = L.CRS.Simple;


const IMG_WIDTH = 5319;
const IMG_HEIGHT = 3750;
const MAP_MIN_ZOOM = 2; 
const MAP_MAX_ZOOM = 4;
const TILE_SIZE = 512; 

// Component to handle fitting bounds and setting max bounds
function MapBoundsSetter() {
  const map = useMap();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current) {
      const southWestBounds = map.unproject([0, IMG_HEIGHT], map.getMaxZoom());
      const northEastBounds = map.unproject([IMG_WIDTH, 0], map.getMaxZoom());
      const finalBounds = new L.LatLngBounds(southWestBounds, northEastBounds);

      map.fitBounds(finalBounds);
      map.setMaxBounds(finalBounds);
      initializedRef.current = true;
    }
  }, [map]);

  return null;
}


function ZoomConstraintEnforcer({ minZoom, maxZoom }: { minZoom: number; maxZoom: number }) {
  const map = useMap();

  useMapEvent('zoomend', () => {
    const currentZoom = map.getZoom();
    // Force the zoom level to stay within the defined min/max range
    if (currentZoom < minZoom) {
      map.setZoom(minZoom);
    } else if (currentZoom > maxZoom) {
      map.setZoom(maxZoom);
    }
  });

  return null;
}

const MapView = () => {
        return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#330000' }}>
            <MapContainer
                center={[0, 0]}
                zoom={MAP_MIN_ZOOM}
                minZoom={MAP_MIN_ZOOM}
                maxZoom={MAP_MAX_ZOOM}
                crs={customCRS} 
                attributionControl={false}
                style={{ height: '100%', width: '100%' , backgroundColor: '#330000'}}
                scrollWheelZoom={true} 
                doubleClickZoom={true}
                dragging={true}
            >
                <TileLayer
                    url={`${process.env.NEXT_PUBLIC_TILE_LAYER_URL}/tiles/{z}/{x}/{y}.png`}
                    minZoom={MAP_MIN_ZOOM}
                    maxZoom={MAP_MAX_ZOOM}
                    tileSize={TILE_SIZE}
                    noWrap={true}
                    tms={false} 
                />
                <MapBoundsSetter />
                        <ZoomConstraintEnforcer minZoom={MAP_MIN_ZOOM} maxZoom={MAP_MAX_ZOOM} />
            </MapContainer>
        </div>
    )
}

export default MapView
