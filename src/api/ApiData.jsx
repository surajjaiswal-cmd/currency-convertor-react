import axios from "axios";

let api = axios.create({
  baseURL: "https://api.exchangerate-api.com",
});

export const getPost = async () => {
  try {
    let res = await api.get(`/v4/latest/USD`);
    return res.status === 200 ? res.data : {};
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
