// src/services/googleCalendarApi.js
import { secureFetch } from "../utils/secureFetch";

export const fetchGoogleCalendars = async () => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("Fetching Google Calendars with token: ", token); 
  return secureFetch("/api/meeting", {}, "GET", token);
};