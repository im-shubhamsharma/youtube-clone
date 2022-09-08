import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "5ea85e5006msh4991aef8c6357f9p1954dajsn414615d81423",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}