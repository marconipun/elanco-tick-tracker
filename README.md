# Elanco Tick Tracker - Minimum Viable Product

## Overview
This is a **Simple, interactive web app** that help track tick sightings across the UK.
Users can **explore*, **report sightings**, **share**, and **Get educated about tick species and prevention tips**
in one platform to help pets and pet owners safe.

The project is built as a part of the **Elanco Software Engineering Placement Program** to offer a user-friendly tool for tracking tick activity and informing users about diseases carried by ticks, such as Lyme disease.

**LIVE DATA API**: [Elanco Dev Task API](https://dev-task.elancoapps.com/)

---

## Features in the app 

### 1. Interactive Map Visualisation
- Dynamic map showing tick sightings across the UK.
- Clickable markers with details on species, severity, and recent activity.

### 2. Sighting Information
- Sidebar pop out with full details of the clicked marker.
- Quick action buttons: **Report a Sighting**, **Share**, **Get direction**, button colour for Get direction will change for severity.

### 3. Education Content
- Navigation Bar tab with Species Identification guide for ticks in UK.
-Prevention tips to reduce the tick sightings.

### 4. Report a sighting
- Form to report sightings:  date, time, location, species
- Simple validations with successfull error messages indicated to the User.

---

## Tech Stack that has been used
- **React**: the main framework I used to build the whole front end components and the structure.
- **React Leaflet**: I used for interactive map displaying UK and display tick sightings with markers.
- **React Hooks(useState, useEffect)**: Used for managing data and to call the API.
- **Javascript**: core language used for logic and functionalities throughout the project.
- **Axios**: I used this library to call API and fetch tick-sighting data.
- **CSS**: Used for sytling and creating responsive good looking UI design to user.

---

## Instructions about how to run the Program
1. Clone the repository to get the code
```bash
https://github.com/marconipun/elanco-tick-tracker.git
```

2. Enter to the Project using a IDE like VScode and use terminal to go to the directory
```cmd
cd elanco-tick-tracker
```

3. Install all required packages (Dependencies)
```cmd
npm install
```

4. Start the developer server to run the app
```cmd
npm run dev
```

5. Open your browser
- Your terminal will show a message like this: `Local: http://localhost:5173/`
- **Copy that URL** and paste it into your browser
- Or simply visit: `http://localhost:5173`

## Project Structure
```text
src/
├─ components/
│   ├── MapView.jsx
│   ├── Sidebar.jsx
│   ├── ReportForm.jsx
│   ├── Education.jsx
│   ├── Prevention.jsx
│   └── Navbar.jsx
├── util/
│   ├── api.js
│   └── locations.js
├── App.jsx
├── main.jsx
└── index.css
```

### Known Issues
- The grey markers for recent sightings and white markers for older sightings are not showing as expected.
- If someone use a phone the map can be bit cramped. Though is works best on a laptop/desktop for now.
- When the user submit a report about a sighting it will store in local storage browser (console) rather going to a real database.So data is temporarily stored.
- Sidebar might overlap with contents that are viewing on small screens.


## Context
- I built this as the **Technical task for Elanco-** frontend task
- All the core functionalities are implemented, with some extra polish that I thought would make it more useful. 
- There's always room to make it even better, but it's fully functional and ready to go.

---
## ProjectDemo Video
- Click the link to see 
**Project Demo**: [Elanco Frontend task Project Demo](https://youtu.be/MCufsKLaEwo)


---

- 💻 **Author** - Ratugamage Marco Nipun Fernando
- 📧 **Contact** - marconipunofficial04@gmail.com










