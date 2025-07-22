import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getPostById = async (id) => {
  const res = await api.get(`/boards/${id}`);
  return res.data;
};

export const getPosts = async () => {
  const res = await api.get("/boards");
  return res.data;
};
