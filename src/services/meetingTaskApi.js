import { secureFetch } from "../utils/secureFetch";

export const fetchMeetingTasks = (meetingId) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return secureFetch(
    `/api/meeting/getMeetingTasks/${meetingId}`,
    {},
    "GET",
    token
  );
};