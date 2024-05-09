import axios from "axios";
import config from "./config";
const baseUrl = "https://youtube138.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Key": config.VITE_YT_X_RAPID_API_KEY,
  "X-RapidAPI-Host": config.VITE_YT_X_RAPID_API_HOST,
};

export const fetchDataFromAPI = async (endPoint) => {
  const { data } = await axios.get(`${baseUrl}/${endPoint}`, { headers });
  return data;
};
