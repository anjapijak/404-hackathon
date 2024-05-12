import Map, {Marker, GeolocateControl} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import './../components-css/Earth.css';
import { useState } from "react";

import Journal from "./Journal";
function Earth({visited_lat, visited_long}) {
 

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100vh',
    latitude: 40.7128,
    longitude:  -74.0060,
    zoom: 3.5
  });

  

  const handleMouseMove = (event) => {
    const lngLat = event.lngLat;
    console.log(lngLat)
    setViewport(
      {
        width: '100%',
        height: '100vh',
        latitude : lngLat.lat,
        longitude: lngLat.lng,
        zoom: 3.5
      }
    )   // longitude, latitude geographical position of the event
    console.log( viewport); // Log the point and lngLat to the console or use them as needed
  };

  const [markerClicked, setMarkerClicked] = useState(false);

  {console.log(viewport.longitude + " " +viewport.latitude)}
  return (

    
    <Map  style={{ width: "100%", height: "100vh" }}
    mapboxAccessToken="pk.eyJ1IjoiamFua283MjYyIiwiYSI6ImNsdzEzMTg1YTA2cnkyanBoeW9xaTRpZ3QifQ.7vbQ1Xgo0cBUlpxFx8LveQ"
    initialViewState={{
      longitude: 13.7304781,
      latitude: 45.5479864,
      zoom: 3.5,
    }}
    mapStyle="mapbox://styles/mapbox/satellite-streets-v12" //mapbox://styles/mapbox/satellite-streets-v12 //mapbox://styles/mapbox/streets-v11
    
    onDblClick={handleMouseMove}
    
    
  >
      
    <Marker longitude={viewport.longitude} latitude={viewport.latitude} anchor="bottom" >
      <img style={{ width: '4.5vw', height: '4.5vw', boxShadow: '2vw 2vw 2vw rgba(0, 0, 0, 0.4)'}} src="./pin.png"/>
      </Marker>


      {visited_lat.map((lat, index) => (
        <Marker key={index} longitude={visited_long[index]} latitude={lat} onClick={()=>setMarkerClicked(!markerClicked)}>
          <img
            src="./journal.png"
            alt={`Marker ${index}`}
            style={{ width: '4.5vw', height: '4.5vw', transform: 'translate(-50%, -50%)' }}
          />
          
        </Marker>
      ))}

      <div style={{ position: 'absolute', top: 0, left: 0, width: '40%', zIndex: 1, marginLeft: "25%" }}>
          {markerClicked && <Journal />}

        </div>
     

    {/* <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
      /> */}
  </Map>
);
}

export default Earth;
