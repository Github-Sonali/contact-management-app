import axios from "axios";

const API = axios.create({
  baseURL: "https://contact-management-app-gcbp.onrender.com",
});

export default API;
