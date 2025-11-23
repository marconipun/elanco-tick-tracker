import React from "react";

//Array for tick spiecies details
const speciesList = [
    {
        name : "Marsh tick",
        latin: "Ixodes ricinus",
        img: " /images/Ixodesricinus.jpg ",
        description: "Common in woodland and grassy areas, known to feed on mammals,birds, and occasionally humans.",

        
    },
    {
        name : "Southern rodent tick",
        latin: "Ixodes acuminatus",
        img: " /images/Ixodesacuminatus.jpg ",
        description: "Primaruily feed on small mammals like mice and voles, found in southern and rural habitats.",

    },
    {
        name: "Passerine tick",
        latin: "Ixodes arboricola",
        img: " /images/Ixodesarboricola.jpg ",
        description: "Tick associated with birds, found in tree canopies and nesting areas. Rarely bite humans.",
    },
    {
         name: "Tree-hole tick",
         latin: "Ixodes hexagonus",
         img: " /images/Ixodeshexagonus.jpg ",
         description: "Often found in urban areas, feeding on hedgehogs and other small mammals. Occasionally bites humans.",
    },
];

//Display speecies guide
const Education = () => {
    return (
        <div className="education">
            <h1>UK Tick Species Identification Guide</h1>
            <p className="education-subtitle">
                Learn about common tick species in the UK
            </p>

{/*Species grid*/}

            <div className="species-grid">
                {/*Generate individuall cards from speciesList array*/}
                {speciesList.map((tick, index) => (
                    //individual cards are having unique key to call the react components
                    <div key={index} className="species-card">
                        <img 
                            src={tick.img}
                            alt={tick.name}
                            className="speciesimg"
                        />

                        <h2>{tick.name}</h2>
                       <p className="latin-name">
                        {/*Using <i> to make teh name italic*/}
                            <i>{tick.latin}</i>
                        </p>

                        <p className="species-description">{tick.description}</p>
                    </div>
                ))}
                 </div>
        </div>
    );
};

export default Education;
