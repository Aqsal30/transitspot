import React, { useState, useRef, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents, } from "react-leaflet";


export default function MarkersMap() {
  
  function MyComponent() {
    const map = useMapEvents({
      click: () => {
        map.locate()
      },
      locationfound: (location) => {
        console.log('location found:', location)
        
      },
    })
    return null
  }
  return (
    <MapContainer
      center={[49.1951, 16.6068]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
      <button className="absolute w-[48px] h-[48px] top-[200px] left-[80px] flex items-center justify-center z-seribu rounded-lg bg-white">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className='w-[30px] h-[30px]'><path fill="#FF570A" fill-rule="evenodd" d="M11.291 21.706 12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"/></svg>
      </button>
    </MapContainer>
  );
}
