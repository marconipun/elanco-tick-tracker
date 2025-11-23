import React from "react";

// List of prevention tips
const preventionTips = [
   "Wear long sleeves and long trousers in grassy or wooded areas.",
  "Use tick repellents on skin and clothing.",
  "Check your body for ticks after spending time outdoors.",
  "Protect your pets with tick prevention treatments.",
  "Keep grass short and remove leaf litter around your home.",
  "Shower soon after coming indoors to wash off ticks.",
  "Avoid sitting directly on grass or leaf litter.",
  "Use tick collars or treatments for pets when outdoors.",
  "Check children and pets carefully before entering your home.",
  "Educate family members about tick prevention and safe removal."
];

//Displaying prevention component
const Prevention = () => {
  return (
    //same style used for preventions as education(species guide)
    <div className="education full-page">
      <h1>Prevention Tips</h1>
      
      <div className="species-grid">

        {/*Make individual tip cards*/}
        {preventionTips.map((tip, index) => (
          <div key={index} className="species-card">
            <p>{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prevention;
