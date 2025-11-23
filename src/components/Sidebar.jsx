//sidebar takes sighting data , closing and navigation functions
const Sidebar = ({sighting, onClose,onNavClick}) => {

    //hide the side bar if there are no sightings
    if(!sighting) return null;

    //object properties to easy access 
    const { location, lat, lng, date, species, count, latestDate, color } = sighting;

  // Create Google Maps link 
  const googleMapsUrl = lat && lng
    ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    : "#";

    //what should be displayed in the sidebar
    return (
    <div className="sidebar">

      <h2>Tick Sighting Details</h2>
      <p><strong>Location:</strong> {sighting.location}</p>
      <p><strong>Sightings:</strong> {sighting.count}</p>
      <p><strong>Latest:</strong> {sighting.latestDate}</p>
      <p><strong>Species:</strong> {sighting.species ?? "Unknown"}</p> 
      <p><strong>Latin Name:</strong> {sighting.latinName ?? "Unknown"}</p>

      <hr />

      {/*Report button will take you to report form*/}
      <button 
            className="reportbutton" onClick={() => {

                if(onNavClick){

                //navigate to report page
                onNavClick("report");
                onClose();
                }
                
      }}
      >
            Report a Sighting
      </button>

    {/*Share button will get a copy of the location to be shared to clipboard*/}
      <button className="sharebutton" onClick={() => {
          navigator.clipboard.writeText(`Tick sighting in ${sighting.location}`);
          alert("Copied to clipboard!");
      }}>Share</button>


      
      <button className={`btn-${color || "grey"}`} onClick={() => window.open(googleMapsUrl, "_blank")}>Get Directions</button>
      <br /><br />
      <button className="closebutton" type="button" onClick={onClose}>Close</button>
    </div>
  );


    };

    export default Sidebar;