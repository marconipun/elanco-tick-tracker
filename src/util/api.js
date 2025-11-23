//make the HTTP requests to the API
import axios from "axios";

const BASE = "https://dev-task.elancoapps.com/data/";

export async function getSightings() {
  try {
    //get request to tick-sighting 
    const res = await axios.get(BASE + "tick-sightings");

    //return the data array
    return res.data ?? [];
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
}
