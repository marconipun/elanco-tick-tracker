import React,{useState} from "react";
import MapView from "./components/MapView";
import Navbar from "./components/NavBar";
import Education from "./components/Education";
import Prevention from "./components/Prevention";
import ReportForm from "./components/ReportForm";
import Sidebar from "./components/Sidebar";


function App() {
  //state to see which page is currently active and set the default to map
  const [activePage, setActivePage] = useState("map"); 
  //state to store selected sighting and when not selected just show nothing
  const [selectedSighting, setSelectedSighting] = useState(null); 

  return (
    <>
      {/* Navbar always visible */}
      <Navbar onNavClick={setActivePage} />

      {/* Main part*/}
      <div className="content">
        {/*render the map */}
        {activePage === "map" && (
          <MapView setSelectedSighting={setSelectedSighting} />
         )}
        {activePage === "education" && <Education />}
        {activePage === "prevention" && <Prevention />}
        {activePage === "report" && (
          //when u close , u will return to map
          <ReportForm onClose={() => setActivePage("map")} />
        )}
      
      </div>

      {/*Sidebar showing details sightings , based on selectedSighting*/}
         <Sidebar
        sighting={selectedSighting}
        onClose={() => setSelectedSighting(null)}
        //to open the report form from sidebar
        onNavClick={setActivePage}
      />

    </>
  );
}

export default App;