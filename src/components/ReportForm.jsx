import React, { useState } from "react";

//created some data to dropdown menu 
const speciesList = [
  { name: "Marsh tick" },
  { name: "Southern rodent tick" },
  { name: "Passerine tick" },
  { name: "Tree-hole tick" },
];

//Report form to submit new sightings 
const ReportForm = ({ onClose }) => {


  //using state to store input values 
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [species, setSpecies] = useState("");

    //using state to store the output msg
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    //submit form handling function
    const handleSubmit = (e) => {
        e.preventDefault();


        //doing a presence check
    if (!date || !time || !location || !species) {
      setMessageType("error");
      setMessage("All fields are required!");
      return;
    }

    //Array containing locations values that will only take 
    const ukLocations = [
        "Birmingham",
        "Bristol",
        "Cardiff",
        "Edinburgh",
        "Glasgow",
        "Leeds",
        "Leicester",
        "Liverpool",
        "London",
        "Manchester",
        "Newcastle",
        "Nottingham",
        "Sheffield",
        "Southampton"
    ];
        //validate location 
        if (!ukLocations.includes(location)) {
                setMessageType("error");
                setMessage("Location must be a valid UK city!");
                return;
    }

    //Passing any validations will display this 
    setMessageType("success");
    setMessage("Sighting reported successfully!");
    console.log({ date, time, location, species });

    //reset back
    setDate("");
    setTime("");
    setLocation("");
    setSpecies("");
  };

//form structures
  return (
    <div className="form">
        <h2>Report a Sighting</h2>


        <form onSubmit={handleSubmit}>

            <label>Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

            
            <label>Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)}/>

            
            <label>Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>

            
           <label>Species</label>
            <select
                value={species} //calling dropdown menu from array
                onChange={(e) => setSpecies(e.target.value)}
            >
                <option value="">Select species</option>
                    {speciesList.map((tick) => (
                        <option key={tick.name} value={tick.name}>
                                {tick.name}
                        </option>
                    ))}
            </select>



            <button className="submit">Submit</button>
            <button className="close" onClick={onClose}>Close</button>


        </form>
{/*If a message is there display the message */}
    {message && <p className={messageType}>{message}</p>}

    </div>
  );
};

export default ReportForm;