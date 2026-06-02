// src/services/metricsApi.js
import { secureFetch } from "../utils/secureFetch";

export const fetchMeetingMetrics = async (meetingId) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("Fetching metrics for meeting ID:", meetingId);
  return secureFetch(
    `/api/meeting/getMetrics/${meetingId}`,
    {},
    "GET",
    token
  );
};