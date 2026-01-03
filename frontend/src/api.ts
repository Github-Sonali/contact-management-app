import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-management-app-gcpb.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
