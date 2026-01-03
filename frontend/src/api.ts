import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-management-app-gcbp.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
