import { secureFetch } from "../utils/secureFetch";

export const downloadMom = (meetingId) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return secureFetch(
    `/api/meeting/downloadMom/${meetingId}`,
    {},
    "GET",
    token
  );
};