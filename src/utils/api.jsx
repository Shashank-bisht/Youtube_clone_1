import axios from "axios";
const apikey = import.meta.env.VITE_REACT_APP_API_KEY
// whole code coming from documentation
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': apikey,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};
