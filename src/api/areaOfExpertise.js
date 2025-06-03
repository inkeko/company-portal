// src/api/areaOfExpertise.js
import api from "./axios";

// lang pl. 'hu', 'en', stb.
export async function fetchAreasOfExpertise(lang = "en") {
  const response = await api.get("/api/area-of-expertise", {
    params: { lang }
  });
  return response.data; // ez egy tömb lesz
}
