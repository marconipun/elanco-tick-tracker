import { useState, useEffect } from "react";
import { getSightings } from "../util/api.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { coordinatesMap } from "../util/locations.js";


//leaflet fizx
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


//marker color picker depending on sighting colour
const getMarkerColor = (count, latestDate) => {
  // difference in days in milisecond
  const daysDiff = (new Date() - new Date(latestDate)) / (1000 * 60 * 60 * 24); 
  
 // Recent = gray
 if (daysDiff <= 7) return "grey";

 // Low = green
  if (count <= 57) return "green";
  // Med = orange     
  if (count <= 70) return "orange";
  // High = red   
  return "red"; 
};                       

const MapView = ({setSelectedSighting}) => {
  //store sightings in state grouped by locations
  const [sightings, setSightings] = useState({}); 

//useEffect hook to fetch from the api     
  useEffect(() => {
  //fetch and process sighting data
    async function fetchData() {
      const data = await getSightings();
  //temporary object to store sightings by location
      const tempMap = {}; 

      //process data one by one
      data.forEach(sighting => {

        //get coordinates objects per each from map
        const coordObj = coordinatesMap[sighting.location];
        if (!coordObj) return; // skip if location unknown

        //Extract coordinates
        const coords = [coordObj.latitude, coordObj.longitude];
        
        if (tempMap[sighting.location]) {
          tempMap[sighting.location].count++; 
          
         // Update latest sighting if this sighting is new
          if (new Date(sighting.date) > new Date(tempMap[sighting.location].latestSighting.date)) {
            tempMap[sighting.location].latestSighting = sighting; // store full latest sighting object
          }
        } else {
          //Create new entry for location
          tempMap[sighting.location] = {
            coords,
            count: 1,
            latestSighting: sighting, // store full object
          };
        }
      });

      setSightings(tempMap); // update
    }
//call the function
    fetchData();
  }, []); 

  return (
    <div className="map-wrapper">

        {/* Title */}
      <h2>Total sightings UK : {Object.keys(sightings).length}</h2>

      {/* Leaflet Map */}
      <MapContainer
        center={[54.5, -3]} // center of UK
        zoom={6}
        className="map-container" 
      >
        {/* Map tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Render markers for each location */}
        {Object.entries(sightings).map(([location, data], idx) => {
          const color = getMarkerColor(data.count, data.latestDate);

          return (
            <Marker
              key={idx}
              position={data.coords}
              icon={L.icon({
                iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${color}.png`,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
              })}

              //click marker to open sidebar
              eventHandlers={{
                    click: () => setSelectedSighting({
                        location,                               // location name
                        count: data.count,                      // total sightings at this location
                        latestDate: data.latestSighting.date,   // latest sighting date
                        species: data.latestSighting.species ?? "Unknown", // species info
                        latinName: data.latestSighting.latinName ?? "Unknown", // latin name info
                        lat: data.coords[0],                    // latitude
                        lng: data.coords[1],                    // longitude
                        color: getMarkerColor(data.count, data.latestSighting.date) // marker color for button
                    }),
                }}


            >
              {/*popup that appear when clicked*/}
              <Popup>
                <div>
                  <strong>Location:</strong> {location}<br/>
                  <strong>Sightings:</strong> {data.count}<br/>
                  <strong>Latest:</strong> {data.latestDate}<br/>
                  <strong>Species:</strong> {data.latestSighting.species ?? "Unknown"}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>


    </div>
  );
};

export default MapView;
