import { secureFetch } from "../utils/secureFetch";

export const connectToJira = (userId) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return secureFetch(
    `/api/user/jiraSignup?userId=${userId}`,
    {
    },
    "GET",
    token
  );
}